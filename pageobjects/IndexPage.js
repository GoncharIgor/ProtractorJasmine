'use strict';

let BasePage = require('./BasePage');

class IndexPage extends BasePage {
    constructor() {
        super();
        this.computersAmountHeader = $('#main>h1');
        this.filterInputField = element(by.id('searchbox'));
        this.filterSubmitButton = element(by.id('searchsubmit'));
        this.addNewComputerButton = element(by.id('add'));
        this.tableHeaderColumns = element.all(by.tagName('th'));
        this.paginationBlok = element(by.id('pagination'));
        this.messageWarning = $('.alert-message.warning');
        this.computerNamesInTheTable = element.all(by.css('.computers.zebra-striped>tbody>tr>td>a'));
        this.computerIntroducedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(2)');
        this.computerDiscontinuedDateInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(3)');
        this.computerCompanyNameInTheTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(4)');
    }

    getTableColumnsAmount() {
        return this.tableHeaderColumns.count().then(function (count) {
            return count;
        });

    }

    navigateToEditComputerPage(){
        this.computerNamesInTheTable.get(0).click();
    }

    getComputersCount() {
        return this.computersAmountHeader.getText().then(function (text) {
            text = text.replace(/[^\/\d]/g, '');
            return text;
        });
    }

    findComputerInTheTable(computerName) {
        this.filterInputField.sendKeys(computerName);
        this.filterSubmitButton.click();
    };

    isComputerInfoInTheTableEqualsExpected(initialComputerData) {
        this.findComputerInTheTable(initialComputerData[0]);

        var actualComputerInfo = [];
        this.computerNamesInTheTable.get(0).getText().then(function (text) {
            actualComputerInfo.push(text);
            return text;
        });
        this.computerIntroducedDateInTheTable.getText().then(function (text) {
            actualComputerInfo.push(text);
            return text;
        });
        this.computerDiscontinuedDateInTheTable.getText().then(function (text) {
            actualComputerInfo.push(text);
            return text;
        });
        this.computerCompanyNameInTheTable.getText().then(function (text) {
            actualComputerInfo.push(text);
            return text;
        });
    }

    //TODO return the array

}

module.exports = IndexPage;
