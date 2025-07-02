describe('iOS Notes App', () => {
  it('should launch Notes and create a new note', async () => {
    // Wait for app to load
    await driver.pause(3000);
    
    // Find and tap the compose button
    const composeButton = await $('-ios predicate string:type == "XCUIElementTypeButton" AND label == "Compose"');
    await expect(composeButton).toBeDisplayed();
    await composeButton.click();
    
    // Verify text editor is displayed
    const textEditor = await $('-ios predicate string:type == "XCUIElementTypeTextView"');
    await expect(textEditor).toBeDisplayed();
    
    // Type some text
    await textEditor.setValue('Test note created by automation');
    
    // Tap Done button
    const doneButton = await $('-ios predicate string:type == "XCUIElementTypeButton" AND label == "Done"');
    await doneButton.click();
    
    // Verify we're back to the notes list
    await driver.pause(1000);
    await expect(composeButton).toBeDisplayed();
  });
});