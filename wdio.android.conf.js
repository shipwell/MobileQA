exports.config = {
    // Extend the main configuration
    ...require('./wdio.conf.js').config,
    
    // Override Android-specific settings
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        // Use a bundled app instead of requiring an APK file
        'appium:appPackage': 'com.android.settings',
        'appium:appActivity': '.Settings',
        'appium:autoGrantPermissions': true
    }],
    
    // Android-specific test specs
    specs: [
        './test/specs/android/**/*.js'
    ],
};