const BasePage = require('../base.page');

class SettingsPage extends BasePage {
    /**
     * Define selectors using getter methods
     */
    get settingsTitle() {
        return $('android=new UiSelector().text("Settings")');
    }

    get networkOption() {
        return $('android=new UiSelector().textContains("Network")');
    }

    get backButton() {
        return $('android=new UiSelector().descriptionContains("Back")');
    }

    /**
     * Navigate to Network settings and back
     */
    async navigateToNetworkAndBack() {
        await this.waitForPageLoaded();
        await this.networkOption.click();
        await driver.pause(1000);
        await this.backButton.click();
    }

    /**
     * Verify settings page is displayed
     */
    async verifySettingsDisplayed() {
        await this.waitForPageLoaded();
        await expect(this.settingsTitle).toBeDisplayed();
    }
}

module.exports = new SettingsPage();