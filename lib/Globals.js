const buildnumber = process.env.CIRCLE_BUILD_NUM;
var faker = require('faker');

module.exports = {
    // this controls whether to abort the test execution when an assertion failed and skip the rest
    // it's being used in waitFor commands and expect assertions
    abortOnAssertionFailure: true,

    // this will overwrite the default polling interval (currently 500ms) for waitFor commands
    // and expect assertions that use retry
    waitForConditionPollInterval: 500,

    // default timeout value in milliseconds for waitFor commands and implicit waitFor value for
    // expect assertions
    waitForConditionTimeout: 15000,

    // this will cause waitFor commands on elements to throw an error if multiple
    // elements are found using the given locate strategy and selector
    throwOnMultipleElementsReturned: true,

    // controls the timeout time for async hooks. Expects the done() callback to be invoked within this time
    // or an error is thrown
    asyncHookTimeout: 30000,

    circlebuildnumber: buildnumber,

    environment: 'default',

    localchrome: {
        environment: 'local'
    },
    employeeDetails: {
        'firstName': faker.name.firstName(),
        'lastName': faker.name.lastName(),
        'address': faker.fake("{{address.streetAddress}} {{address.streetSuffix}}"),
        'city': faker.address.city(),
        'state': faker.address.state(),
        'department': 'Quality Assurance',
        'departmentOption': '7'
    },
    employeeLabels: {
        'firstName': 'First Name',
        'lastName': 'Last Name', 
        'address': 'Address',
        'state': 'State',
        'city': 'City',
        'department': 'Department'
    },

    TPCridentials: {
        'username': 'Ted',
        'password': '123',
        'invalidUsername': 'Jim',
        'invlaidPassword': '1234'
    },

    beforeEach: function (browser, done) {
       browser.maximizeWindow(done)
       console.log(browser.options.desiredCapabilities.browserName)
    },

    afterEach: function (client, done) {
        if(client.globals.environment == "saucelabs") {
            client.sauceEnd()

            setTimeout(function() {
                done()
            }, 1000)
        }else {
            client.end();

            done();
        }
    },
    
    // reporter: function (results, cb) {
    //    console.log(results);
    //    cb();
    // }
};