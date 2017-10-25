const BaseFragment = require("protractor-element-extend").BaseFragment;

class ComputerSearchSection extends BaseFragment {
  constructor(rootElement) {
    super(rootElement);
    this.filterInputField = element(by.id("searchbox"));
    this.filterSubmitButton = element(by.id("searchsubmit"));
  }

  findComputerInTheTable(computerName) {
    this.filterInputField.sendKeys(computerName);
    return this.filterSubmitButton.click();
  }
}

module.exports = ComputerSearchSection;
