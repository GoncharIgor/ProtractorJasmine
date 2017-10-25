const IndexPage = require("./../pageobjects/pages/IndexPage");
const AddNewComputerPage = require("./../pageobjects/pages/AddNewComputerPage");
const EditComputerPage = require("./../pageobjects/pages/EditComputerPage");
const Helpers = require("./../utils/helpers");
const ComputerApi = require("./../utils/ComputersApi");
const testComputerInitial = require("./../testData/computer.json");

describe("Add new computer functionality works correctly", () => {
  const indexPageObject = new IndexPage();
  const addNewComputerPageObject = new AddNewComputerPage();

  beforeEach(() => browser.get("http://computer-database.herokuapp.com/computers/new"));

  it("Add new computer page should be opened after click [Add New Computer]", () => {
    browser.get("http://computer-database.herokuapp.com/computers");
    indexPageObject.clickButton(indexPageObject.getAddNewComputerButton);
    expect(addNewComputerPageObject.getPageHeaderText()).toEqual("Add a computer");
  });

  it("Computer should be added after filling all the inputs", () => {
    const testComputer = Helpers.clone(testComputerInitial);

    const name = Helpers.generateRandomString(10);
    const introducedDate = testComputer.introducedDate;
    const discontinuedDate = testComputer.discontinuedDate;
    const company = testComputer.company;
    const expectedComputerData = [name, "14 Jan 2017", "15 Jan 2017", company];
    addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);

    expect(indexPageObject.messageWarning.isDisplayed()).toBe(true);
    expect(indexPageObject.isComputerInfoInTheTableEqualsExpected(expectedComputerData)).toBe(true);
  });

  it("Computer should be added by POST method", async () => {
    const computerApi = new ComputerApi();
    const name = Helpers.generateRandomString(10);

    const expectedComputerData = [name, "14 Jan 2017", "15 Jan 2017", "Thinking Machines"];
    computerApi.addComputer(name, "2017-01-14", "2017-01-15", "2");

    browser.get("http://computer-database.herokuapp.com/computers");

    expect(indexPageObject.isComputerInfoInTheTableEqualsExpected(expectedComputerData)).toBe(true);
  });
});


describe("Add/delete computer functionality", () => {
  const indexPageObject = new IndexPage();
  const addNewComputerPageObject = new AddNewComputerPage();
  const editComputerPageObject = new EditComputerPage();

  const name = Helpers.generateRandomString(10);
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers");
  });

  it("Computers total amount should be increased by 1 after adding new computer", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    indexPageObject.clickButton(indexPageObject.addNewComputerButton);
    addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company);
    const resultTotal = await indexPageObject.getComputersCount();

    expect(+initialTotal + 1).toBe(+resultTotal);
  });

  it("Computers total amount should be decreased by 1 after deleting the computer", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    indexPageObject.findComputerInTheTable(name);
    indexPageObject.navigateToEditComputerPage();
    editComputerPageObject.deleteComputer();
    const resultTotal = await indexPageObject.getComputersCount();

    expect(initialTotal - 1).toEqual(+resultTotal);
  });

  it("Computers total amount should not change id computer adding is canceled", async () => {
    const initialTotal = await indexPageObject.getComputersCount();
    indexPageObject.clickButton(indexPageObject.addNewComputerButton);
    addNewComputerPageObject.clickCancelButton();
    const resultTotal = await indexPageObject.getComputersCount();

    expect(initialTotal).toEqual(resultTotal);
  });
});


describe("Add new computer functionality works correctly", () => {
  const indexPageObject = new IndexPage();
  const addNewComputerPageObject = new AddNewComputerPage();

  const name = Helpers.generateRandomString(10);
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should not be added if all fields are entered but Cancel button is clicked", () => {
    addNewComputerPageObject.fillInAllFields(name, introducedDate, discontinuedDate, company);
    addNewComputerPageObject.clickCancelButton();

    expect(indexPageObject.getAppHeaderText()).toEqual("Play sample application — Computer database");
    // expect(indexPageObject.messageWarning.isDisplayed()).toBe(false);
    expect(browser.isElementPresent(indexPageObject.messageWarning)).toBe(false);
  });
});


describe("Add new computer validation functionality works correctly", () => {
  const addNewComputerPageObject = new AddNewComputerPage();

  const name = Helpers.generateRandomString(10);
  const introducedDate = "2017-01-14";
  const discontinuedDate = "2017-01-15";
  const company = "Sony";

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should not be added if Computer name field is empty", () => {
    addNewComputerPageObject.addComputer("", introducedDate, discontinuedDate, company);

    expect(addNewComputerPageObject.getPageHeaderText()).toEqual("Add a computer");
    expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute("class")).toMatch("clearfix error");
  });
});

describe("Add new computer Object style functionality works correctly", () => {
  const testComputerInitial = require("./../testData/computer.json");
  const Computer = require("./../domains/Computer");

  beforeEach(() => {
    browser.get("http://computer-database.herokuapp.com/computers/new");
  });

  it("Computer should be added after filling all the inputs", () => {
    const testComputer = Helpers.clone(testComputerInitial);
    const indexPageObject = new IndexPage();

    const name = Helpers.generateRandomString(10);
    testComputer.name = name;
    const computer = new Computer(
      testComputer.name, testComputer.introducedDate,
      testComputer.discontinuedDate, testComputer.company,
    );
    const initialComputerData = [name, "14 Jan 2017", "15 Jan 2017", testComputer.company];

    computer.addThisComputer();

    expect(indexPageObject.messageWarning.isDisplayed()).toBe(true);
    indexPageObject.isComputerInfoInTheTableEqualsExpected(initialComputerData);
  });
});
