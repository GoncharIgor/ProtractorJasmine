const rp = require("request-promise");
const _ = require("lodash");
const log4js = require('log4js');

class BaseApi {
  constructor() {
    const api = this;
      this.logger = log4js.getLogger("BaseApiLogger");

    api.defaultRequest = {
      headers: {
        Connection: "keep-alive",
      },
      jar: true,
    };

    api.requests = {};
  }

  request(requestParameters) {
    return _.defaultsDeep(requestParameters, this.defaultRequest);
  }

  send(request) {
    const isJson = request.json;
    request.resolveWithFullResponse = true;
    return rp(request)
      .then(res => (isJson ? res.body : res))
      .catch((err) => {
        console.log("AN ERROR OCCURRED");
      });
  }
}

module.exports = BaseApi;
