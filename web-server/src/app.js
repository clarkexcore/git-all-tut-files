const express = require('express');
const path = require("path");
const hbs = require('hbs');

const app = express();

//Define Paths for Express Config
const public_directory = path.join(__dirname, '../public/');
const views_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

//Setup Handlebars Engine and views location
app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partials_path);

//Setup static directory to serve
app.use(express.static(public_directory));

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Alex Clarke"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Moi",
        name: "Alex Clarke"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Alex Clarke",
        help_message: "Help me I am trapped in a demonic dimension, and I can't get out. Please for the love of God send help!!! Oh no they're coming! F@*k!"
    })
})

app.get('/weather', (req, res) => {
    res.send({
        currentTemp: 17,
        location: "Toronto, Ontario, Canada",
        percentPrep: 0,
        summary: "This is the summary of the weather."
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404",
        error_message: "No help articles here for you buddy..",
        name: "Alex Clarke"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        error_message: "Page Not Found Pal",
        name: "Alex Clarke"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});