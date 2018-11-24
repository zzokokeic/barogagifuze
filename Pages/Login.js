var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var email = Observable("");
var password = Observable("");
var result_msg = Observable("");

function jump_to_signup(){
  router.goto("SignupPage");
}

function login(){
  response = fetch(Common.url + "/sign_in", 
                {  method: 'POST', 
                  headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                     body: "email=" + email.value + "&password=" + password.value})
              .then(function(response){ return response.json();})
              .then(function(data_from_server){
                  if (data_from_server.hasOwnProperty('token')){
                    FileSystem.writeTextToFile(Common.token_path, data_from_server['token'])
                    router.goto("MainPage");
                  }else{
                    if (data_from_server == "error_1_6"){
                      result_msg.value = "아이디가 사용중입니다"
                    }else{
                      result_msg.value = data_from_server
                    }
                  }
              });
}
module.exports = {
  result_msg: result_msg,
  login: login,
  email: email, 
  password: password,
  login: login, 
  jump_to_signup: jump_to_signup
};
