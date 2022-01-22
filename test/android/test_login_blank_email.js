const webdriverIO = require('webdriverio');
const { expect } = require('chai');
const { android_capabilites } = require('./../capabilities/android_caps');

describe(`Testing Login Page`, async() => {
    let driver;
    let selector;

    before(async() => {
        driver = await webdriverIO.remote(android_capabilites);
    });

    it(`Testing Login Page with Blank Email`, async() => {
        // Launch Activity Main
        const { capabilities: { appPackage, appActivity } } = android_capabilites;
        await driver.startActivity(appPackage, appActivity);

        // click Button Login without Input Anything
        selector = 'new UiSelector().text("LOGIN")';
        const buttonLogin = await driver.$(`android=${selector}`);
        await buttonLogin.click();

        // assert danger alert is showup
        selector = 'new UiSelector().text("Enter Valid Email")';
        const actualText = await driver.$(`android=${selector}`);
        expect(await actualText.getText()).to.equal('Enter Valid Email');
    });
});