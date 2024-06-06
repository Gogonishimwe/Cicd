const { Builder, By, until } = require('selenium-webdriver');
const { When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const RegisterPage = require('../PageObjects/RegisterPage');
const assert = require('assert');
const path = require('path');

// Set default timeout to 60 seconds
setDefaultTimeout(60 * 1000);
let driver;
let registerPage;

        When('a user clicks on selenium link', async function () {
            driver = new Builder().forBrowser('chrome').build();
            registerPage = new RegisterPage(driver);
            await driver.get('https://demo.guru99.com/V1/index.php');
            await registerPage.selenium();
        });

        When('scroll down and clicks on File Upload link', async function () {
          await registerPage.fileUpload();
       });

       When('clicks on choose file', async function () {
          await driver.get('https://demo.guru99.com/test/upload/');
          const filePath = path.resolve(__dirname, "C:/Users/Gloria/Desktop/Screenshot_8.png"); // Update the path to your file
          await registerPage.chooseDocument(filePath);
        });

   

         When('select file from local machine', function () {
          
         });

         When('the user clicks on checkbox for I accept terms of service', async function () {
          await registerPage.acceptTerms();
      });
      
      When('clicks on submit button file', async function () {
          await registerPage.submitFile();
      });
      
      Then('the user should be redicted to Manager page', async function (expectedMessage) { 
        const successMessageElement = await driver.wait(until.elementLocated(By.xpath('//*[@id="res"]/center/text()[2]')), 10000);
        const actualMessage = await successMessageElement.getText();
        assert.strictEqual(actualMessage, expectedMessage);
          
      });
