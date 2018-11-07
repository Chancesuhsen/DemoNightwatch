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
            "webdriver.chrome.driver": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
            "webdriver.gecko.driver": "./lib/geckodriver_020.exe",
            "webdriver.ie.driver": "./lib/IEDriverServer.exe",
            "webdriver.ie.driver.loglevel": "TRACE",
            "webdriver.ie.driver.logfile": "./logs/iedriver.log",
            "webdriver.edge.driver": "./lib/MicrosoftWebDriver.exe",
            "webdriver.firefox.logfile": "./logs/gecko.log"
        }
    },
    "test_settings": {
        "default": {
            "launch_url": "",
            "selenium_host": "ondemand.saucelabs.com",
            "selenium_port": 4444,
            "username": sauce_username,
            "access_key": sauce_access_key,
            "use_ssl": false,
            "silent": true,
            "output": true,
            "screenshots": {
                "enabled": false,
                "on_failure": true,
                "path": "./screenshots"
            },
            "desiredCapabilities": {
                "name": "RepairClinic_automation_nightwatch",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            },
            "selenium": {
                "start_process": false
            }
        },
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