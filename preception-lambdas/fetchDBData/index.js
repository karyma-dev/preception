'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const fs = require('fs')

const MyDynamoDBClient = require('./dynamodbClient.js');
const dydb = new MyDynamoDBClient(AWS);
const ses = new AWS.SES()

let SOURCE_EMAIL = 'leigh@preception.io'

const changeToMIME = (file) => {
  
  var ses_mail = "From: 'AWS SES Attchament Configuration' <" + SOURCE_EMAIL + ">\n";
  ses_mail += "To: " + SOURCE_EMAIL + "\n";
  ses_mail += "Subject: AWS SES Attachment Example\n";
  ses_mail += "MIME-Version: 1.0\n";
  ses_mail += "Content-Type: multipart/mixed; boundary=\"NextPart\"\n\n";
  ses_mail += "--NextPart\n";
  ses_mail += "Content-Type: text/html\n\n";
  ses_mail += "This is the body of the email.\n\n";
  ses_mail += "--NextPart\n";
  ses_mail += "Content-Type: application/octet-stream; name=\"hello.txt\"\n";
  ses_mail += "Content-Transfer-Encoding: base64\n";
  ses_mail += "Content-Disposition: attachment\n\n";
  ses_mail += file.toString("base64").replace(/([^\0]{76})/g, "$1\n") + "\n\n";
  ses_mail += "--NextPart--";
  return ses_mail
}


exports.handler = async (event, context) => {
try {
  const result = await dydb.fetchContacts();
  console.log(result);
  result.Items.forEach(async contact => {
    try {
      const { email, phone, name,  message, other, investor, athlete, organization, contactDate } = contact
      const date = new Date(Number(contactDate)).toUTCString();
      await fs.writeFile("/tmp/contact.txt", `"Email (S)","Phone Number (S)", "Contact Date (S)","Name (S)","message (S)","athlete (BOOL)","organization (BOOL)","investor (BOOL)","other (BOOL)"`, function(err){
        if (err) context.fail(err)
        return context.succeed("File Written")
      })
      await fs.appendFile("/tmp/contact.txt", `\n ${email}, ${phone}, ${date}, ${name}, ${message}, ${athlete}, ${organization}, ${investor}, ${other}`, function(err){
        if (err) context.fail(err)
        return context.succeed("File Written")
      })
    } catch (e) {
      console.error(e)
      return e
    }
  })

  const data = fs.readFileSync("/tmp/contact.txt")

  const textFile = changeToMIME(data)
  const params = {
    RawMessage: {
      Data: textFile
    },
    Source: "leigh@preception.io"
  }

  const resident = await ses.sendRawEmail(params).promise();
  return result
  } catch (error) {
    return error
  }
};