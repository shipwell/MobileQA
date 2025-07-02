# Mobile Automation Testing Framework

## Overview

This repository contains a mobile automation testing framework built with WebdriverIO and Appium. It's designed to run automated tests on Android and iOS devices/emulators.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Java Development Kit (JDK 8 or higher)
- Android SDK (for Android testing)
  - Android SDK Platform-tools
  - Android Emulator
  - Android SDK Build-tools
- Xcode (for iOS testing, macOS only)
- Appium Doctor (optional, for environment validation)

## Environment Setup

### 1. Install Node.js and npm

Download and install from [nodejs.org](https://nodejs.org/)

### 2. Set up Android Environment

1. Install Android Studio from [developer.android.com](https://developer.android.com/studio)
2. Set up environment variables:

```bash
# Add these to your ~/.bash_profile or ~/.zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/emulator
```

3. Create an Android Virtual Device (AVD) with API level 31 (Android 12.0)

### 3. Set up iOS Environment (macOS only)

1. Install Xcode from the App Store
2. Install Xcode Command Line Tools:

```bash
xcode-select --install
```

3. Install Carthage (dependency manager):

```bash
brew install carthage
```

### 4. Verify your setup with Appium Doctor

```bash
npm install -g @appium/doctor
appium-doctor --android  # For Android
appium-doctor --ios      # For iOS (macOS only)
```

Fix any issues reported by Appium Doctor before proceeding.

## Project Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd MobileQA
```

2. Install dependencies:

```bash
npm install
```

## Project Structure

```
├── apps/                   # Mobile application binaries (.apk, .ipa)
│   └── android-538.apk     # Android application under test
├── configs/                # WebdriverIO configuration files
│   └── wdio.android.conf.js # Android-specific configuration
├── test/                   # Test files
│   ├── pageobjects/        # Page Object Models
│   │   ├── login.page.js   # Login page object
│   │   ├── page.js         # Base page object
│   │   └── secure.page.js  # Secure page object
│   └── specs/              # Test specifications
│       └── test.e2e.js     # E2E test example
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies and scripts
└── wdio.conf.js            # Main WebdriverIO configuration
```

## Running Tests

### Start the Appium Server

In a separate terminal window, start the Appium server:

```bash
npm run appium
```

### Run Android Tests

Ensure you have an Android emulator running or a physical device connected, then run:

```bash
npm run test:android
```

### Run iOS Tests

Ensure you have an iOS simulator running or a physical device connected, then run:

```bash
npm run test:ios
```

### Run All Tests

```bash
npm test
```

## Configuration

### Android Configuration

The Android configuration is defined in `configs/wdio.android.conf.js`. Key settings include:

- Device Name: `Android GoogleAPI Emulator`
- Platform Version: `12.0`
- Automation Framework: `UiAutomator2`
- App Path: `./apps/android-538.apk`

Modify these settings to match your environment and requirements.

### iOS Configuration

The iOS configuration would be defined in `wdio.ios.conf.js` (not currently in the repository). You would need to create this file with appropriate iOS settings.

## Writing Tests

Tests are written using the WebdriverIO framework with Mocha as the test runner. The project uses the Page Object Model pattern for better maintainability.

### Example Test

```javascript
const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})
```

### Creating Page Objects

Page objects help organize selectors and methods for interacting with specific pages of your application.

```javascript
const { $ } = require('@wdio/globals')
const Page = require('./page')

class LoginPage extends Page {
    // Define selectors
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    // Define methods
    async login (username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

    open () {
        return super.open('login')
    }
}

module.exports = new LoginPage()
```

## Troubleshooting

### Common Issues

1. **Appium not found**: Install Appium globally or locally in the project:
   ```bash
   npm install --save-dev appium
   ```

2. **Device not found**: Ensure your emulator/simulator is running or physical device is connected and properly set up for development.

3. **App installation fails**: Check that the app path in the configuration is correct and the app is compatible with the device/emulator version.

4. **Test fails to find elements**: Verify the selectors in your page objects. Use Appium Inspector to help identify the correct selectors.

### Debugging

1. Increase log level in `wdio.conf.js`:
   ```javascript
   logLevel: 'debug',
   ```

2. Use Appium Inspector to inspect the application's UI elements.

3. Add browser.debug() in your test to pause execution and inspect the state.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

ISC

        