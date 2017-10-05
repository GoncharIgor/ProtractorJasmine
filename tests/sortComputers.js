const AddNewComputerPage = require('./../pageobjects/AddNewComputerPage');

describe('Computer sorting functionality', function () {
    let addNewComputerPageObject = new AddNewComputerPage();

    let introducedDate = '2017-01-14';
    let discontinuedDate = '2017-01-15';
    let company = 'Sony';

    beforeEach(function () {
        browser.get('http://computer-database.herokuapp.com/computers/new');
    });

    it('Computer should not be added if Computer name field is empty', function () {
        addNewComputerPageObject.addComputer('', introducedDate, discontinuedDate, company);

        addNewComputerPageObject.getAppHeaderText(addNewComputerPageObject.addComputerHeader).then(function (pageHeader) {
            expect(pageHeader).toEqual('Add a computer');
        });

        expect((addNewComputerPageObject.emptyComputerNameErrorNotification).getAttribute('class')).toMatch('clearfix error');
    });
});