var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");
var email = Observable("");
var nickname = Observable("");
var upgrade_password = Observable("");
var password = Observable("");
var password_confirm = Observable("");
var result_msg = Observable("");

function jump_to_login(){
  router.goto("LoginPage");
}

function signup(){
  response = fetch(Common.url + "/sign_up", 
                {  method: 'POST', 
                  headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                     body: "email=" + email.value + "&password=" + password.value +
                           "&password_confirm=" + password_confirm.value + 
                           "&nickname=" + nickname.value + 
                           "&upgrade_password=" + upgrade_password.value
                     })
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
  email: email, 
  password: password,
  password_confirm: password_confirm,
  upgrade_password: upgrade_password,
  nickname: nickname,
  signup: signup,
  jump_to_login: jump_to_login
};
