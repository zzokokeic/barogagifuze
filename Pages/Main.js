var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");

function logout(){
  FileSystem.deleteSync(Common.token_path)
  router.goto("LoginPage");
}
function jump_to_get_fish(){
  router.goto("ShopPage");
}

FileSystem.readTextFromFile(Common.token_path)
  .then(function(token) {
    response = fetch(Common.url + "/get_my_animal_list", 
              {  method: 'POST', 
                headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                   body: "token=" + token})
            .then(function(response){ return response.json();})
            .then(function(data_from_server){
            });
});

module.exports = {
  logout: logout,
  jump_to_get_fish, jump_to_get_fish
}
