const express = require('express');


const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
})
app.get('/help', (req,res) => {
    res.send("<h1>Help Page</h1>");
})

app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>");
})

app.get('/weather', (req, res) => {
    res.send({
        currentTemp: 17,
        location: "Toronto, Ontario, Canada",
        percentPrep: 0,
        summary: "This is the summary of the weather."
    });
})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});