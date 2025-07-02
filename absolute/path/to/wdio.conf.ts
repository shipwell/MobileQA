// ... existing code ...
capabilities: [{
    platformName: 'Android',
    browserName: 'Chrome',
    'appium:deviceName': process.env.DEVICE_NAME || 'Android Emulator',
    'appium:platformVersion': process.env.PLATFORM_VERSION || '15',
    'appium:automationName': 'UiAutomator2'
}]
// ... existing code ...