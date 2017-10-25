const AddNewComputerPage = require("./../pageobjects/pages/AddNewComputerPage");

describe("Add new computer page layout verification", () => {
  const addNewComputerPageObject = new AddNewComputerPage();

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Add new computer page should have a title", () =>
    expect(browser.getTitle()).toEqual("Computers database"));

  it("Add new computer page should have expected header", () =>
    expect(addNewComputerPageObject.getPageHeaderText()).toEqual("Add a computer"));

  it("Add new computer page should have visible computer name input", () =>
    expect(addNewComputerPageObject.computerNameInputField.isDisplayed()).toBe(true));

  it("Add new computer page should have visible label for computer name input", () =>
    expect(addNewComputerPageObject.computerNameInputFieldLabel.isDisplayed()).toBe(true));

  it("Add new computer page should have visible Introduced date input", () =>
    expect(addNewComputerPageObject.introducedDateInputField.isDisplayed()).toBe(true));

  it("Add new computer page should have visible label for Introduced date input", () =>
    expect(addNewComputerPageObject.introducedDateInputFieldLabel.isDisplayed()).toBe(true));

  it("Add new computer page should have visible Discontinued date input", () =>
    expect(addNewComputerPageObject.discontinuedDateInputField.isDisplayed()).toBe(true));

  it("Add new computer page should have visible label for Discontinued date input", () =>
    expect(addNewComputerPageObject.discontinuedDateInputFieldLabel.isDisplayed()).toBe(true));

  it("Add new computer page should have visible Select company selectbox", () =>
    expect(addNewComputerPageObject.companySelectBox.isDisplayed()).toBe(true));

  it("Add new computer page should have visible label for Select company selectbox", () =>
    expect(addNewComputerPageObject.companySelectBoxLabel.isDisplayed()).toBe(true));

  it("Add new computer page should have visible Create this computer button", () =>
    expect(addNewComputerPageObject.createThisComputerButton.isDisplayed()).toBe(true));

  it("Add new computer page should have visible Cancel button", () =>
    expect(addNewComputerPageObject.cancelButton.isDisplayed()).toBe(true));
});
