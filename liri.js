//initialize dotenv
require("dotenv").config();

//NPM modules
//local modules
const keys = require("./key.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

const action = process.argv[2];
const input = process.argv[3];

//const spotify = new Spotify(keys.spotify);
console.log("KEYS", keys);
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "d63442d2266e4fa5b56d6f503b3397a1",
  secret: "f1aba38db6c24267a02301d55e1b526et",
});
 
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp".then(function(data) {
    console.log(data)
 })

  var queryUrl =  "http://www.omdbapi.com/?t=" + "Title" + "&y=&plot=short&IMDBRating&lang&actors&country&apikey=f1aba38db6c24267a02301d55e1b526e"
  .then(function(data) {
    console.log(data)
 })

    request(queryUrl, function(error, response, body){

    if (!error && response.statusCode === 200) {
     
    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }

 inquirer.prompt([{

    type:"input",
    name:"userChoice",
    messge: "Please select an option!",
    choices: ["concert-this","spotify-this-song","movie-this","do-what-it-says"]
}
])
    function checkArg(argument,input){
    switch(action){
       case 'concert-this':
       console.log("You want a concert for ", input);
       break;
       case 'spotify-this-song':
       console.log("You what a song for ", input);
       break;
       case 'movie-this':
       console.log("You want movie info on ", input);
       break;
       case 'do-what-it-says':
       console.log("Do what it says");
       break;
       default:
       console.log("No idea what you are asking for...");
}
}};
