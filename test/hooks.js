let appium = require('appium');
const { appium_caps } = require('./capabilities/appium_caps');
let server;

const mochaGlobalSetup = async() => {
    console.log(`=============> APPIUM SERVER START <============`);
    server = await appium.main(appium_caps);
};

const mochaGlobalTeardown = async() => {
    await server.close();
    console.log(`=============> APPIUM SERVER STOP <============`);
};

exports.mochaHooks = {
    beforeAll(done) {
        // do something before every test
        mochaGlobalSetup();
        done();
    },
    afterAll(done) {
        mochaGlobalTeardown();
        done();
    }
};