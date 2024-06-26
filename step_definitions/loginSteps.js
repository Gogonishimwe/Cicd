const { Builder, until, By } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let driver;
let registerPage;

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

When('A user enter user ID as {string}', async function (string) {
    driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    await registerPage.navigateLogin(string);
});

When('the user enter password as {string}', async function (string) {
    await registerPage.enterPassword(string);
});

When('the user clicks on Login button', async function () {
    await registerPage.loginButton();
});

Then('the user should be redirected to Manager page', async function () {
    const pageTitle = await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/ul/li[1]/a")), 10000).getText();
    assert.strictEqual("Manager", pageTitle);
    await driver.quit();
});
