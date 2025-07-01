<#
.SYNOPSIS
BlackboxAI Extension Forensic Analyzer
.DESCRIPTION
Version 3.2 - Complete forensic analysis script for minified JavaScript
#>

# Configuration
$script:OutputDir = $null
$script:LogFile = $null
$script:ExtensionJsPath = $null
$script:ExecutionStart = Get-Date
$script:AnalysisFunctions = @(
    "Find-CredentialPatterns",
    "Find-NetworkEndpoints",
    "Find-Base64Payloads",
    "Find-BrowserAutomation",
    "Find-EnvironmentAccess",
    "Find-SuspiciousStrings"
)

function Initialize-OutputDirectory {
    $potentialDirs = @(
        if ($MyInvocation.MyCommand.Path) {
            Split-Path -Parent $MyInvocation.MyCommand.Path
        } elseif ($PSScriptRoot) {
            $PSScriptRoot
        } else {
            $PWD.Path
        },
        $PWD.Path,
        "D:\_Logs\bbai-ext-extraction",
        [System.IO.Path]::GetTempPath()
    )

    foreach ($dir in $potentialDirs) {
        try {
            $testFile = Join-Path $dir "write_test_$(Get-Date -Format 'yyyyMMddHHmmss').tmp"
            [IO.File]::WriteAllText($testFile, "test")
            Remove-Item $testFile -Force -ErrorAction Stop
            
            $script:OutputDir = Join-Path $dir "bbai-forensics-$(Get-Date -Format 'yyyyMMdd_HHmmss')"
            New-Item -ItemType Directory -Path $script:OutputDir -Force | Out-Null
            
            Write-Host "[+] Using output directory: $script:OutputDir" -ForegroundColor Green
            return
        }
        catch {
            Write-Verbose "Cannot write to $dir - trying next location"
            continue
        }
    }
    
    throw "Could not find a writable output directory after trying all fallbacks"
}

function Resolve-ExtensionJsPath {
    $searchPaths = @(
        (Join-Path $PWD.Path "extension.js"),
        (Join-Path $PWD.Path "dist/extension.js"),
        (Join-Path $PWD.Path "extension/dist/extension.js"),
        (Join-Path $PWD.Path "blackboxagent/extension.js")
    )

    foreach ($path in $searchPaths) {
        if (Test-Path $path) {
            $script:ExtensionJsPath = $path
            Write-Host "[+] Found extension.js at: $path" -ForegroundColor Green
            return
        }
    }

    throw "Could not locate extension.js in any of these paths:`n$($searchPaths -join "`n")"
}

function Start-ForensicAnalysis {
    try {
        Initialize-OutputDirectory
        $script:LogFile = Join-Path $script:OutputDir "analysis_log.txt"
        Start-Transcript -Path $script:LogFile -Append

        Write-Host "`n[=== BlackboxAI Forensic Analysis ===]" -ForegroundColor Cyan
        Write-Host "[+] Started: $($script:ExecutionStart)" -ForegroundColor DarkGray
        Write-Host "[+] PowerShell Version: $($PSVersionTable.PSVersion)" -ForegroundColor DarkGray
        Write-Host "[+] Current Directory: $($PWD.Path)" -ForegroundColor DarkGray

        Resolve-ExtensionJsPath

        foreach ($func in $script:AnalysisFunctions) {
            try {
                Write-Host "`n[+] Running $func..." -ForegroundColor Yellow
                & $func
            }
            catch {
                Write-Host "[!] Error in $func`: $_" -ForegroundColor Red
                Add-Content -Path (Join-Path $script:OutputDir "errors.log") -Value "[$(Get-Date)] $func failed: $_"
                continue
            }
        }

        Generate-Report

        $duration = (Get-Date) - $script:ExecutionStart
        Write-Host "`n[+] Analysis completed in $($duration.TotalSeconds.ToString('0.0')) seconds" -ForegroundColor Green
        Write-Host "[+] Results saved to: $script:OutputDir" -ForegroundColor Cyan
    }
    catch {
        $errorMsg = "[!] FATAL ERROR: $_`nStack Trace:`n$($_.ScriptStackTrace)"
        Write-Host $errorMsg -ForegroundColor Red
        Add-Content -Path (Join-Path $script:OutputDir "errors.log") -Value "[$(Get-Date)] $errorMsg"
        exit 1
    }
    finally {
        try { Stop-Transcript } catch { Write-Verbose "Transcript already stopped" }
    }
}

