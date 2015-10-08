var config = require('./config'),
    Promise = require('promise'),
    runSites = require('./runSites');



exports.handler = function (event, context) {
    'use strict';
    var tenants = config.tenants,

        runAllTenants = function (tenants) {
            console.log('run '+tenants.length+ ' tenants');
            return Promise.all(tenants.map(runSites));
        };


    runAllTenants(tenants).done(function () {
        console.log('all done');
        context.succeed('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');


    }, function (err) {
        console.log(err);
        context.fail();
    });


};

