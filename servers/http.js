//Requires the Express
//framework, your routes,
//and the model
var express = require('express'),
actuatorsRoutes = require('./../routes/actuators'),
sensorRoutes = require('./../routes/sensors'),
resources = require('./../resources/model'),
cors = require('cors');
//Creating an application with the Express
//framework; this wraps an HTTP server.
var app = express();
//enabling CORS support 
app.use(cors());
//Binding the  routes to the Express
//application; bind them to /pi/
//actuators/... and /pi/sensors/.
app.use('/pi/actuators', actuatorsRoutes);
app.use('/pi/sensors', sensorRoutes);
//Creating a default route for /pi
app.get('/pi', function (req, res) {
res.send('This is the WoT-Pi!')
});
module.exports = app;
