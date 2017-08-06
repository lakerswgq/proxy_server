var path = require("path");
var express = require("express");
var httpProxy = require("http-proxy-middleware");

var app = express();

function startServer(options){
    var path = options.path || __dirname,
        proxyOptions = options.proxy || {},
        port = options.port || 8888;

    app.use(express.static(path));

    var proxySetting = httpProxy(proxyOptions);

    app.use(proxySetting);

    app.listen(port, function (){
        console.log("server is running at localhost:", port);
    })
}

module.exports = startServer;