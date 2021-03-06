var AWS = require('aws-sdk'),
    dyn,
    config = require('../psi/config')(),
    params;


AWS.config.update({region: 'us-east-1'});
dyn = new AWS.DynamoDB();
dyn.updateTable({'TableName':config.dynamodbTableName, ProvisionedThroughput: {
    ReadCapacityUnits: 20, /* required */
    WriteCapacityUnits: 20 /* required */
}}, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});

