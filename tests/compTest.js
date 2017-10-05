const IndexPage = require('./../pageobjects/IndexPage');
const AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');
const EditComputerPage = require('./../pageobjects/EditComputerPage');
const StringUtils = require('./../utils/StringUtils');

describe('Computer-database mainPage layout verification', function () {
    let indexPageObject = new IndexPage();
    beforeEach(function () {
        return browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('Page should have a title', function () {
        expect(browser.getTitle()).toEqual('Computers database');
    });

    it('App should have expected header', function () {
        indexPageObject.getPageHeader(indexPageObject.appNameHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual("Play sample application — Computer database");
        });
    });
    it('App should have visible amount of computers on the page header', function () {
        expect(indexPageObject.computersAmountHeader.isDisplayed()).toBe(true);
    });

    it('App should have visible filter input field', function () {
        expect(indexPageObject.filterInputField.isDisplayed()).toBe(true);
        expect(indexPageObject.filterInputField.getText()).toBe('');
    });
    it('App should have visible filter submit button', function () {
        expect(indexPageObject.filterSubmitButton.isDisplayed()).toBe(true);
    });

    it('App should have visible \'Add new computer\' button', function () {
        expect(indexPageObject.addNewComputerButton.isDisplayed()).toBe(true);
    });

    it('App should have visible pagination block', function () {
        expect(indexPageObject.paginationBlok.isDisplayed()).toBe(true);
    });
    it('App should have table with 4 columns', function () {
        indexPageObject.getTableColumnsAmount().then(function (tableColumnsAmount) {
            expect(tableColumnsAmount).toEqual(4);
        });
    });

});


describe('Add new computer page layout verification', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers');
        indexPageObject.clickButton(indexPageObject.addNewComputerButton);
    });

    it('Add new computer page should have a title', function () {
        expect(browser.getTitle()).toEqual('Computers database');
    });

    it('Add new computer page should have expected header', function () {
        addNewComputerPageObject.getPageHeader(addNewComputerPageObject.addComputerHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual('Add a computer');
        });
    });

    it('Add new computer page should have visible computer name input', function () {
        expect(addNewComputerPageObject.computerNameInputField.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for computer name input', function () {
        expect(addNewComputerPageObject.computerNameInputFieldLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Introduced date input', function () {
        expect(addNewComputerPageObject.introducedDateInputField.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for Introduced date input', function () {
        expect(addNewComputerPageObject.introducedDateInputFieldLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Discontinued date input', function () {
        expect(addNewComputerPageObject.discontinuedDateInputField.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for Discontinued date input', function () {
        expect(addNewComputerPageObject.discontinuedDateInputFieldLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Select company selectbox', function () {
        expect(addNewComputerPageObject.companySelectBox.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible label for Select company selectbox', function () {
        expect(addNewComputerPageObject.companySelectBoxLabel.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Create this computer button', function () {
        expect(addNewComputerPageObject.createThisComputerButton.isDisplayed()).toBe(true);
    });

    it('Add new computer page should have visible Cancel button', function () {
        expect(addNewComputerPageObject.cancelButton.isDisplayed()).toBe(true);
    });

});


describe('Add new computer functionality works correctly', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should be added after filling all the inputs', function () {
        let name = StringUtils.generateRandomString(10);
        let introducedDate = '2017-01-14';
        let discontinuedDate = '2017-01-15';
        let company = 'Sony';
        let initialComputerData = [name, '14 Jan 2017', '15 Jan 2017', company];

        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);
        expect(indexPageObject.messageWarning.isDisplayed()).toBe(true);
        indexPageObject.isComputerInfoInTheTableEqualsExpected(initialComputerData);

    });
});


describe('Add/delete computer functionality', function () {
    //TODO to make a working chain of 3 tests
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();
    let editComputerPageObject = new EditComputerPage();

    let name = StringUtils.generateRandomString(10);
    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('Computers total amount should be increased by 1 after adding new computer', function () {
        let initialTotal = indexPageObject.getComputersCount().then(function (computersCount) {
        });

        indexPageObject.clickButton(indexPageObject.addNewComputerButton);
        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);
        let resultTotal = indexPageObject.getComputersCount().then(function (computersCount) {
        });

        expect(initialTotal + 1).toEqual(resultTotal);
    });

    it('Computers total amount should be decreased by 1 after deleting the computer', function () {
        let initialTotal = indexPageObject.getComputersCount().then(function (computersCount) {
        });

        indexPageObject.findComputerInTheTable(name);
        indexPageObject.navigateToEditComputerPage();
        editComputerPageObject.deleteComputer();
        let resultTotal = indexPageObject.getComputersCount().then(function (computersCount) {
        });

        expect(initialTotal - 1).toEqual(resultTotal);

    });

    it('Computers total amount should not change id computer adding is canceled', function () {
        let initialTotal = indexPageObject.getComputersCount().then(function (computersCount) {
        });

        indexPageObject.clickButton(indexPageObject.addNewComputerButton);
        addNewComputerPageObject.clickCancelButton();
        let resultTotal = indexPageObject.getComputersCount().then(function (computersCount) {
        });

        expect(initialTotal).toEqual(resultTotal);
    });
});


describe('Add new computer functionality works correctly', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    let name = StringUtils.generateRandomString(10);
    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should not be added if all fields are entered but Cancel button is clicked', function () {
        addNewComputerPageObject.fillInAllFields(name, introducedDate, discontinuedDate, company);
        addNewComputerPageObject.clickCancelButton();

        indexPageObject.getPageHeader(indexPageObject.appNameHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual("Play sample application — Computer database");
        });
        //expect(indexPageObject.messageWarning.isDisplayed()).toBe(false);

        expect(browser.isElementPresent(indexPageObject.messageWarning)).toBe(false);
    });

});


describe('Add new computer validation functionality works correctly', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    let name = StringUtils.generateRandomString(10);
    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should not be added if Computer name field is empty', function () {
        addNewComputerPageObject.addComputer('', introducedDate, discontinuedDate, company);

        addNewComputerPageObject.getPageHeader(addNewComputerPageObject.addComputerHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual('Add a computer');
        });

        expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute('class')).toMatch('clearfix error');
    });
});


describe('Computer sorting functionality', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should not be added if Computer name field is empty', function () {
        addNewComputerPageObject.addComputer('', introducedDate, discontinuedDate, company);

        addNewComputerPageObject.getPageHeader(addNewComputerPageObject.addComputerHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual('Add a computer');
        });

        expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute('class')).toMatch('clearfix error');
    });
});
