var app = require('express')();
var http = require("http").Server(app);
var io = require('socket.io')(http);

// import your default response list
var responseList = require('./response-list');

// import the Craneo framework
var Craneo = require('craneo');

/* Create an instance of your Craneo Bot
 * Passing it your default response list
 */
var bot = Craneo({responseList: responseList});


var __dirname = '/Users/Viki/gitHubReps/craneo-template/public'

app.get('/', function(req, res){
 res.sendFile(__dirname + '/index.html');
});


io.on('connection',function(socket){
  console.log('a user connected');

  socket.on( "chat message", function(msg){
   /* Listen to an event
    * Passing the message argument first followed by
    * any other arguments you want passed down to your
    * response function inside of an object
    */
   bot.listen(msg, {socket: socket});
  });

  // log disconnect
  socket.on('disconnect',function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


















/* basic server
var fs = require('fs');
var path = require('path');
var mime = require('mime');

function send404(response){
  response.writeHead(404, {"Content-Type" : "text/plain"});
  response.write("Error 404: resource not found");
  response.end();
}

function sendPage( response, filePath, fileContents ){
  response.writeHead(200, {"Content-Type" : mime.lookup(path.basename(filePath))});
  response.end(fileContents);
}

function serverWorking(response, absPath) {
  fs.exists(absPath, function(exist){
    if(exist) {
      fs.readFile(absPath, function(err, data){
	      if(err){  send404(response); }
	else { sendPage(response, absPath, data); }
      });//fs readfile
    } else {
	send404(response);
    }//if exist or else
  });//fs exist
}//server working


// Create the server
var server = http.createServer(function(request, response){
  // set the filepath
  // if the slash changes
  var filePath = false;
  if(request.url == '/'){
    filePath = "public/index.html";
  } else {
    filePath = "public" + request.url;
  }
  // set the absolute path
  var absPath = "./" + filePath;
  // start the server
  serverWorking(response, absPath);
});

var port_number = server.listen(process.env.PORT || 3000);
*/
