//initialize dotenv
require("dotenv").config();

var moment = require('moment');
var request = require('request')

const action = process.argv[2];
const input = process.argv[3];
const keys = require("./keys.js");
var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);

switch (action) {
    case 'concert-this':
        console.log("You want a concert for ", input);
        concertThis()
        break;
    case 'spotify-this-song':
        console.log("You want a song for ", input);
        spotifyThis()
        break;
    case 'movie-this':
        console.log("You want movie info on ", input);
        movieThis()
        break;
    case 'do-what-it-says':
        console.log("Do what it says");
        doWhatItSays()
        break;
    default:
        console.log("No idea what you are asking for...");

}

function concertThis(){
    // bands in town search
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"

    request(queryUrl, function (error, response, body) {
        
        if (!error && response.statusCode === 200) {
            var bandsintown = JSON.parse(body);

            console.log(bandsintown)
            
            
          console.log("Name of the venue: " + bandsintown[0].venue.name),
          console.log("Venue:" + bandsintown[0].venue.city);

        //   console.log("Date of the Event: " + bandsintown.venue.date.time("HH:mm"));
            
        }
    });
}
function spotifyThis(){

    var spotify = new Spotify({
        id: "d63442d2266e4fa5b56d6f503b3397a1",
        secret: "f1aba38db6c24267a02301d55e1b526e",
    });
        spotify
        .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
        .then (function (err, data) {
            //Let the user know if they encountered an error 
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            // 1) Artist
            console.dir("Artist: " + data.tracks.items[0].album.artists[0].name);
            console.log('----------------');
            // 2) Song
            console.dir("Song: " + data.tracks.items[0].name);
            console.log('----------------');
            // 3) A preview link of the song from Spotify 
            console.dir("A preview link of the song from Spotify: " + data.tracks.items[0].preview_url);
            console.log('----------------');
            // 4) Album that the song is from
            console.dir("The album that the song is from: " + data.tracks.items[0].album.name);
            console.log('----------------');

        }); //end spotify.search
}
function movieThis(){
    var queryUrl = "https://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=326e5bfc"; 
     
    console.dir(queryUrl);
   request(queryUrl, function (error, response, body) {
       // If the request is successful
       if (!error && response.statusCode === 200) {

           var omdb = JSON.parse(body, null, 2);

           console.dir("Title of the movie: " + omdb.Title);
           console.dir("Year the movie came out: " + omdb.Year);
           console.dir("imdbRating: " + omdb.imdbRating);
           console.dir("Rotten Tomatoes Rating of the movie: " + omdb.Ratings[1].Value);
           console.dir("Language: " + omdb.Language);
           console.dir("Plot: " + omdb.Plot);
           console.dir("Actors: " + omdb.Actors);

       }

   })

};// end getMovie function



    

function doWhatItSays(){
    console.log("Do what it says");
    
    
}


function readFile() {

    //Use fs to read info from a local file
    fs.readFile("random.txt", "utf-8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // Then split the text into an array by commas (to make it more readable) and trim white spaces
        var dataArr = data.trim().split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);


    })
}
