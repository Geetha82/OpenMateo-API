
const latitude = 52.52;
const longitude = 13.41;

//data for 3 days, hourly temperature at 2m height, for the location with latitude 52.52 and longitude 13.41
const apiurl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=3'


// site = https://open-meteo.com- 
// endpoint = /v1/forecast
// ? = everything after the ? is the parameter

fetch(apiurl)
    .then(response => {
        //error fetching data
        if (!response.ok) {
            //throw an error 
            throw new Error("Failed to fetch data from GitHub.Please try again later.");
        }
        //return an response
        return response.json();
    })
    .then(data => {
        //log the data        console.log("Forecast data: ", data);
        console.log("Times:", data.hourly.time);
        console.log("Temperatures:", data.hourly.temperature_2m);

    })
    .catch(error => {
        //log the error
        console.error("Error fetching forecast data: ", error);
    })



