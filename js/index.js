
const latitude = 52.52;
const longitude = 13.41;

//data for 3 days, hourly temperature at 2m height, for the location with latitude 52.52 and longitude 13.41
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph`;

// site = https://open-meteo.com- 
// endpoint = /v1/forecast
// ? = everything after the ? is the parameter


// Select the HTML elements
const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const windSpeedEl = document.getElementById('wind-speed');

// Function to fetch weather data
async function fetchWeatherData() {
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Extract the required data points
        const temperature = data.current_weather.temperature;
        const windSpeed = data.current_weather.windspeed;
        const tempUnit = data.current_weather_units.temperature;
        const speedUnit = data.current_weather_units.windspeed;

        // Display the data in the HTML
        locationEl.textContent = `${data.latitude}, ${data.longitude}`;
        temperatureEl.textContent = `${temperature}${tempUnit}`;
        windSpeedEl.textContent = `${windSpeed}${speedUnit}`;

    } catch (error) {
        // Handle any errors during the fetch operation
        console.error('Error fetching weather data:', error.message);
        locationEl.textContent = 'Failed to load data';
        temperatureEl.textContent = 'Error';
        windSpeedEl.textContent = 'Error';
    }
}

// Call the fetch function when the script loads
fetchWeatherData();

