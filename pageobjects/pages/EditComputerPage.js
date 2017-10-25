const AddNewComputerPage = require("./AddNewComputerPage");

class EditComputerPage extends AddNewComputerPage {
  constructor() {
    super();
    this.deleteThisComputerButton = $(".btn.danger");
  }

  deleteComputer() {
    return this.deleteThisComputerButton.click();
  }
}

module.exports = EditComputerPage;
