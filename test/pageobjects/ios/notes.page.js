const BasePage = require('../base.page');

class NotesPage extends BasePage {
    /**
     * Define selectors using getter methods
     */
    get composeButton() {
        return $('-ios predicate string:type == "XCUIElementTypeButton" AND label == "Compose"');
    }

    get textEditor() {
        return $('-ios predicate string:type == "XCUIElementTypeTextView"');
    }

    get doneButton() {
        return $('-ios predicate string:type == "XCUIElementTypeButton" AND label == "Done"');
    }

    /**
     * Create a new note with the given text
     * @param {string} text - The text to enter in the note
     */
    async createNewNote(text) {
        await this.waitForPageLoaded();
        await this.composeButton.click();
        await this.textEditor.waitForDisplayed();
        await this.textEditor.setValue(text);
        await this.doneButton.click();
        await driver.pause(1000); // Wait for navigation to complete
    }

    /**
     * Verify notes app is ready
     */
    async verifyNotesAppReady() {
        await this.waitForPageLoaded();
        await expect(this.composeButton).toBeDisplayed();
    }
}

module.exports = new NotesPage();