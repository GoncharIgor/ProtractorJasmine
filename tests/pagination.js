const IndexPage = require("./../pageobjects/pages/IndexPage");

describe("Computer-database index page layout verification", () => {
    const indexPageObject = new IndexPage();
    beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers"));

    it("Pagination NEXT button should be clicked", async() => {
        indexPageObject.getPagination.clickNextButton();
    });
});
