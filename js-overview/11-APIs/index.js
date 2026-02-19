require("dotenv").config({
  path: require("path").resolve(__dirname, "../../.env"),
});

const apikey = process.env.API_KEY;

if (!apikey) {
  console.error("API key not found in environment variables");
  process.exit(1);
}

const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/India/today?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cdew%2Cfeelslike%2Cfeelslikemax%2Cfeelslikemin%2Cname%2Coffset%2CsunriseEpoch%2CsunsetEpoch%2Ctemp%2Ctempmax%2Ctempmin&include=current&key=${apikey}&contentType=json`;

/* ---------- Using Promises ---------- */
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Weather data:", data);
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

/* ---------- Using Async/Await ---------- */
async function fetchWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Weather data:", data);
  } catch (error) {
    console.error(error);
  }
}
