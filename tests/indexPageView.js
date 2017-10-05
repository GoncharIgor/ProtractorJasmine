const IndexPage = require('./../pageobjects/IndexPage');

describe('Computer-database index page layout verification', () => {
    let indexPageObject = new IndexPage();
    beforeEach(() => browser.get('http://computer-database.herokuapp.com/computers'));

    it('Page should have a title', () =>
        expect(browser.getTitle()).toEqual('Computers database'));

    it('App should have expected header', () => {
        indexPageObject.getPageHeader(indexPageObject.appNameHeader).then((pageHeader) =>
            expect(pageHeader).toEqual("Play sample application — Computer database"));
    });

    it('App should have visible amount of computers on the page header', () =>
        expect(indexPageObject.computersAmountHeader.isDisplayed()).toBe(true));

    it('App should have visible filter input field', () => {
        expect(indexPageObject.filterInputField.isDisplayed()).toBe(true);
        expect(indexPageObject.filterInputField.getText()).toBe('');
    });

    it('App should have visible filter submit button', () =>
        expect(indexPageObject.filterSubmitButton.isDisplayed()).toBe(true));

    it('App should have visible \'Add new computer\' button', () =>
        expect(indexPageObject.addNewComputerButton.isDisplayed()).toBe(true));

    it('App should have visible pagination block', () =>
        expect(indexPageObject.paginationBlok.isDisplayed()).toBe(true));

    it('App should have table with 4 columns', () => {
        indexPageObject.getTableColumnsAmount().then((tableColumnsAmount) => {
            expect(tableColumnsAmount).toEqual(4);
        });
    });

});


