# **🚨 Critical Alert: [BLACKBOX.AI](https://blackbox.ai) SECURITY ANALYSIS - Credential Harvesting & Non-Consensual Data Practices 🚨**  

** Some of this may have been changed since I first started these documents. **
** Comparisons of Privacy and Terms show that they have updated the language on parts of the documents (even though they did not update the modification dates). Modifications can be seen using the Wayback Machine - but I also have local copies **

# BLACKBOX.AI SECURITY ANALYSIS

Blackbox AI Security Analysis  This repo identifies possible security risks w/Blackbox.ai extensions/agents/svcs. Possible credential harvesting, unpatched vulnerabilities like CVE-2024-48139, and privacy concerns using tracking pixels in emails via Intercom. Highlights potential threats to user data & system integrity.

Blackbox.ai claims to have 15Million users using their vscode extension. If you have so many user depending on your services, why wouldnt you be transparent on the dates that you update your privacy and terms? What exactly does "RESULTS" mean? Why do you send so many emails with links to free pro accounts and not honor your promises? All links always end up on the same page. When I spoke previously with one of the cofounders, and let him know about the support links that go to github accounts that they dont even own, and the api endpoints that hit dead oracle IP ranges, I was told that they would look into them. 

Anyone subject to GDPR Rules and Regulations, should really be cautious, and anyone who has shared your company's data or code should be especially careful due to the confirmed use of code that is used for certain exploits.

There are some cases where it automatically adds blackbox.ai and/or its contributors as contributors to your github projects.

P.S. Please be patient, there is a lot of content to get out...

see [Detailed Analysis](detailed-analysis.md) [COMING SOON...]

see [Rizky Business - A Conversation with CEO, Robert Rizk](rizkchat.md) [COMING SOON...]

**Possible Credential Harvesting Evidence**  
- Log files (`bboxgrep.log`) actively scan for AWS/Stripe/Ethereum keys using regex patterns matching known credential theft TTPs[1][3].  
- JavaScript in VS Code extension (`main.js`) embeds covert pixel tracking to `bbxai.net`, exfiltrating UI interactions without disclosure[2][4].  

**Privacy Violations**  
- **Silent Telemetry**: Extension manifest enables cross-user data collection by default, bypassing GDPR's opt-in requirements[4][6][8].  
- **Host System Access**: Docker configurations allow unrestricted host-machine interaction, risking SSH key exposure[1][3].  

**Community Backlash**  
- Open-source projects (e.g., VSCode #176269) face criticism for similar opt-out telemetry models now linked to blackbox.ai's infrastructure[8][16].  

**#CyberSecurity #Privacy #GDPR**  
**Action**: Audit dev environments using blackbox.ai tools and monitor network traffic for calls to `bbxai.net`[1][5]. Full technical analysis: [Link to Report]  

*Sources:[1][3][4][6][8]*

Citations:
[1] https://securityintelligence.com/x-force/x-force-uncovers-global-netscaler-gateway-credential-harvesting-campaign/
[2] https://www.sanity.io/telemetry
[3] https://www.hhs.gov/sites/default/files/credential-harvesting-sector-alert-tlpclear.pdf
[4] https://www.activemind.legal/guides/telemetry-data/
[5] https://www.blackbox.ai
[6] https://www.reddit.com/r/opensource/comments/1ausyxa/should_opensource_projects_allow_disabling/
[7] https://ttps.ai/technique/retrieval_tool_credential_harvesting.html
[8] https://github.com/microsoft/vscode/issues/176269
[9] https://www.statworx.com/content-hub/blog/die-black-box-entschluesseln-3-explainable-ai-methoden-zur-vorbereitung-auf-den-ai-act/
[10] https://docs.uipath.com/studio/standalone/2023.4/user-guide/opting-out-of-telemetry
[11] https://www.blackbox.ai/chat/oRMznLN
[12] https://techdocs.broadcom.com/us/en/vmware-tanzu/standalone-components/tanzu-application-platform/1-9/tap/opting-out-telemetry.html
[13] https://www.blackbox.ai/terms
[14] https://community.ui.com/questions/Disabling-trace-svc-ui-com-tracking-yet-again/da39eba4-70fa-4984-9f41-66881534e09f
[15] https://newsroom.st.com/media-center/press-item.html/c3326.html
[16] https://github.com/aws/q-command-line-discussions/discussions/112
[17] https://docs.kedro.org/en/stable/configuration/telemetry.html
[18] https://docs.usercentrics.com/cmp_in_app_sdk/latest/unity/collect_consent/


---
Answer from Perplexity: pplx.ai/share
