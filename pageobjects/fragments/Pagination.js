const BaseFragment = require('protractor-element-extend').BaseFragment;

class Pagination extends BaseFragment {
  constructor(rootElement) {
    super(rootElement);
    this.paginationNextButtonParentWrapperSelector = '/parent::li';
    this.paginationNextButtonSelector = '//a[contains(text(), \'Next\')]';
    this.paginationPreviousButtonSelector = '//a[contains(text(),\'Previous\')]';
    this.currentPaginationInfo = $('.current a');
    this.paginationNextButton = element(by.xpath(this.paginationNextButtonSelector));
    this.paginationPreviousButton = element(by.xpath(this.paginationPreviousButtonSelector));
    this.paginationNextButtonParentWrapper = element(by.xpath(`${this.paginationNextButtonSelector}${this.paginationNextButtonParentWrapperSelector}`));
    this.paginationPreviousButtonParentWrapper = element(by.xpath(`${this.paginationPreviousButtonSelector}${this.paginationNextButtonParentWrapperSelector}`));
  }

  get getPaginationPreviousButton() {
    return this.paginationPreviousButton;
  }

  get getPaginationNextButton() {
    return this.paginationNextButton;
  }

  get getPaginationPreviousButtonParentWrapper() {
    return this.paginationPreviousButtonParentWrapper;
  }

  get getPaginationNextButtonParentWrapper() {
    return this.paginationNextButtonParentWrapper;
  }

  getPaginationBlockText() {
    return this.currentPaginationInfo.getText().then(text => text);
  }

  getTotalAmountOfComputersInPagination() {
    return this.currentPaginationInfo.getText().then(text => Helpers.splitStringIntoArrayByAndGetIndex(text, ' ', 'last'));
  }

  clickNextButton() {
    return this.getPaginationNextButton.click();
  }

  clickPreviousButton() {
    return this.getPaginationPreviousButton.click();
  }
}

module.exports = Pagination;
