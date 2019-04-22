const IndexPage = require('./../pageobjects/pages/IndexPage');

describe('Computer-database index page layout verification', () => {
    const indexPageObject = new IndexPage();
    beforeEach(async () => await browser.get('http://computer-database.herokuapp.com/computers'));

    it('Page should have a title', async () => {
        await expect(indexPageObject.getPageTitle()).toEqual('Computers database');
    });

    it('App should have expected header', async () => {
        await expect(indexPageObject.getAppHeaderText()).toEqual('Play sample application — Computer database');
    });

    it('App should have visible amount of computers on the page header', async () => {
        await expect(indexPageObject.getPageHeader.isDisplayed()).toBe(true);
    });

    it('Index page header should contain "computers found"', async () => {
        await expect(indexPageObject.getPageHeaderText()).toContain('computers found');
    });

    it('App should have visible filter input field', async () => {
        await expect(indexPageObject.getComputerSearchForm.filterInputField.isDisplayed()).toBe(true);
        await expect(indexPageObject.getComputerSearchForm.filterInputField.getText()).toBe('');
    });

    it('App should have visible filter submit button', async () => {
        await expect(indexPageObject.getComputerSearchForm.filterSubmitButton.isDisplayed()).toBe(true);
    });

    it('App should have visible "Add new computer" button', async () => {
        await expect(indexPageObject.addNewComputerButton.isDisplayed()).toBe(true);
    });

    it('App should have visible pagination block', async () => {
        await expect(indexPageObject.getPagination.isDisplayed()).toBe(true);
    });
});

