exports.config = {
    // Extend the main configuration
    ...require('../wdio.conf.js').config,
    
    // Override Android-specific settings
    capabilities: [{
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.cwd() + '/apps/android-538.apk',
        'appium:autoGrantPermissions': true
    }],
    
    // You can override other settings specific to Android tests here
    // For example:
    // specs: [
    //    './test/specs/android/**/*.js'
    // ],
};