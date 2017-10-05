'use strict';

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
}

module.exports = BasePage;