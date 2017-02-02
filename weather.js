const https = require('https');
const api = request('./api.json');

//Print Out temp Details
function printWeather(weaather) {
  const message = 'Current temperature in ${weather.location.city} is ${weather.current.observation.temp_f}F';
  console.log(message);
}
//Print out error message

function get(query) {
const request = 
    https.get('https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json', response => {
      let body = "";
      //Read data
      response.on('data', chunk => {
        body += chunk;
      });
      response.on('end', () => {
        //Parse data
        const weather = JSON.parse(body);
        //Print data
        printWeather(weather);
      });
     });//End Response
           
 }//End get(query) function
        
module.exports.get = get;
        
//TODO; Handle any errors
