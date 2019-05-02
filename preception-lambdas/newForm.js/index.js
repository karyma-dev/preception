'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

const MyDynamoDBClient = require('./dynamodb-client.js');
const dydb = new MyDynamoDBClient(AWS);

exports.handler = async event => {
    try {
      let email = JSON.parse(event.body);
      await dydb.createContact(email);
      let response = {
        "body": JSON.stringify({message:"successful!"}),
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*' 
        }
      };
      return response
    } catch (error) {
      console.error(error)
    }
};