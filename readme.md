# Test automation framework for UI testing

The main goal of this framework is to provide easy, reliable and maintainable automated tests for UI part of the application. It was developed using ECMA 6, Node.js, Protractor and Cucumber.js. 

## Framework installation

First of all you need to have Node.js installed, all following commands should be executed in Node.js command prompt

Install protractor globally with:
```
npm install -g protractor
```

Navigate to your project's folder in command prompt and run:
```
npm install
```

What does this do?

1. Downloads all the dependencies described in the **package.json**
2. Extracts them into **node_modules** folder


## Configuring

The project has a bunch of configuration files but they are basically extending each other by adding different properties and in most cases you have nothing to do with them, the only two configuration files that you could be interested in is the ```base.conf.js``` and project-specific configuration file ```comp.js```


## Run the tests

1. To download and extract browser driver run following in command prompt
```
webdriver-manager update
```
2. To start the Selenium Server:
```
webdriver-manager start
```
3. To run the tests you have to use ```protractor``` command and then to specify the config file:
```
protractor config/comp.js
```

This will launch the test using all properties described in ```comp.js``` but if you need to specify some properties explicitly you can do this as follows:
```
protractor config/comp.js --cucumberOpts.tags=@smoke --baseUrl $PORTAL-URL:PORT"/portalserver/ --seleniumAddress $SELENIUM-SERVER-URL:PORT/wd/hub  --parameters.portalName $PORTAL-NAME
```

All the scripts provided above are listed in 'scripts' section of the package.json. You can also run these in your IDE (in my case it's WebStorm with Node.js plugin installed) through NPM Tool Window
