const ComputerSearchSection = require("./ComputerSearchForm");
const computerSearch = new ComputerSearchSection($("#actions form"));
const BaseFragment = require("protractor-element-extend").BaseFragment;
const Helpers = require("./../../utils/helpers");

class ComputerTable extends BaseFragment {
  constructor(rootElement) {
    super(rootElement);
    this.tableHeaderColumns = element.all(by.tagName("th"));
    this.computerNamesInTheTable = element.all(by.css(".computers.zebra-striped>tbody>tr>td>a"));
    this.computerIntroducedDateInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(2)");
    this.computerDiscontinuedDateInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(3)");
    this.computerCompanyNameInTheTable = $(".computers.zebra-striped>tbody>tr>td:nth-child(4)");
  }

  async getTableColumnsAmount() {
    return await this.tableHeaderColumns.count();
  }

  isComputerInfoInTheTableEqualsExpected(initialComputerData) {
    computerSearch.findComputerInTheTable(initialComputerData[0]);

    const actualComputerInfo = [];
    return protractor.promise.all([
      this.computerNamesInTheTable.get(0).getText().then(text => actualComputerInfo.push(text)),
      this.computerIntroducedDateInTheTable.getText().then(text => actualComputerInfo.push(text)),
      this.computerDiscontinuedDateInTheTable.getText().then(text => actualComputerInfo.push(text)),
      this.computerCompanyNameInTheTable.getText().then(text => actualComputerInfo.push(text)),
    ]).then(() => Helpers.arraysEqual(initialComputerData, actualComputerInfo));
  }
}

module.exports = ComputerTable;
