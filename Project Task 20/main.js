// Foursquare API Info
const clientId = 'HGODBOMOJ4FUCQNOI3XKUP1ZT5Y35SJE1THOSNLPXWWVUPFN';
const clientSecret = '0R5WZ5YD4IJVWY443RJ33T1PNTZEYPEVXGL2HUVQAKOFJT3I';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'c9dbb41b7e0ba717976d2fe5f5d49d07';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const limit=10;
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
async function getVenues(){
  const city = $input.val();
  
  const urlToFetch = `${url}${city}&limit=${limit}&client_id=${clientId}&client_secret=${clientSecret}&v=${getDate()}`;
  return new Promise(async(resolve,reject)=>{
    try{
      const response = await fetch(urlToFetch);
      if(response.ok){
        // console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        let venues = jsonResponse.response.groups[0].items.map(item=>item.venue);
        return venues;
      }
      else{
        throw new Error("Request Failed due to " + response.status);
      }
    }
    catch(error){
      console.log(error);
    }
  });
}

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?q=${$input.val()}&APPID=${openWeatherKey}`;

  try{
    const response = await fetch(urlToFetch);
      if(response.ok){
        // console.log(response);
        const jsonResponse = await response.json();
        return jsonResponse;
  }
  else{
    throw new Error("Request Failed due to " + response.status);
  }
}
  catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {

  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;

    let venueContent = createVenueHTML(venue.name,venue.location,venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues=>renderVenues(venues));
  getForecast().then(forecast=>renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)

const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
        <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
        <h2>Condition: ${currentDay.weather[0].description}</h2>
      <img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}
