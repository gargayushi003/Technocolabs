// Foursquare API Info
const clientId = 'HGODBOMOJ4FUCQNOI3XKUP1ZT5Y35SJE1THOSNLPXWWVUPFN';
const clientSecret = '0R5WZ5YD4IJVWY443RJ33T1PNTZEYPEVXGL2HUVQAKOFJT3I';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'c9dbb41b7e0ba717976d2fe5f5d49d07';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
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
  
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${getDate()}`;
  return new Promise(async(resolve,reject)=>{
    try{
      const response = await fetch(urlToFetch);
      if(response.ok){
        // console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
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

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)

