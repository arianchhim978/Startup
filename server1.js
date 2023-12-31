const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Replace these values with your Twilio credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-rsvp', (req, res) => {
  const { phoneNumber, message } = req.body;

  client.messages
    .create({
      body: message,
      from: twilioPhoneNumber,
      to: phoneNumber,
    })
    .then((message) => {
      console.log('RSVP message sent:', message.sid);
      res.status(200).send('RSVP message sent successfully.');
    })
    .catch((error) => {
      console.error('Error sending RSVP:', error);
      res.status(500).send('Error sending RSVP.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
