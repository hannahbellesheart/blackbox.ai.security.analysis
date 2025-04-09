#!/usr/bin/env bash

set -e

MONACO_VSCODE_API_VERSION=v11.1.2
DOMAIN="http://localhost:5173"

COMMIT_SHA=$(curl https://raw.githubusercontent.com/CodinGame/monaco-vscode-api/${MONACO_VSCODE_API_VERSION}/package.json | jq -r '.["config"]["vscode"]["commit"]')

wget https://update.code.visualstudio.com/commit:$COMMIT_SHA/server-linux-x64/stable -O vscodium-reh-linux-x64-1.95.3.24321.tar.gz

mkdir -p /opt/vscodium
tar --no-same-owner -xzv --strip-components=1 -C /opt/vscodium -f vscodium-reh-linux-x64-1.95.3.24321.tar.gz

cd /opt/vscodium
cat <<<"$(jq ".webEndpointUrlTemplate = \"${DOMAIN}/\"" product.json)" >product.json
cat <<<"$(jq ".commit = \"$COMMIT_SHA\"" product.json)" >product.json

cd -
/opt/vscodium/bin/code-server --install-extension ./blackboxagent.vsix

# Configure VSCodium shell integration and terminal settings
HOME=/root

VSCODIUM_CONFIG_DIR="$HOME/.vscode-server/data/Machine"
VSCODIUM_RESOURCES_DIR="/opt/vscodium/resources/terminal"

# Create necessary directories
mkdir -p "$VSCODIUM_CONFIG_DIR"
mkdir -p "$VSCODIUM_RESOURCES_DIR"

# Create settings.json with terminal configuration
cat >> "$VSCODIUM_CONFIG_DIR/settings.json" << 'EOL'
{
    "terminal.integrated.shellIntegration.enabled": true,
    "terminal.integrated.defaultProfile.linux": "bash",
    "terminal.integrated.profiles.linux": {
        "bash": {
            "path": "/bin/bash",
            "args": ["--login"],
            "icon": "terminal-bash"
        }
    },
    "terminal.integrated.automationShell.linux": "/bin/bash",
    "terminal.integrated.shellIntegration.decorationsEnabled": "both",
    "terminal.integrated.enablePersistentSessions": false,
    "security.workspace.trust.enabled": true,
    "blackbox.shellMode": true,
    "terminal.integrated.env.linux": {
        "SHELL": "/bin/bash",
        "TERM": "xterm-256color"
    },
    "terminal.integrated.inheritEnv": true
}
EOL