function Find-CredentialPatterns {
    $outputFile = Join-Path $script:OutputDir "credential_patterns.txt"
    
    try {
        $patterns = @(
            '(AKIA|ABIA|ACCA)[0-9A-Z]{16}',
            'sk_(live|test)_[0-9a-zA-Z]{24}',
            '0x[a-fA-F0-9]{40}',
            '(?i)password\s*=\s*["''][^"''\s]+'
        )

        $content = [System.IO.File]::ReadAllText($script:ExtensionJsPath)
        $results = [System.Collections.ArrayList]::new()
        
        foreach ($pattern in $patterns) {
            $matches = [regex]::Matches($content, $pattern)
            foreach ($match in $matches) {
                $startPos = [Math]::Max(0, $match.Index - 50)
                $endPos = [Math]::Min($content.Length, $match.Index + $match.Length + 50)
                $context = $content.Substring($startPos, $endPos - $startPos)
                
                $null = $results.Add(@"
MATCH: $($match.Value)
CONTEXT: $context
-----
"@)
            }
        }

        if ($results.Count -gt 0) {
            $results | Out-File $outputFile
            Write-Host "[+] Found $($results.Count) credential patterns" -ForegroundColor Green
            $results | Select-Object -First 3 | ForEach-Object { 
                Write-Host "  - $($_.Split("`n")[0])" -ForegroundColor Cyan 
            }
        }
        else {
            Write-Host "[!] No credential patterns found" -ForegroundColor Yellow
            "No credentials found" | Out-File $outputFile
        }
    }
    catch {
        Write-Host "[!] Credential scan failed: $_" -ForegroundColor Red
        "Scan failed: $_" | Out-File $outputFile
    }
}

function Find-NetworkEndpoints {
    $outputFile = Join-Path $script:OutputDir "network_endpoints.txt"
    
    try {
        $content = [System.IO.File]::ReadAllText($script:ExtensionJsPath)
        $endpoints = [regex]::Matches($content, 'https?://[^\''"\s]+(telemetry|track|ingest|pixel|api|collect)')
        
        if ($endpoints.Count -gt 0) {
            $formattedEndpoints = $endpoints | ForEach-Object {
                $context = $content.Substring(
                    [Math]::Max(0, $_.Index - 30),
                    [Math]::Min(100, $content.Length - $_.Index + 30)
                ).Replace("`n", " ")
                
                "$($_.Value)`nContext: $context`n-----"
            }
            
            $formattedEndpoints | Out-File $outputFile
            Write-Host "[+] Found $($endpoints.Count) unique endpoints" -ForegroundColor Green
            $endpoints | Select-Object -First 3 | ForEach-Object { 
                Write-Host "  - $($_.Value)" -ForegroundColor Cyan
                Write-Host "    Context: $($content.Substring($_.Index - 20, 50).Replace("`n", " "))..." -ForegroundColor DarkGray
            }
        }
        else {
            Write-Host "[!] No network endpoints found" -ForegroundColor Yellow
            "No endpoints found" | Out-File $outputFile
        }
    }
    catch {
        Write-Host "[!] Network endpoint scan failed: $_" -ForegroundColor Red
        "Scan failed: $_" | Out-File $outputFile
    }
}

function Find-Base64Payloads {
    $outputFile = Join-Path $script:OutputDir "base64_payloads.csv"
    
    try {
        $content = [System.IO.File]::ReadAllText($script:ExtensionJsPath)
        $payloads = [regex]::Matches($content, '[A-Za-z0-9+/=]{20,}')
        
        if ($payloads.Count -gt 0) {
            $decodedData = [System.Collections.ArrayList]::new()
            $payloads | ForEach-Object {
                try {
                    $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($_.Value))
                    if ($decoded -match '\w{5,}') {
                        $null = $decodedData.Add([PSCustomObject]@{
                            Encoded = $_.Value
                            Decoded = $decoded
                            Context = $content.Substring(
                                [Math]::Max(0, $_.Index - 30),
                                [Math]::Min(100, $content.Length - $_.Index + 30)
                            ).Replace("`n", " ")
                        })
                    }
                }
                catch {}
            }

            if ($decodedData.Count -gt 0) {
                $decodedData | Export-Csv $outputFile -NoTypeInformation
                Write-Host "[+] Found $($decodedData.Count) decodable payloads" -ForegroundColor Green
                $decodedData | Select-Object -First 3 | ForEach-Object { 
                    Write-Host "  - Encoded: $($_.Encoded.Substring(0,15))..." -ForegroundColor Cyan
                    Write-Host "    Decoded: $($_.Decoded.Substring(0,50))..." -ForegroundColor DarkCyan
                }
            }
            else {
                Write-Host "[!] No valid Base64 payloads" -ForegroundColor Yellow
                "No decodable payloads" | Out-File $outputFile
            }
        }
        else {
            Write-Host "[!] No Base64 strings found" -ForegroundColor Yellow
            "No Base64 found" | Out-File $outputFile
        }
    }
    catch {
        Write-Host "[!] Base64 scan failed: $_" -ForegroundColor Red
        "Scan failed: $_" | Out-File $outputFile
    }
}

