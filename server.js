var config = require("./server/config/config.js");
var path = require("path");

var express = require("express");
var server = express();
server.use(express.static(path.join(__dirname, "./client")));

var bodyParser = require("body-parser");
server.use(bodyParser.json());

require("./server/config/mongoose.js")(config);
require("./server/config/routes.js")(server);

server.listen(config.server_port, function(){
  console.log("Listening on port " + config.server_port);
})
