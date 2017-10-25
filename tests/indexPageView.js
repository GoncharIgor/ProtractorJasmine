const IndexPage = require("./../pageobjects/pages/IndexPage");
const testGen = require("jasmine-es6-generator");

describe("Computer-database index page layout verification", () => {
  const indexPageObject = new IndexPage();
  beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers"));

  it("Page should have a title", () =>
    expect(indexPageObject.getPageTitle()).toEqual("Computers database"));

  it("App should have expected header", () => {
    indexPageObject.getAppHeaderText().then(pageHeader =>
      expect(pageHeader).toEqual("Play sample application — Computer database"));
  });

  it("App should have visible amount of computers on the page header", () =>
    expect(indexPageObject.getPageHeader.isDisplayed()).toBe(true));

  it("Index page header should contain \"computers found\"", () =>
    expect(indexPageObject.getPageHeaderText()).toContain("computers found"));

  it("App should have visible filter input field", testGen(function* () {
    expect(yield indexPageObject.filterInputField.isDisplayed()).toBe(true);
    expect(yield indexPageObject.filterInputField.getText()).toBe("");
  }));

  it("App should have visible filter submit button", () =>
    expect(indexPageObject.filterSubmitButton.isDisplayed()).toBe(true));

  it("App should have visible 'Add new computer' button", () =>
    expect(indexPageObject.addNewComputerButton.isDisplayed()).toBe(true));

  it("App should have visible pagination block", () =>
    expect(indexPageObject.paginationBlok.isDisplayed()).toBe(true));

  it("App should have table with 4 columns", testGen(function* () {
    expect(yield indexPageObject.getTableColumnsAmount()).toEqual(4);
  }));
});

