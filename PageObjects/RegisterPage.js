const { By, until } = require('selenium-webdriver');

class RegisterPage {
    constructor(driver) {
        this.driver = driver;
        this.visitLink = By.xpath('/html/body/div[3]/ol/li[1]/a');;
        this.emailInput = By.xpath("/html/body/form/table/tbody/tr[5]/td[2]/input");
        this.submitButton = By.name('btnLogin');
        this.advertClose = By.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div/span');
        this.loginField=By.xpath("/html/body/form/table/tbody/tr[1]/td[2]/input");
        this.passwordField=By.xpath("/html/body/form/table/tbody/tr[2]/td[2]/input");
        this.loginBtn=By.xpath("/html/body/form/table/tbody/tr[3]/td[2]/input[1]");
        this.seleniumLink = By.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/a');
        this.fileUploadLink = By.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/ul/li[10]/a');
        this.chooseFile = By.className('upload_txt');
        this.checkBox = By.id('terms');
        this.submitButton = By.id('submitbutton');
    }
    async closePopups() {
        try {
            // Example: Close any pop-up with a specific class or ID
            const popupCloseButton = await this.driver.findElement(By.css('.close-popup'));
            if (popupCloseButton) {
                await popupCloseButton.click();
            }
        } catch (error) {
            // Pop-up not found, continue with the test
        }
    }

    async navigateToVisitLink() {
        const visitLinkElement = await this.driver.findElement(this.visitLink);
        await visitLinkElement.click();
    }
    async closeAlert(){
        const advertCloseElement = await this.driver.findElement(this.advertClose);
        await advertCloseElement.click();
    }

    async enterEmail(email) {
        const emailInputElement = await this.driver.findElement(this.emailInput);
        await emailInputElement.sendKeys(email);
    }

    async clickSubmitButton() {
        const submitButtonElement = await this.driver.findElement(this.submitButton);
        await submitButtonElement.click();
    }
    async navigateLogin(id){
        const loginButtonElement= await this.driver.findElement(this.loginField);
        await loginButtonElement.sendKeys(id);
    }
    async enterPassword(password){
        const passwordElement=await this.driver.findElement(this.passwordField);
        await passwordElement.sendKeys(password);
    }
    async loginButton(){
        const loginBtn1Element=await this.driver.findElement(this.loginBtn);
        await loginBtn1Element.click();
    }
    async selenium() {
        const seleniumDropdownElement = await this.driver.wait(until.elementLocated(this.seleniumLink), 10000);
        await this.driver.wait(until.elementIsVisible(seleniumDropdownElement), 10000);
        await seleniumDropdownElement.click();
    }

    async fileUpload() {
        const fileElement = await this.driver.wait(until.elementLocated(this.fileUploadLink), 10000);
        await this.driver.wait(until.elementIsVisible(fileElement), 10000);
        await fileElement.click();
    }

    async chooseDocument(filePath) {
        const chooseElement = await this.driver.wait(until.elementLocated(this.chooseFile), 10000);
        await this.driver.wait(until.elementIsVisible(chooseElement), 10000);
        await chooseElement.sendKeys(filePath);
    }
    async acceptTerms() {
        const termsElement = await this.driver.wait(until.elementLocated(this.checkBox), 10000);
        await this.driver.wait(until.elementIsVisible(termsElement), 10000);
        await termsElement.click();
    }

    async submitFile() {
        const submitElement = await this.driver.wait(until.elementLocated(this.submitButton), 10000);
        await this.driver.wait(until.elementIsVisible(submitElement), 10000);
        await submitElement.click();
    }

}

module.exports = RegisterPage;
