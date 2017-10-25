const BaseFragment = require("protractor-element-extend").BaseFragment;

class Pagination extends BaseFragment {
  constructor(rootElement) {
    super(rootElement);
    this.currentPaginationInfo = $(".current a");
    this.paginationNextButton = element(by.xpath("//a[contains(text(), 'Next')]"));
    this.paginationPreviousButton = element(by.xpath("//a[contains(text(),'Previous')]"));
    this.paginationPreviousButtonWrapper = $("ul>li:nth-child(1)");
  }

  get getPaginationNextButton() {
    return this.paginationNextButton;
  }

  get getPaginationPreviousButton() {
      return this.paginationPreviousButton;
  }

  getPaginationBlockText() {
    return this.currentPaginationInfo.getText().then(text => text);
  }

  getTotalAmountOfComputersInPagination() {
    return this.currentPaginationInfo.getText().then(text => Helpers.splitStringIntoArrayByAndGetIndex(text, " ", "last"));
  }

  clickNextButton() {
    return this.getPaginationNextButton.click();
  }

  clickPreviousButton() {
    return this.getPaginationPreviousButton.click();
  }
}

module.exports = Pagination;
