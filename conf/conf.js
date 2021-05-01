// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities:{
    browserName: 'chrome',
    chromeOptions: {
        //args:['--window-size=1920,1080']
    }
},

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculatorTestcopy.js'],

  // Options to be passed to Jasmine.   protractor conf/conf.js

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
