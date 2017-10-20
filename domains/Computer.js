const AddNewComputerPage = require("./../pageobjects/AddNewComputerPage");
const addNewComputerPage = new AddNewComputerPage();

class Computer {
  constructor(name, introducedDate, discontinuedDate, company) {
    this.name = name;
    this.introducedDate = introducedDate;
    this.discontinuedDate = discontinuedDate;
    this.company = company;
  }

  get getName() {
    return this.name;
  }

  get getIntroducedDate() {
    return this.introducedDate;
  }

  get getDiscontinuedDate() {
    return this.discontinuedDate;
  }

  get getCompany() {
    return this.company;
  }

  isComputerEqualTo(computer) {
    return JSON.stringify(this) === JSON.stringify(computer);
  }

  addThisComputer(){
      addNewComputerPage.addComputer(this.name, this.introducedDate, this.discontinuedDate, this.company);
  }

    static addComputer(computer){
        addNewComputerPage.addComputer(computer.name, computer.introducedDate, computer.discontinuedDate, computer.company);
    }
}

module.exports = Computer;
