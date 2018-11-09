# DemoNightwatch

This repo contains a sandbox to learn nightwatch

Example tests are testing the Magenic Automation test Site
http://magenicautomation.azurewebsites.net/

Install Visual Studio Code
Install Node.js
Utilize Node to install Nightwatch

launch.json settings
    {
        "type": "node",
        "request": "launch",
        "console": "integratedTerminal",
        "name": "Local Chrome Debug",
        "program": "${workspaceFolder}\\node_modules\\nightwatch\\bin\\nightwatch",

        "args": [
            "--env", 
            "localchrome",
            "--tag",
            "dev",
        ]
    }