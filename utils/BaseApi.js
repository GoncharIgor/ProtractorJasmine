const rp = require("request-promise");
const _ = require("lodash");

class BaseApi {
  constructor() {
    const api = this;

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
