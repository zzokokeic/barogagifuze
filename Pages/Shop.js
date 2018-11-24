var Common = require("Modules/Common");
var FileSystem = require("FuseJS/FileSystem");
var Observable = require("FuseJS/Observable");

function back_to_myfish(){
  router.goto("MainPage");
}

function init_shop_list(){
  FileSystem.readTextFromFile(Common.token_path)
    .then(function(token) {
       fetch(Common.url + "/get_animal_list" + "?token=" + token )
              .then(function(response){ return response.json();})
              .then(function(data_from_server){
                  console.log(JSON.stringify(data_from_server));
              });
  });
}
module.exports = {
  back_to_myfish: back_to_myfish
}
