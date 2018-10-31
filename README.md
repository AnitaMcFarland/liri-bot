
# Liri-bot

## Version 1.0.0

## Overview of project

LIRI is a command line node app that is a Language Interpretation and Recognition Interface.
LIRI will search Spotify for songs,Bands in Town for concerts, and OMDB for movies, and Spotify for songs.
API requests for Node-Spotify-API, Bands in town, and OMDB.
The program will run in node.js and will need screenshots to show how it runs.

Files needed:

1. liri.js
2. key.js
3. gitignore
4. random.txt
5. .env
6. ReadMe
7. package.json

## What Each Command Should Do

**Concert this**
 will search for bands in Town Artist Events. For an artist, the following information will return to the terminal: (node liri.js concert-this <artist/band name here>)
1. Name of Venue
2. Venue location
3. Date of the Event (MM/DD/YYYY)

 **Spotify this** song will search information about the song and return to the terminal: (node liri.js spotify-this-song "song name here")
1. Artist(s)
2. The song's name
3. A preview link of the song from Spotify
4. The album that the song is from

**Movie this** will search for information about movies and return to the terminal: (node liri.js movie-this "movie name")

1. Title of the movie
2. Year of the movie
3. IMBD Rating of the movie
4. Rotten Tomatoes Rating of the movie
5. Country where the movie was produced
6. Language of the movie
7. Plot of the movie
8. Actors in the movie

**Do what it says** will take the text inside of random.txt and use it to call one of LIRI's commands.

## How it runs

***Concert-this:***  
(I am having errors with the date of the event.)

`Name of the venue: Tacoma Dome
Venue:Tacoma
c:\Users\anita\Desktop\Assignments\liri-bot\liri2.js:50
          console.log("Date of the Event: " + bandsintown[0].venue.datetime("HH:mm"));`
                                                                   ^

TypeError: bandsintown[0].venue.datetime is not a function

***Movie-this:***

(works)

`$ node liri.js movie-this "Star Wars"
this is loaded
You want movie info on  Star Wars
'<https://www.omdbapi.com/?t=Star> Wars&y=&plot=short&apikey=326e5bfc'
'Title of the movie: Star Wars: Episode IV - A New Hope'
'Year the movie came out: 1977'
'imdbRating: 8.6'
'Rotten Tomatoes Rating of the movie: 93%'
'Language: English'
'Plot: Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.'
'Actors: Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing'`

***Spotify-this:***

(this is loaded
You want a song for  Wild Horses
Error occurred: [object Object])

***Default***
(works)
`Anita@DESKTOP-QMSIH77 MINGW64 ~/Desktop/Assignments/liri-bot (master)
$ node liri.js
this is loaded
No idea what you are asking for...`

@ Anita McFarland