const BaseApi = require('./BaseApi');

class ComputersApi extends BaseApi {
    constructor() {
        super();

        let api = this;

        api.requests.computers = {
            get: () =>
                api.request({
                    method: 'GET',
                    uri: 'http://computer-database.herokuapp.com/computers',
                    json: true
                }),

            addComputer: (name, introduced, discontinued, company) =>
                api.request({
                    method: 'POST',
                    uri: 'http://computer-database.herokuapp.com/computers',
                    form: {
                        name: name,
                        introduced: introduced,
                        discontinued: discontinued,
                        company: company
                    }
                })
        }
    }

    addComputer(name, introduced, discontinued, company) {
        return this.send(this.requests.computers.addComputer(name, introduced, discontinued, company));
    }
}

module.exports = ComputersApi;