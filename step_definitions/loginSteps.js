const { Builder, until,By } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const assert = require('assert');

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);
let driver;
let registerPage;

When('A user enter user ID as {string}', async function (string) {
  driver = new Builder().forBrowser('firefox').build();
    registerPage = new RegisterPage(driver);
    await driver.get('https://demo.guru99.com/V1/index.php');
    registerPage.navigateLogin('mngr572981');
});



When('the user enter password as {string}', function (string) {
 registerPage.enterPassword(string);
});



When('the user clicks on Login button', function () {
  registerPage.loginButton();
});


Then('the user should be redicted to Manager page', async function (){
  const pageTitle= await driver.wait(until.elementLocated(By.xpath("/html/body/div[3]/div/ul/li[1]/a")), 10000).getText();
  assert.strictEqual("Manager",pageTitle);
  
});