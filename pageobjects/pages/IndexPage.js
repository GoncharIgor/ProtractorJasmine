const BasePage = require('./BasePage');
const Pagination = require('./../fragments/Pagination');
const ComputerTable = require('./../fragments/ComputerTable');
const ComputerSearchForm = require('./../fragments/ComputerSearchForm');

class IndexPage extends BasePage {
  constructor() {
    super();
    this.computerSearchForm = new ComputerSearchForm($('#actions form'));
    this.computerTable = new ComputerTable($('table.computers'));
    this.addNewComputerButton = element(by.id('add'));
    this.messageWarning = $('.alert-message.warning');
    this.paginationBlok = new Pagination(element(by.id('pagination')));
  }

  navigateToEditComputerPage() {
    return this.getComputerTable.computerNamesInTheTable.get(0).click();
  }

  getComputersCount() {
    return this.pageHeader.getText().then(text => text.replace(/[^\/\d]/g, ''));
  }

  getIdOfComputerByName(name) {
    // await browser.actions().keyDown(protractor.Key.CONTROL).sendKeys('t').perform();
    // return $('body').sendKeys(protractor.Key.TAB);
    browser.get('http://computer-database.herokuapp.com/computers');
    this.findComputerInTheTable(name);
    this.computerNamesInTheTable.get(0).click();
    return browser.getCurrentUrl().then(actualUrl => actualUrl.substr(actualUrl.lastIndexOf('/') + 1));
  }

  get getAddNewComputerButton() {
    return this.addNewComputerButton;
  }

  get getComputerSearchForm() {
    return this.computerSearchForm;
  }

  get getComputerTable() {
    return this.computerTable;
  }

  get getPagination() {
    return this.paginationBlok;
  }
}

module.exports = IndexPage;
