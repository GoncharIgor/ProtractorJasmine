const IndexPage = require('./../pageobjects/IndexPage');
const AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');
const EditComputerPage = require('./../pageobjects/EditComputerPage');
const StringUtils = require('./../utils/StringUtils');
const ComputerApi = require('./../utils/ComputersApi');

describe('Add new computer functionality works correctly', () => {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();
    let computerApi = new ComputerApi();

    beforeEach(() => browser.get('http://computer-database.herokuapp.com/computers/new'));

    it('Add new computer page should be opened after click [Add New Computer]', () => {
        browser.get('http://computer-database.herokuapp.com/computers');
        indexPageObject.clickButton(indexPageObject.getAddNewComputerButton);
        expect(addNewComputerPageObject.getPageHeaderText()).toEqual('Add a computer');
    });

    it('Computer should be added after filling all the inputs', () => {
        let name = StringUtils.generateRandomString(10);
        let introducedDate = '2017-01-14';
        let discontinuedDate = '2017-01-15';
        let company = 'Sony';
        const initialComputerData = [name, '14 Jan 2017', '15 Jan 2017', company];
        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);

        expect(indexPageObject.messageWarning.isDisplayed()).toBe(true);
        indexPageObject.isComputerInfoInTheTableEqualsExpected(initialComputerData);
    });

    it('Computer should be added by POST method', () => {
        let name = StringUtils.generateRandomString(10);
        let introducedDate = '2017-01-14';
        let discontinuedDate = '2017-01-15';
        let company = 'Sony';
        const initialComputerData = [name, '14 Jan 2017', '15 Jan 2017', company];

        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);
        expect(indexPageObject.messageWarning.isDisplayed()).toBe(true);
        indexPageObject.isComputerInfoInTheTableEqualsExpected(initialComputerData);

    });
});


describe('Add/delete computer functionality', () => {
    let indexPageObject = new IndexPage();
    let addNewComputerPageObject = new AddNewComputerPage();
    let editComputerPageObject = new EditComputerPage();

    let name = StringUtils.generateRandomString(10);
    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(() => {
        browser.get('http://computer-database.herokuapp.com/computers');
    });

    it('Computers total amount should be increased by 1 after adding new computer', async() => {
        const initialTotal = await indexPageObject.getComputersCount();
        indexPageObject.clickButton(indexPageObject.addNewComputerButton);
        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);
        const resultTotal = await indexPageObject.getComputersCount();

        expect(+initialTotal + 1).toBe(+resultTotal);
    });

    it('Computers total amount should be decreased by 1 after deleting the computer', async() => {
        const initialTotal = await indexPageObject.getComputersCount();
        indexPageObject.findComputerInTheTable(name);
        indexPageObject.navigateToEditComputerPage();
        editComputerPageObject.deleteComputer();
        const resultTotal = await indexPageObject.getComputersCount();

        expect(initialTotal - 1).toEqual(+resultTotal);

    });

    it('Computers total amount should not change id computer adding is canceled', async() => {
        const initialTotal = await indexPageObject.getComputersCount();
        indexPageObject.clickButton(indexPageObject.addNewComputerButton);
        addNewComputerPageObject.clickCancelButton();
        const resultTotal = await indexPageObject.getComputersCount();

        expect(initialTotal).toEqual(resultTotal);
    });
});


describe('Add new computer functionality works correctly', () => {
    const indexPageObject = new IndexPage();
    const addNewComputerPageObject = new AddNewComputerPage();

    let name = StringUtils.generateRandomString(10);
    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should not be added if all fields are entered but Cancel button is clicked', () => {
        addNewComputerPageObject.fillInAllFields(name, introducedDate, discontinuedDate, company);
        addNewComputerPageObject.clickCancelButton();

        expect(indexPageObject.getAppHeaderText()).toEqual("Play sample application — Computer database");
        //expect(indexPageObject.messageWarning.isDisplayed()).toBe(false);
        expect(browser.isElementPresent(indexPageObject.messageWarning)).toBe(false);
    });

});


describe('Add new computer validation functionality works correctly', () => {
    const addNewComputerPageObject = new AddNewComputerPage();

    let name = StringUtils.generateRandomString(10);
    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should not be added if Computer name field is empty', () => {
        addNewComputerPageObject.addComputer('', introducedDate, discontinuedDate, company);

        expect(addNewComputerPageObject.getPageHeaderText()).toEqual('Add a computer');
        expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute('class')).toMatch('clearfix error');
    });
});

