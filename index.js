var path = require("path");
var express = require("express");
var httpProxy = require("http-proxy-middleware");
var opn = require("opn");

var app = express();

function startServer(options){
    var path = options.path || __dirname,
        proxyOptions = options.proxy || {},
        port = options.port || 8888;

    app.use(express.static(path));

    if (Object.keys(proxyOptions).length !== 0){
        var proxySetting = httpProxy(proxyOptions);
        app.use(proxySetting);
    }

    

    app.listen(port, function (){
        var url = "http://localhost:"+port;
        console.log("server is running at", url);
        opn(url);
    })
}

module.exports = startServer;