const http = require('http');
const https = require('https');
const api = request('./api.json');

//Print Out temp Details
function printWeather(weaather) {
  const message = 'Current temperature in ${weather.location.city} is ${weather.current_observation.temp_f}F';
  console.log(message);
}
//Print out error message
function printError(error) {
  console.log(error.message);
}


function get(query) {
  //Take out underscores for readability
  const readQuery = query.replace('_', ' ');
  try{
const request = 
    https.get('https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json', response => {
      if (response.statusCode === 200) {
      let body = "";
      //Read data
      response.on('data', chunk => {
        body += chunk;
      });
      response.on('end', () => {
        try {
        //Parse data
        const weather = JSON.parse(body);
        //Check if the location was found before printing
        if (weather.location) {
        //Print data
        printWeather(weather);
      } else {
                  const queryError = new Error ("The location '${readQuery}' was not found.");
    printError(queryError);
  } 
} catch (error) {
  //Parse error
  printError(error);
}
      });
} else {
  //Status Code Error
  const statusCodeError = new Error("There was an error getting the message for '${readQuery}.(${http.STATUS_CODES[response.statusCode]})');
                                    printError(statusCodeError);
}
     });//End Response
request.on ('error', printError);
} catch (error) {
  //URL error
  printError(error);
}
           
 }//End get(query) function
        
module.exports.get = get;
        
//TODO; Handle any errors
