### local proxy server

start a proxy server on localhost

### install 

```bash
npm install julien-proxy
```

### Usage

```javascript
var startServer = require("julien-proxy");

startServer({
    path: "where to start static asset server",
    proxy: "proxy options",
    port: "port that server will listen"
});
```

About proxy options you can refer to [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)


#### example

```javascript
startServer({
    path: __dirname,
    proxy: {
        target: "http://host.com",
        changeOrigin: true
    },
    port: 8000
})
```

