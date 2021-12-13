
var httpServer = require('./servers/http.js'); //loading http
var ledsPlugin = require('./plugins/ledsplugin.js');
ledsPlugin.start({'simulate': false, 'frequency': 2000});

var pirPlugin = require('./plugins/pirPlugin.js');

pirPlugin.start({'simulate': false, 'frequency': 2000});


resources = require('./resources/model.js'); //loading the model
var server = httpServer.listen(resources.pi.port, function () //start the http server
{
console.info ('Your WoT Pi is up and running on port %s',
resources.pi.port); //invoking the callback
});

