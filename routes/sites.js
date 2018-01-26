var express = require('express');
var router = express.Router();
var cors = require('cors');
var sitesJson = require('../json/sites.json');
var countriesJson = require('../json/countries.json');
var functionsJson = require('../json/sitefunctions.json');
var productareasJson = require('../json/productareas.json');
var sectorprofilesJson = require('../json/sectorprofiles.json');
var sitelistJson = require('../json/sitelist.json');
var workersJson = require('../json/workers.json');
var searchresultsJson = require('../json/searchresults.json');

router.get('/', cors(), function (req, res, next) {
    res.send(sitesJson);
});

router.get('/countries', cors(), function (req, res, next) {
    res.send(countriesJson);
});

router.get('/functions', cors(), function (req, res, next) {
    res.send(functionsJson);
});

router.get('/productareas', cors(), function (req, res, next) {
    res.send(productareasJson);
});

router.get('/sectorprofiles', cors(), function (req, res, next) {
    res.send(sectorprofilesJson);
});
router.get('/sitelist', cors(), function (req, res, next) {
    res.send(sitelistJson);
});
router.get('/workers', cors(), function(req, res, next) {
    res.send(workersJson);
});
router.get('/searchresults', cors(), function(req, res, next) {
    res.send(searchresultsJson);
});

module.exports = router;
