const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Initialize Twilio with your credentials
const accountSid = 'ACccc8e7776a399f5d9a4fedc6046b71b5';
const authToken = 'd0decb3f8a97952dcf03b9ad5bb8cca4';
const client = twilio(accountSid, authToken);

// Define your route for handling RSVP submissions
app.post('/submit-rsvp', (req, res) => {
    // Extract data from the request
    const { name, phoneNumber } = req.body;

    // Your logic to save RSVP data to Firebase or other database

    // Send SMS using Twilio
    client.messages.create({
        body: `Thank you for your RSVP, ${name}!`,
        from: '+18556271276',
        to: phoneNumber,
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));

    // Respond to the client
    res.status(200).send('RSVP submitted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});