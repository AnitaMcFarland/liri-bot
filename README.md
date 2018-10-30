## Liri-bot
**Version 1.0.0**

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
**Concert this** will search for bands in Town Artist Events. For an artist, the following information will return to the terminal: (*node liri.js concert-this + name of band*)
1. Name of Venue
2. Venue location
3. Date of the Event (MM/DD/YYYY)

**Spotify this** song will search information about the song and return to the terminal: (*node liri.js spotify-this-song + name of song*)
1. Artist(s)
2. The song's name
3. A preview link of the song from Spotify
4. The album that the song is from

**Movie this** will search for information about movies and return to the terminal: (*node liri.js movie-this + name of movie*)
1. Title of the movie
2. Year of the movie
3. IMBD Rating of the movie
4. Rotten Tomatoes Rating of the movie
5. Country where the movie was produced
6. Language of the movie
7. Plot of the movie
8. Actors in the movie

**Do what it says** will take the text inside of random.txt and use it to call one of LIRI's commands.





@ Anita McFarland