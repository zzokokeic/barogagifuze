var Alerts = require("FuseJS/Alerts");
var Observable = require("FuseJS/Observable");
var email = Observable("");
var password = Observable("");
var upgrade_password = Observable("");
var nickname = Observable("");
// var url = "http://localhost:4567/get_all_tasks"
// var url = "https://arcane-gorge-90774.herokuapp.com"
var url = "http://localhost:4567"
var result_msg = Observable("");

function login(){
  response = fetch(url + "/sign_in", 
                {  method: 'POST', 
                  headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                     body: "email=" + email.value + "&password=" + password.value})
              .then(function(response){ return response.json();})
              .then(function(data_from_server){
                  if (data_from_server == "error_1"){
                    result_msg.value = "아이디/비번이 다릅니다." 
                  } else {
                    router.goto("MainPage");
                  }
              });
}
module.exports = {
  result_msg: result_msg,
  login: login,
  email: email, 
  password: password,
  upgrade_password: upgrade_password,
  nickname: nickname,
  login: login
};
