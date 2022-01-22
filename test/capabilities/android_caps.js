const android_capabilites = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "7",
        deviceName: "Android_Emulator_Latihan",
        app: "/Users/dhonyimamsaputra/atlaswork/myandroid_myadventure/apks/Test_v4.0_apkpure.com.apk",
        appPackage: "com.loginmodule.learning",
        appActivity: ".activities.LoginActivity",
        automationName: "UiAutomator2"
    }
};

module.exports = {
    android_capabilites
}