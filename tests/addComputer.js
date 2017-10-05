const IndexPage = require('./../pageobjects/IndexPage');
const AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');
const EditComputerPage = require('./../pageobjects/EditComputerPage');
const StringUtils = require('./../utils/StringUtils');

describe('Add new computer functionality works correctly', function () {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Add new computer page should be opened after click [Add New Computer]', () => {
            browser.get('http://computer-database.herokuapp.com/computers/');
            indexPageObject.clickButton(indexPageObject.getAddNewComputerButton);
        }
    );

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

        indexPageObject.getAppHeaderText(indexPageObject.appNameHeader).then(function (pageHeader) {
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

        addNewComputerPageObject.getAppHeaderText(addNewComputerPageObject.addComputerHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual('Add a computer');
        });

        expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute('class')).toMatch('clearfix error');
    });
});

