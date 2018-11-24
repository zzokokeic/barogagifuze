var Observable = require("FuseJS/Observable");
var hasProfile = Observable(false);
var token = Observable("");

router.goto("LoginPage");

module.exports = {
	token: token,
	hasProfile: hasProfile
};
