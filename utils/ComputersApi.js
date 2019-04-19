const BaseApi = require('./BaseApi');

class ComputersApi extends BaseApi {
  constructor() {
    super();

    const api = this;

    api.requests.computers = {
      get: () =>
        api.request({
          method: 'GET',
          uri: 'http://computer-database.herokuapp.com/computers',
          json: true,
        }),

      addComputer: (name, introduced, discontinued, company) =>
        api.request({
          method: 'POST',
          uri: 'http://computer-database.herokuapp.com/computers',
          form: {
            name,
            introduced,
            discontinued,
            company,
          },
        }),
    };
  }

  addComputer(name, introduced, discontinued, company) {
     this.logger.info(`Trying to create computer with name: ${name}`);
    return this.send(this.requests.computers.addComputer(name, introduced, discontinued, company));
  }
}

module.exports = ComputersApi;
