describe('Android Settings App', () => {
  it('should open settings and verify basic elements', async () => {
    // Wait for app to load
    await driver.pause(3000);
    
    // Verify we're on the settings screen
    const settingsTitle = await $('android=new UiSelector().text("Settings")');
    await expect(settingsTitle).toBeDisplayed();
    
    // Tap on Network & Internet
    const networkOption = await $('android=new UiSelector().textContains("Network")');
    await networkOption.click();
    
    // Verify we navigated to Network settings
    await driver.pause(1000);
    const backButton = await $('android=new UiSelector().descriptionContains("Back")');
    await expect(backButton).toBeDisplayed();
    
    // Go back to main settings
    await backButton.click();
  });
});