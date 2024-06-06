const { By, until } = require('selenium-webdriver');

class RegisterPage {
    constructor(driver) {
        this.driver = driver;
        this.visitLink = By.xpath('/html/body/div[3]/ol/li[1]/a');
        this.emailInput = By.xpath("/html/body/form/table/tbody/tr[5]/td[2]/input");
        this.submitButton = By.name('btnLogin');
        this.advertClose = By.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div/span');
        this.loginField = By.xpath("/html/body/form/table/tbody/tr[1]/td[2]/input");
        this.passwordField = By.xpath("/html/body/form/table/tbody/tr[2]/td[2]/input");
        this.loginBtn = By.xpath("/html/body/form/table/tbody/tr[3]/td[2]/input[1]");
        this.seleniumLink = By.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/a');
        this.fileUploadLink = By.xpath('//*[@id="navbar-brand-centered"]/ul/li[1]/ul/li[10]/a');
        this.chooseFile = By.className('upload_txt');
        this.checkBox = By.id('terms');
        this.submitButton = By.id('submitbutton');
    }

    async closeAlert() {
        try {
            const advertCloseElement = await this.driver.findElement(this.advertClose);
            await advertCloseElement.click();
        } catch (error) {
            // Alert not found
        }
    }

    async navigateToVisitLink() {
        const visitLinkElement = await this.driver.findElement(this.visitLink);
        await visitLinkElement.click();
    }

    async enterEmail(email) {
        const emailInputElement = await this.driver.findElement(this.emailInput);
        await emailInputElement.sendKeys(email);
    }

    async clickSubmitButton() {
        const submitButtonElement = await this.driver.findElement(this.submitButton);
        await submitButtonElement.click();
    }

    async navigateLogin(id) {
        const loginFieldElement = await this.driver.findElement(this.loginField);
        await loginFieldElement.sendKeys(id);
    }

    async enterPassword(password) {
        const passwordElement = await this.driver.findElement(this.passwordField);
        await passwordElement.sendKeys(password);
    }

    async loginButton() {
        const loginBtnElement = await this.driver.findElement(this.loginBtn);
        await loginBtnElement.click();
    }

    async selenium() {
        const seleniumDropdownElement = await this.driver.wait(until.elementLocated(this.seleniumLink), 10000);
        await seleniumDropdownElement.click();
    }

    async fileUpload() {
        const fileElement = await this.driver.wait(until.elementLocated(this.fileUploadLink), 10000);
        await fileElement.click();
    }

    async chooseDocument(filePath) {
        const chooseElement = await this.driver.wait(until.elementLocated(this.chooseFile), 10000);
        await chooseElement.sendKeys(filePath);
    }

    async acceptTerms() {
        const termsElement = await this.driver.wait(until.elementLocated(this.checkBox), 10000);
        await termsElement.click();
    }

    async submitFile() {
        const submitElement = await this.driver.wait(until.elementLocated(this.submitButton), 10000);
        await submitElement.click();
    }
}

module.exports = RegisterPage;

