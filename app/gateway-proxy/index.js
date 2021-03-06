var AWS = require('aws-sdk'),

    lambda;
AWS.config.update({region: 'us-east-1'});
lambda = new AWS.Lambda();

exports.handler = function (event, context) {
	'use strict';
    lambda.invoke({
        FunctionName: 'smashing-monitoring',
        InvocationType: 'Event'
    }, function (error, data) {
        if (error) {
            context.fail(error);
        }

        else {
            context.succeed(data);
        }
    });

};