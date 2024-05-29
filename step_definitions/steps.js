const { Builder } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const assert = require('assert');

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);

let driver;
let registerPage;
async function closePopups() {
    try {
        // Example: Close any pop-up with a specific class or ID
        const popupCloseButton = await driver.findElement(By.css('.close-popup'));
        if (popupCloseButton) {
            await popupCloseButton.click();
        }
    } catch (error) {
        // Pop-up not found, continue with the test
    }
}

When('A user navigate to visit here link', async function () {
    driver = new Builder().forBrowser('firefox').build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    await registerPage.navigateToVisitLink();
    await registerPage.advertClose();
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
