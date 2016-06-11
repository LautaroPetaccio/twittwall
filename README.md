# Twitter real time wall
![Twitter wall](https://raw.githubusercontent.com/lausuper/twittwall/master/screen.png)
The idea behind this code is to test the Twitter and the Socket.io node modules to create something simple with the stream API provided by Twitter.

The project consists in a server that does the following:
- Fetches in real time the new twitts beeing made that have an specific keyword or hashtag in their body.
- Pushes the new twitts to the client page trough web sockets using the Socket.io module.

And a client coded with AngularJS that receives the twitts using Socket.io and shows them.

### Installation
npm intall

### Usage
- Execute node index.js
- In the new browser window opened, write the hashtag or keyword to search in twitter stream for.