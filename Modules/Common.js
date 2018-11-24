var Observable = require("FuseJS/Observable");
var FileSystem = require("FuseJS/FileSystem");
// var url = "https://arcane-gorge-90774.herokuapp.com"
var url = "http://localhost:4567"
var token_path = FileSystem.dataDirectory + "/" + "token.txt";

module.exports = {
  url: url,
  token_path: token_path
};
