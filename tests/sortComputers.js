const AddNewComputerPage = require("./../pageobjects/pages/AddNewComputerPage");

describe("Computer sorting functionality", () => {
  const addNewComputerPageObject = new AddNewComputerPage();

  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() =>
    browser.get("http://computer-database.herokuapp.com/computers/new"));

  it("Computer should not be added if Computer name field is empty", () => {
    addNewComputerPageObject.addComputer("", introducedDate, discontinuedDate, company);

    expect(addNewComputerPageObject.getPageHeaderText()).toEqual("Add a computer");
    expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute("class")).toMatch("clearfix error");
  });
});