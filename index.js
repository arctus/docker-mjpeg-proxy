var MjpegProxy = require('mjpeg-proxy').MjpegProxy;
var express = require('express');
var util = require('util');
var app = express();
var mjpegurl = process.env.MJPEG_URL;

var urls = mjpegurl.split(",");
for (var i = 0; i < urls.length; i++) {
    app.get(util.format('/index_%d.mjpg', i + 1), new MjpegProxy(urls[i]).proxyRequest);
}
app.listen(process.env.MJPEG_PORT);
