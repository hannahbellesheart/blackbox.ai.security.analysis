---
created: 2025-04-27T10:57:29 (UTC -04:00)
tags: [sandbox,malware,analysis,online,submit,vxstream,sample,download,trojan,apt]
source: https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140
author: 
---

# Free Automated Malware Analysis Service - powered by Falcon Sandbox - Viewing online file analysis results for 'https://www.blackbox.ai/'

> ## Excerpt
> Submit malware for free analysis with Falcon Sandbox and Hybrid Analysis technology. Hybrid Analysis develops and licenses analysis tools to fight malware.

---
#### [MITRE ATT&CK™](https://attack.mitre.org) Techniques Detection

| Resource Development |
| --- |
| ATT&CK ID | Name | Tactics | Description | Malicious Indicators | Suspicious Indicators | Informative Indicators |
| T1583.001 | Domains | 
-   Resource Development

 | Adversaries may acquire domains that can be used during targeting. [Learn more](https://attack.mitre.org/techniques/T1583/001) |  |  | 

-   [Short-term SSL certificate detected](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)
-   [Recently renewed or created SSL certificate](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| Execution |
| ATT&CK ID | Name | Tactics | Description | Malicious Indicators | Suspicious Indicators | Informative Indicators |
| T1129 | Shared Modules | 

-   Execution

 | Adversaries may execute malicious payloads via loading shared modules. [Learn more](https://attack.mitre.org/techniques/T1129) |  |  | 

-   [Loads the RPC (Remote Procedure Call) module DLL](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| Defense Evasion |
| ATT&CK ID | Name | Tactics | Description | Malicious Indicators | Suspicious Indicators | Informative Indicators |
| T1480 | Execution Guardrails | 

-   Defense Evasion

 | Adversaries may use execution guardrails to constrain execution or actions based on adversary supplied and environment specific conditions that are expected to be present on the target. [Learn more](https://attack.mitre.org/techniques/T1480) |  |  | 

-   [Creates mutants](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1027 | Obfuscated Files or Information | 

-   Defense Evasion

 | Adversaries may attempt to make an executable or file difficult to discover or analyze by encrypting, encoding, or otherwise obfuscating its contents on the system or in transit. [Learn more](https://attack.mitre.org/techniques/T1027) |  |  | 

-   [Loads the Bcrypt module DLL](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1553.002 | Code Signing | 

-   Defense Evasion

 | Adversaries may create, acquire, or steal code signing materials to sign their malware or tools. [Learn more](https://attack.mitre.org/techniques/T1553/002) |  |  | 

-   [The input sample is signed with a certificate](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1140 | Deobfuscate/Decode Files or Information | 

-   Defense Evasion

 | Adversaries may use Obfuscated Files or Information to hide artifacts of an intrusion from analysis. [Learn more](https://attack.mitre.org/techniques/T1140) |  |  | 

-   [Shows ability to deobfuscate/decode files or information](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| Discovery |
| ATT&CK ID | Name | Tactics | Description | Malicious Indicators | Suspicious Indicators | Informative Indicators |
| T1518.001 | Security Software Discovery | 

-   Discovery

 | Adversaries may attempt to get a listing of security software, configurations, defensive tools, and sensors that are installed on a system or in a cloud environment. [Learn more](https://attack.mitre.org/techniques/T1518/001) |  |  | 

-   [Loads the debugger/analysis tool module](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1057 | Process Discovery | 

-   Discovery

 | Adversaries may attempt to get information about running processes on a system. [Learn more](https://attack.mitre.org/techniques/T1057) |  |  | 

-   [Process launched with changed environment](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)
-   [Spawns new processes](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)
-   [Spawns new processes that are not known child processes](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| Command and Control |
| ATT&CK ID | Name | Tactics | Description | Malicious Indicators | Suspicious Indicators | Informative Indicators |
| T1071 | Application Layer Protocol | 

-   Command and Control

 | Adversaries may communicate using OSI application layer protocols to avoid detection/network filtering by blending in with existing traffic. [Learn more](https://attack.mitre.org/techniques/T1071) |  |  | 

-   [Found potential URL in binary/memory](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)
-   [Contacts server](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)
-   [Contacts domains](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1132.001 | Standard Encoding | 

-   Command and Control

 | Adversaries may encode data with a standard data encoding system to make the content of command and control traffic more difficult to detect. [Learn more](https://attack.mitre.org/techniques/T1132/001) |  |  | 

-   [HTTP request contains Base64 encoded artifacts](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1071.001 | Web Protocols | 

-   Command and Control

 | Adversaries may communicate using application layer protocols associated with web traffic to avoid detection/network filtering by blending in with existing traffic. [Learn more](https://attack.mitre.org/techniques/T1071/001) |  | 

-   [GETs files from a webserver](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 | 

-   [Communicates with HTTP webserver (GET/POST requests)](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)
-   [Contacts random domain names](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1568.002 | Domain Generation Algorithms | 

-   Command and Control

 | Adversaries may make use of Domain Generation Algorithms (DGAs) to dynamically identify a destination domain for command and control traffic rather than relying on a list of static IP addresses or domains. [Learn more](https://attack.mitre.org/techniques/T1568/002) |  |  | 

-   [High entropy domain detected](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1071.004 | DNS | 

-   Command and Control

 | Adversaries may communicate using the Domain Name System (DNS) application layer protocol to avoid detection/network filtering by blending in with existing traffic. [Learn more](https://attack.mitre.org/techniques/T1071/004) |  |  | 

-   [Queries DNS server](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
| T1105 | Ingress Tool Transfer | 

-   Command and Control

 | Adversaries may transfer tools or other files from an external system into a compromised environment. [Learn more](https://attack.mitre.org/techniques/T1105) |  |  | 

-   [Dropped files](https://www.hybrid-analysis.com/sample/8d97c4ec292e93e417df84fa648f68d862f5f3eb12dfcf2a074877f597f441b7?environmentId=140#)

 |
