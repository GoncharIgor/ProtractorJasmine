const BasePage = require("./BasePage");
const Helpers = require("./../../utils/helpers");
const Pagination = require("./../fragments/Pagination");

class IndexPage extends BasePage {
  constructor() {
    super();
    this.filterInputField = element(by.id("searchbox"));
    this.filterSubmitButton = element(by.id("searchsubmit"));
    this.addNewComputerButton = element(by.id("add"));
    this.tableHeaderColumns = element.all(by.tagName("th"));
    this.messageWarning = $(".alert-message.warning");
    this.paginationBlok = new Pagination(element(by.id("pagination")));
    this.computerNamesInTheTable = element.all(by.css(".computers.zebra-striped>tbody>tr>td>a"));
    this.computerIntroducedDateInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(2)");
    this.computerDiscontinuedDateInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(3)");
    this.computerCompanyNameInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(4)");
  }

  get getAddNewComputerButton() {
    return this.addNewComputerButton;
  }

  async getTableColumnsAmount() {
    return await this.tableHeaderColumns.count();
  }

  navigateToEditComputerPage() {
    return this.computerNamesInTheTable.get(0).click();
  }

  getComputersCount() {
    return this.pageHeader.getText().then(text => text.replace(/[^\/\d]/g, ""));
  }

  findComputerInTheTable(computerName) {
    this.filterInputField.sendKeys(computerName);
    return this.filterSubmitButton.click();
  }

  isComputerInfoInTheTableEqualsExpected(initialComputerData) {
    this.findComputerInTheTable(initialComputerData[0]);

    const actualComputerInfo = [];
    return protractor.promise.all([
      this.computerNamesInTheTable.get(0).getText().then(text => actualComputerInfo.push(text)),
      this.computerIntroducedDateInTheTable.getText().then(text => actualComputerInfo.push(text)),
      this.computerDiscontinuedDateInTheTable.getText().then(text => actualComputerInfo.push(text)),
      this.computerCompanyNameInTheTable.getText().then(text => actualComputerInfo.push(text)),
    ]).then(() => Helpers.arraysEqual(initialComputerData, actualComputerInfo));
  }

  getIdOfComputerByName(name) {
    // await browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('t').perform();
    // return $('body').sendKeys(protractor.Key.TAB);
    browser.get("http://computer-database.herokuapp.com/computers");
    this.findComputerInTheTable(name);
    this.computerNamesInTheTable.get(0).click();
    return browser.getCurrentUrl().then(actualUrl => actualUrl.substr(actualUrl.lastIndexOf("/") + 1));
  }

  get getPagination(){
    return this.paginationBlok;
  }
}

module.exports = IndexPage;
