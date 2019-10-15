const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/513db1c84fa9354d5d2c0dac5aec4cfb/${lat},${lon}?units=auto`;

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback("Unable to connect to Weather API", undefined);
        } else if (body.error) {
            callback(body.error, undefined);
        } else {
            const data = {
                currentTemp: body.currently.temperature,
                summary: body.daily.data[0].summary,
                precip: body.currently.precipProbability
            }
            callback(undefined, data);
        }
    })

}

module.exports = forecast;