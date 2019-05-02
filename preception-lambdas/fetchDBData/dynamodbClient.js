'use strict';

class MyDynamoDBClient {
    constructor(AWS) {
        this.docClient = new AWS.DynamoDB.DocumentClient();
    }
    
    fetchContacts(properties, callback) {
        return this.docClient.scan({
            TableName: 'ContactForm',
            indexName: undefined
            
        }).promise()
    }
}

module.exports = MyDynamoDBClient;