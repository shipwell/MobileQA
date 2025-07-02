exports.config = {
    // Extend the main configuration
    ...require('./wdio.conf.js').config,
    
    capabilities: [{
        platformName: 'iOS',
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 15',
        'appium:platformVersion': '17.5',  // match your Simulator
        'appium:bundleId': 'com.apple.mobilenotes',  // Notes app
        'appium:noReset': true,
        'appium:autoAcceptAlerts': true,
        'appium:connectHardwareKeyboard': false
    }],
    
    // iOS-specific test specs
    specs: [
        './test/specs/ios/**/*.js'
    ],
};