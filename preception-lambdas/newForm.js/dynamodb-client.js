class MyDynamoDBClient {
  constructor(AWS) {
    this.docClient = new AWS.DynamoDB.DocumentClient();
  }
  
  async createContact(properties) {
    let objectValues = Object.values(properties)
    let objectKeys = Object.keys(properties)
    for(let i = 0; i < objectValues.length; i++){
      if(objectValues[i] === ""){
          delete properties[objectKeys[i]]
      }
    }
    let params = {
      TableName: 'ContactForm',
      Item: {
          ...properties,
          contactDate: Date.now()
          
      }
    };      
    let res = await this.docClient.put(params).promise();
    return res
  }
}

module.exports = MyDynamoDBClient;