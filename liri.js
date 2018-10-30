//initialize dotenv
require("dotenv").config();

//NPM modules
//local modules
var movieName = "";
var bandsintown = Artists;
const action = process.argv[2];
const input = process.argv[3];
var moment = require('moment');
moment().format();

const keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// bands in town search
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

        var bandsintown = JSON.parse(body, null, 2);

        console.log("Name of the venue: " + bandsintown.Artists),
            console.log("Venue location: " + bandsintown.Location),
            console.log("Date of the Event: " + bandsintown.concertTime.moment("HH:mm"));


    }
});


// end getBands function


request(queryUrl, function (error, response, body) {

    if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating

        console.log("Release Year: " + JSON.parse(body).Year);
    }

})


function getSpotify(input) {
    var spotify = new Spotify({
        id: "d63442d2266e4fa5b56d6f503b3397a1",
        secret: "f1aba38db6c24267a02301d55e1b526et",
    });
    if (input) {
        spotify.search({
            type: 'track',
            query: input
        }, function (err, data) {
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

        //getMovie function 
        function getMovie() {

            // Then run a request to the OMDB API with the movie specified
            var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=short&apikey=f1aba38db6c24267a02301d55e1b526e";

            // This line is just to help us debug against the actual URL.
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

            });

        } // end getMovie function



        request(queryUrl, function (error, response, body) {

            if (!error && response.statusCode === 200) {

                // Parse the body of the site and recover just the imdbRating
                // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
                console.log("Release Year: " + JSON.parse(body).Year);
            }


        });

        function checkArg(argument, input) {
            switch (action) {
                case 'concert-this':
                    console.log("You want a concert for ", input);
                    break;
                case 'spotify-this-song':
                    console.log("You want a song for ", input);
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
    }
};