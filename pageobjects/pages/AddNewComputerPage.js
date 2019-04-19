const BasePage = require('./BasePage');
const AddComputerFormFields = require('./../fragments/AddComputerFormFields');

class AddNewComputerPage extends BasePage {
  constructor() {
    super();
    this.addComputerFormFields = new AddComputerFormFields($('form fieldset'));
    this.createThisComputerButton = $('.btn.primary');
    this.cancelButton = element(by.linkText('Cancel'));
    this.emptyComputerNameErrorNotification = $('fieldset div:nth-child(1)');
  }

  get getAddComputerFormFields(){
    return this.addComputerFormFields;
  }

  get getCancelButton() {
    return this.cancelButton;
  }

  addComputer(name, introducedDate, discontinuedDate, company) {
    this.getAddComputerFormFields.fillInAllFields(name, introducedDate, discontinuedDate, company);
     this.createThisComputerButton.click();
     this.logger.info(`Computer ${name} was added to DB`);
     return name;
  }

  clickCancelButton() {
    return this.getCancelButton.click();
  }
}

module.exports = AddNewComputerPage;