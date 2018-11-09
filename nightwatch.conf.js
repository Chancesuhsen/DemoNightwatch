const sauce_username = process.env.SAUCE_USERNAME;
const sauce_access_key = process.env.SAUCE_ACCESS_KEY;

const config = {
    "src_folders": ["./tests"],
    "output_folder": "./reports",
    "custom_commands_path": "./custom_commands",
    "custom_assertions_path": "",
    "page_objects_path": "./pageobjects",
    "globals_path": "./lib/Globals.js",
    "live_output": false,
    "parallel_process_delay": 5000,
    "disable_colors": false,
    "test_workers": {
        "enabled": true,
        "workers": "2"
    },
    "selenium": {
        "start_process": false,
        "server_path": "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.12.0.jar",
        "log_path": "./logs",
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe"
        }
    },
    "test_settings": {
        "localchrome": {
            "launch_url": "http://magenicautomation.azurewebsites.net",
            
            "desiredCapabilities": {
                "name": "Nightwatch - local-chrome",
                "browserName": "chrome"
            },
            "selenium_host": "localhost", 
            "selenium": {
                "start_process": true
            },
            "test_workers": {
                "enabled": false
            }
        }
    }
}
module.exports = config;