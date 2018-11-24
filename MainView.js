var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var hasProfile = Observable(false);

FileSystem.readTextFromFile(Common.token_path)
    .then(function(text) {
      router.goto("MainPage");
    })
    .catch(function(error) {
      router.goto("LoginPage");
    });

module.exports = {
	hasProfile: hasProfile
};
