const IndexPage = require('./../pageobjects/IndexPage');
const AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');

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
