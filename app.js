const weather = require('./weather.js');

//Join mulitple values passed as arguments and replace all spaces with underscores
const query = process.argv.slice(2).join("_").replace(' ', '_');

//query: 40228
//query: Louisville_KY
//query: London_England

weather.get(query);
