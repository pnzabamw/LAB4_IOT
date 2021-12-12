//require and instantiate an express router to define the path to the resources.
var express = require('express'),
router = express.Router(),
resources = require('./../resources/model');
//Create a new route for a GET request on all sensors and
//attach a callback function.
router.route('/').get(function (req, res, next) {
    res.send(resources.pi.sensors);
    });
router.route('/pir').get(function (req, res, next) {
        res.send(resources.pi.sensors.pir);
        });
module.exports = router;


