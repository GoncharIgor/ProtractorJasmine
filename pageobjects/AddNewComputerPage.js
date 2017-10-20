const BasePage = require("./BasePage");

class AddNewComputerPage extends BasePage {
  constructor() {
    super();
    this.computerNameInputField = element(by.id("name"));
    this.computerNameInputFieldLabel = $("label[for='name']");
    this.introducedDateInputField = element(by.id("introduced"));
    this.introducedDateInputFieldLabel = $("label[for='introduced']");
    this.discontinuedDateInputField = element(by.id("discontinued"));
    this.discontinuedDateInputFieldLabel = $("label[for='discontinued']");
    this.companySelectBox = element(by.id("company"));
    this.companySelectBoxLabel = $("label[for='company']");
    this.createThisComputerButton = $(".btn.primary");
    this.cancelButton = element(by.linkText("Cancel"));
    this.emptyComputerNameErrorNotification = $("fieldset div:nth-child(1)");
  }

  get getCancelButton() {
    return this.cancelButton;
  }

  addComputer(name, introducedDate, discontinuedDate, company) {
    this.fillInAllFields(name, introducedDate, discontinuedDate, company);
     this.createThisComputerButton.click();
     this.logger.info(`Computer ${name} was added to DB`);
     return name;
  }

  fillInAllFields(name, introducedDate, discontinuedDate, company) {
    this.computerNameInputField.sendKeys(name);
    this.introducedDateInputField.sendKeys(introducedDate);
    this.discontinuedDateInputField.sendKeys(discontinuedDate);
    element(by.cssContainingText("option", company)).click();
  }

  clickCancelButton() {
    return this.getCancelButton.click();
  }
}

module.exports = AddNewComputerPage;