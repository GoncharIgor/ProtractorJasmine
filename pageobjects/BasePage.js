'use strict';
const EC = protractor.ExpectedConditions;

class BasePage {
    constructor() {
        this.appNameHeader = $('.fill>a');
        this.pageHeader = $('#main>h1');
    }

    getPageTitle() {
        return browser.getTitle().then((title) => title);
    }

    get getPageHeader() {
        return this.pageHeader;
    }

    getAppHeaderText() {
        return this.appNameHeader.getText().then((text) => text);
    }

    getPageHeaderText() {
        return this.pageHeader.getText().then((text) => text);
    }

    clickButton(button) {
        return button.click();
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }

    waitUntilVisible(elem) {
        browser.wait(EC.presenceOf(elem), 5000).then(() => browser.wait(EC.visibilityOf(elem), 5000));
        return elem;
    }
}

module.exports = BasePage;