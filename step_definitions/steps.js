const { Builder, By, until } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const chrome = require('selenium-webdriver/chrome');

let driver;
let registerPage;

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

When('A user navigate to visit here link', async function () {
    driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options())
        .build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    await registerPage.navigateToVisitLink();
    await registerPage.closeAlert();
});

When('the user enter the email', async function () {
    await registerPage.enterEmail('nacabe8902@javnoi.com'); // Provide a sample email
});

When('the user clicks on submit button', async function () {
    await registerPage.clickSubmitButton();
});

Then('the user should receive confirmation table for credentials', async function () {
    await driver.wait(until.elementLocated(By.xpath('//table')), 10000);
    console.log('User received confirmation table for credentials');
    await driver.quit();
});
