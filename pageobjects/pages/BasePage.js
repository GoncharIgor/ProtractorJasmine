const EC = protractor.ExpectedConditions;
const log4js = require("log4js");

class BasePage {
  constructor() {
    this.appNameHeader = $(".fill>a");
    this.pageHeader = $("#main>h1");
    // this.logger = log4js.getLogger("BasePageLogger");
    this.logger = log4js.getLogger("cheese");
  }

  getPageTitle() {
    return browser.getTitle().then(title => title);
  }

  get getPageHeader() {
    return this.pageHeader;
  }

  getAppHeaderText() {
    return this.appNameHeader.getText().then(text => text);
  }

  getPageHeaderText() {
    return this.pageHeader.getText().then(text => text);
  }

  clickButton(button) {
    return button.click();
  }

  isElementVisible(element) {
    return element.isDisplayed();
  }

  waitUntilVisible(elem) {
    browser.wait(EC.presenceOf(elem), 5000).then(() => browser.wait(EC.visibilityOf(elem), 5000));
    return elem;
  }

  // default page methods
  isVisible(locator) {
    return EC.visibilityOf(locator);
  }

  isNotVisible(locator) {
    return EC.invisibilityOf(locator);
  }

  inDom(locator) {
    return EC.presenceOf(locator);
  }

  notInDom(locator) {
    return EC.stalenessOf(locator);
  }

  isClickable(locator) {
    return EC.elementToBeClickable(locator);
  }

  hasText(locator, text) {
    return EC.textToBePresentInElement(locator, text);
  }

  and(arrayOfFunctions) {
    return EC.and(arrayOfFunctions);
  }

  titleIs(title) {
    return EC.titleIs(title);
  }

  hitEnter() {
    return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  clickTab() {
    return $("body").sendKeys(protractor.Key.TAB);
  }

  refreshPage() {
    return browser.refresh();
  }
}

module.exports = BasePage;