function Find-BrowserAutomation {
    $outputFile = Join-Path $script:OutputDir "browser_automation.txt"
    
    try {
        $content = [System.IO.File]::ReadAllText($script:ExtensionJsPath)
        $patterns = @(
            'puppeteer.*?launch\(.*?\)',
            'page\.(evaluate|screenshot|content|pdf)\(.*?\)'
        )

        $results = [System.Collections.ArrayList]::new()
        foreach ($pattern in $patterns) {
            $matches = [regex]::Matches($content, $pattern)
            foreach ($match in $matches) {
                $context = $content.Substring(
                    [Math]::Max(0, $match.Index - 50),
                    [Math]::Min(200, $content.Length - $match.Index + 50)
                ).Replace("`n", " ")
                
                $null = $results.Add(@"
MATCH: $($match.Value)
CONTEXT: $context
-----
"@)
            }
        }

        if ($results.Count -gt 0) {
            $results | Out-File $outputFile
            Write-Host "[+] Found $($results.Count) automation indicators" -ForegroundColor Green
            $results | Select-Object -First 3 | ForEach-Object { 
                Write-Host "  - $($_.Split("`n")[0])" -ForegroundColor Cyan
            }
        }
        else {
            Write-Host "[!] No automation found" -ForegroundColor Yellow
            "No automation found" | Out-File $outputFile
        }
    }
    catch {
        Write-Host "[!] Browser automation scan failed: $_" -ForegroundColor Red
        "Scan failed: $_" | Out-File $outputFile
    }
}

function Find-EnvironmentAccess {
    $outputFile = Join-Path $script:OutputDir "environment_access.txt"
    
    try {
        $content = [System.IO.File]::ReadAllText($script:ExtensionJsPath)
        $patterns = @(
            'process\.env\.\w+',
            'getEnvironmentVariable\(.*?\)',
            'registry.*?read\(.*?\)',
            'localStorage\.getItem\(.*?\)'
        )

        $results = [System.Collections.ArrayList]::new()
        foreach ($pattern in $patterns) {
            $matches = [regex]::Matches($content, $pattern)
            foreach ($match in $matches) {
                $context = $content.Substring(
                    [Math]::Max(0, $match.Index - 50),
                    [Math]::Min(200, $content.Length - $match.Index + 50)
                ).Replace("`n", " ")
                
                $null = $results.Add(@"
MATCH: $($match.Value)
CONTEXT: $context
-----
"@)
            }
        }

        if ($results.Count -gt 0) {
            $results | Out-File $outputFile
            Write-Host "[+] Found $($results.Count) environment access points" -ForegroundColor Green
            $results | Select-Object -First 3 | ForEach-Object { 
                Write-Host "  - $($_.Split("`n")[0])" -ForegroundColor Cyan
            }
        }
        else {
            Write-Host "[!] No environment access found" -ForegroundColor Yellow
            "No environment access found" | Out-File $outputFile
        }
    }
    catch {
        Write-Host "[!] Environment access scan failed: $_" -ForegroundColor Red
        "Scan failed: $_" | Out-File $outputFile
    }
}

function Find-SuspiciousStrings {
    $outputFile = Join-Path $script:OutputDir "suspicious_strings.txt"
    
    try {
        $content = [System.IO.File]::ReadAllText($script:ExtensionJsPath)
        $patterns = @(
            'eval\(.*?\)',
            'Function\(.*?\)',
            'new ActiveXObject\(.*?\)',
            'WebSocket\(.*?\)',
            'XMLHttpRequest\(.*?\)',
            'atob\(.*?\)',
            'btoa\(.*?\)',
            'require\(.*?\)'
        )

        $results = [System.Collections.ArrayList]::new()
        foreach ($pattern in $patterns) {
            $matches = [regex]::Matches($content, $pattern)
            foreach ($match in $matches) {
                $context = $content.Substring(
                    [Math]::Max(0, $match.Index - 50),
                    [Math]::Min(200, $content.Length - $match.Index + 50)
                ).Replace("`n", " ")
                
                $null = $results.Add(@"
MATCH: $($match.Value)
CONTEXT: $context
-----
"@)
            }
        }

        if ($results.Count -gt 0) {
            $results | Out-File $outputFile
            Write-Host "[+] Found $($results.Count) suspicious strings" -ForegroundColor Green
            $results | Select-Object -First 3 | ForEach-Object { 
                Write-Host "  - $($_.Split("`n")[0])" -ForegroundColor Cyan
            }
        }
        else {
            Write-Host "[!] No suspicious strings found" -ForegroundColor Yellow
            "No suspicious strings found" | Out-File $outputFile
        }
    }
    catch {
        Write-Host "[!] Suspicious strings scan failed: $_" -ForegroundColor Red
        "Scan failed: $_" | Out-File $outputFile
    }
}

function Generate-Report {
    $reportFile = Join-Path $script:OutputDir "00_Forensic_Report.txt"
    
    try {
        $report = @"
BLACKBOXAI EXTENSION FORENSIC REPORT
====================================
Generated: $(Get-Date)
Source File: $(Resolve-Path $script:ExtensionJsPath)
File Size: $((Get-Item $script:ExtensionJsPath).Length / 1MB) MB

FINDINGS SUMMARY:
- Credential Patterns: $(if (Test-Path "$script:OutputDir\credential_patterns.txt") { (Get-Content "$script:OutputDir\credential_patterns.txt" | Where-Object { $_ -match '^MATCH:' }).Count } else { 0 })
- Network Endpoints: $(if (Test-Path "$script:OutputDir\network_endpoints.txt") { (Get-Content "$script:OutputDir\network_endpoints.txt" | Where-Object { $_ -match '^https?://' }).Count } else { 0 })
- Base64 Payloads: $(if (Test-Path "$script:OutputDir\base64_payloads.csv") { (Import-Csv "$script:OutputDir\base64_payloads.csv").Count } else { 0 })
- Browser Automation: $(if (Test-Path "$script:OutputDir\browser_automation.txt") { "Yes ($((Get-Content "$script:OutputDir\browser_automation.txt" | Where-Object { $_ -match '^MATCH:' }).Count) indicators)" } else { "No" })
- Environment Access: $(if (Test-Path "$script:OutputDir\environment_access.txt") { "Yes ($((Get-Content "$script:OutputDir\environment_access.txt" | Where-Object { $_ -match '^MATCH:' }).Count) indicators)" } else { "No" })
- Suspicious Strings: $(if (Test-Path "$script:OutputDir\suspicious_strings.txt") { "Yes ($((Get-Content "$script:OutputDir\suspicious_strings.txt" | Where-Object { $_ -match '^MATCH:' }).Count) indicators)" } else { "No" })

NEXT STEPS:
1. Review all files in: $script:OutputDir
2. Check network captures for endpoint connections
3. Audit any credentials found in your systems

"@

        $report | Out-File $reportFile
        Write-Host "[+] Generated final report: $reportFile" -ForegroundColor Green
    }
    catch {
        Write-Host "[!] Report generation failed: $_" -ForegroundColor Red
    }
}

# Execute with top-level error handling
try {
    Start-ForensicAnalysis
    exit 0
}
catch {
    Write-Host "[!] Critical startup failure: $_" -ForegroundColor Red
    exit 1
}