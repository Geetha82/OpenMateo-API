const fetchBtn = document.getElementById('fetch-btn');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.content-box');

// Handle Navigation Tabs
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const target = link.getAttribute('data-target');
        sections.forEach(section => {
            section.id === target ? section.classList.remove('hidden') : section.classList.add('hidden');
        });
    });
});

// Fetch Temperature and windspeed Data from APIs
async function getWeatherData() {
    const cityName = document.getElementById('city-input').value;
    if (!cityName) return;

    try {
        // 1. Get Latitude/Longitude from input(City Name)
        const locUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`;
        const locRes = await fetch(locUrl);
        const locData = await locRes.json();

        if (!locData.results) throw new Error("City not found");

        const { latitude, longitude } = locData.results[0];

        // 2. Get Weather from Latitude/Longitude
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        // 3. Update Display
        document.getElementById('temp-val').textContent = weatherData.current.temperature_2m;
        document.getElementById('wind-val').textContent = weatherData.current.wind_speed_10m;
        
    } catch (err) {
        alert(err.message);
    }
}

fetchBtn.addEventListener('click', getWeatherData);
window.onload = getWeatherData; // Load default weather data on page load
