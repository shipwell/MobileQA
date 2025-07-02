class BasePage {
    /**
     * Wait for the page to be loaded
     */
    async waitForPageLoaded() {
        await driver.pause(1000); // Basic wait, replace with proper wait strategy
    }
    
    /**
     * Get platform type (iOS or Android)
     */
    getPlatform() {
        return driver.capabilities.platformName.toLowerCase();
    }
    
    /**
     * Check if platform is iOS
     */
    isIOS() {
        return this.getPlatform() === 'ios';
    }
    
    /**
     * Check if platform is Android
     */
    isAndroid() {
        return this.getPlatform() === 'android';
    }
}

module.exports = BasePage;