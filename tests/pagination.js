const IndexPage = require("./../pageobjects/pages/IndexPage");

describe("Computer-database index page layout verification", () => {
    const indexPageObject = new IndexPage();
    beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers"));

    it("Pagination block should be visible", async() => {
        expect(indexPageObject.getPagination.isDisplayed()).toBe(true);
    });

    it("Pagination NEXT button should be visible", async() => {
        expect(indexPageObject.getPagination.getPaginationNextButton.isDisplayed()).toBe(true);
    });

    it("Pagination NEXT button should be clicked", async() => {
        indexPageObject.getPagination.clickNextButton();
    });

    it("Pagination NEXT button should be enabled", async() => {
        expect(indexPageObject.getPagination.getPaginationNextButton.isEnabled()).toBe(true);
    });

    it("Pagination PREVIOUS button should be visible", async() => {
        expect(indexPageObject.getPagination.getPaginationPreviousButton.isDisplayed()).toBe(true);
    });

});
