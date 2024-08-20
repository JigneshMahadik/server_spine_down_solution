// keep-alive.js

const https = require('https');

// URL of your Render backend
const url = 'https://your-backend-url.onrender.com';

function sendRequest() {
    https.get(url, (res) => {
        console.log(`Pinged ${url}: Status Code ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`Error: ${e.message}`);
    });
}

// Send a request every 5 minutes (300,000 milliseconds)
setInterval(sendRequest, 5000);

console.log(`Started keep-alive script. Pinging ${url} every 5 minutes.`);