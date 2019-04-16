const _ = require("lodash");
const baseConfig = require("./base/conf");

const config = {
  baseUrl: "http://computer-database.herokuapp.com/computers",
  specs: ["../tests/indexPageView.js"],
  suites: {
    view: ["../tests/*"],
      pagination: ["../tests/pagination.js"]
  },
    seleniumAddress: "http://142.93.106.151:4444/wd/hub",
  capabilities: {
    browserName: "opera",
    version: "53",
      enableVNC: true,
      enableVideo: true,
      operaOptions: {
      binary: "/usr/bin/opera"
      }
  },

};

exports.config = _.merge(baseConfig.config, config);
