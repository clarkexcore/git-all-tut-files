const express = require('express');
const path = require("path");

console.log(__dirname);
console.log(path.join(__dirname, '../public/'));

const app = express();

const public_directory = path.join(__dirname, '../public/');
app.use(express.static(public_directory));

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