const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Replace these values with your Twilio credentials
const accountSid = 'ACccc8e7776a399f5d9a4fedc6046b71b5';
const authToken = 'd0decb3f8a97952dcf03b9ad5bb8cca4';
const twilioPhoneNumber = '+18556271276';

const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

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
            res.status(500).send(`Error sending RSVP: ${error.message}`);
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
