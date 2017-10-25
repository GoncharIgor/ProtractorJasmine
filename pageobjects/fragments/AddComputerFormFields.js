const BaseFragment = require("protractor-element-extend").BaseFragment;

class AddComputerFormFields extends BaseFragment {
    constructor(rootElement) {
        super(rootElement);

        this.computerNameInputField = element(by.id("name"));
        this.computerNameInputFieldLabel = $("label[for='name']");
        this.introducedDateInputField = element(by.id("introduced"));
        this.introducedDateInputFieldLabel = $("label[for='introduced']");
        this.discontinuedDateInputField = element(by.id("discontinued"));
        this.discontinuedDateInputFieldLabel = $("label[for='discontinued']");
        this.companySelectBox = element(by.id("company"));
        this.companySelectBoxLabel = $("label[for='company']");
    }

    fillInAllFields(name, introducedDate, discontinuedDate, company) {
        this.computerNameInputField.sendKeys(name);
        this.introducedDateInputField.sendKeys(introducedDate);
        this.discontinuedDateInputField.sendKeys(discontinuedDate);
        return element(by.cssContainingText("option", company)).click();
    }
}

module.exports = AddComputerFormFields;