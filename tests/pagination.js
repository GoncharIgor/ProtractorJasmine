const IndexPage = require("./../pageobjects/pages/IndexPage");

describe("Computer-database index page layout verification", () => {
  const indexPageObject = new IndexPage();
  beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers"));

  it("Pagination block should be visible", () => {
    expect(indexPageObject.getPagination.isDisplayed()).toBe(true);
  });

  it("Pagination NEXT button should be visible", () => {
    expect(indexPageObject.getPagination.getPaginationNextButton.isDisplayed()).toBe(true);
  });

  it("Pagination NEXT button should be clicked", () => {
    indexPageObject.getPagination.clickNextButton();
  });

  it("Pagination NEXT button should be enabled", () => {
    expect(indexPageObject.getPagination.getPaginationNextButton.isEnabled()).toBe(true);
  });

  it("Pagination PREVIOUS button should be visible", () => {
    expect(indexPageObject.getPagination.getPaginationPreviousButton.isDisplayed()).toBe(true);
  });

  it("Pagination should show the correct total amount of computers", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    expect(await indexPageObject.getPagination.getPaginationBlockText()).toEqual(`Displaying 1 to 10 of ${initialTotal}`);
  });

  it("Pagination should show the correct text after clicking next button", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    indexPageObject.getPagination.clickNextButton();
    expect(await indexPageObject.getPagination.getPaginationBlockText()).toEqual(`Displaying 11 to 20 of ${initialTotal}`);
  });

  it("Pagination should show the correct text after clicking next and prev button", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    indexPageObject.getPagination.clickNextButton();
    indexPageObject.getPagination.clickPreviousButton();
    expect(await indexPageObject.getPagination.getPaginationBlockText()).toEqual(`Displaying 1 to 10 of ${initialTotal}`);
  });

  it("Pagination should save the current state after page refresh", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    indexPageObject.getPagination.clickNextButton();
    indexPageObject.refreshPage();
    expect(await indexPageObject.getPagination.getPaginationBlockText()).toEqual(`Displaying 11 to 20 of ${initialTotal}`);
  });
});
