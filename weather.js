const https = require('https');
const api = request('./api.json');

//Print Out temp Details
//Print out error message

function get(query) {
const request = 
    https.get('https://api.underground.com/api/${api.key}/geolookup/conditions/q/${query}.json', response => {
      let body = "";
      //Read data
      response.on('data', chunk => {
        body += chunk;
      });
      response.on('end', () => {
        console.log(body);
        //Parse data
        //Print data
      });
     });//End Response
           
 }//End get(query) function
        
module.exports.get = get;
        
//TODO; Handle any errors
