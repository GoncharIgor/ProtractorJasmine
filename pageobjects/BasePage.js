'use strict';

class BasePage {
    constructor() {
        this.appNameHeader = $('.fill>a');
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }

    clickButton(buttonName){
        buttonName.click();
    }

    getPageHeader(headerLocator){
        return this.appNameHeader.getText().then(function (text) {
                return text;
            }
        );
    }
}

module.exports = BasePage;