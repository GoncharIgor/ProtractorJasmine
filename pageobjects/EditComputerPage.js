'use strict';

let BasePage = require('./BasePage');

class EditComputerPage extends BasePage {
    constructor() {
        super();
        this.deleteThisComputerButton = $('.btn.danger');
    }

    deleteComputer(){
        this.deleteThisComputerButton.click();
    }

}

module.exports = EditComputerPage;
