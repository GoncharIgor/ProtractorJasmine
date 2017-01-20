exports.config = {
    //framework: 'jasmine',
    seleniumArgs: ['-browserTimeout=60'],
    ignoreProtectedModeSettings: true,
    capabilities: {'browserName': 'chrome'},
    //framework: 'custom',
    //frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

    seleniumAddress: 'http://localhost:4444/wd/hub',
};
