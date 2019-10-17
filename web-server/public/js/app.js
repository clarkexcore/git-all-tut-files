console.log("Client Side Javascript file is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector(".location-input");
const message_error = document.querySelector(".error-message");
const message_success = document.querySelector(".weather-info");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    message_error.textContent = "Loading...";
    message_success.textContent = "";
    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((res) => {
        res.json().then((data) => {
            if(data.error){
                message_error.textContent = data.error;
            } else {
                message_error.textContent = data.location;
                message_success.textContent = `The Temperature is ${data.currentTemp}. ${data.summary}`;
            }
        })
    })
})