const https = require('https');

const url = "https://api.darksky.net/forecast/513db1c84fa9354d5d2c0dac5aec4cfb/40,-75?units=auto";

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        // console.log();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on("error", (error) => {
    console.log("error", error);
})

request.end();