
/*
var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res) {
   //res.send('Hello World');
    fs.readFile('./index.html', function (err, html) {
    if (err) throw err; 
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname));
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html); 
   // res.send("something");
        
    app.post('/test', function (req, res1) {
   var request = require('request'); // "Request" library

var client_id = 'aff0745f7a4e45feabfd822fb8b780fd'; // Your client id
var client_secret = 'ac32d4ff7b254af8bf222d5fdffb1cb0'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/search?q=kanye&type=artist&limit=1&offset=0',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
       console.log(body.artists.items[0].name);
       // res.send("something else");
        //res.write(body.artists.items[0].name);
       // res.
        aname = body.artists.items[0].name;
      console.log(body.artists.items[0].id);
        console.log(body.artists.items[0].popularity);
       
    });
  }
  
});
   
        
});
        
   
   // res.end();
})
    
    
})

io.on('connection', function(client) {  
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
    });
});
server.listen(8080);  

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})*/


var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

app.get('/', function(req, res){
    fs.readFile('./index.html', function (err, html) {
         if (err) throw err; 
    app.use(express.static(__dirname + '/public'));
    app.use(express.static(__dirname));
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html); 
    });


io.on('connection', function(socket){
  console.log('a user connected');
     socket.on('join', function(msg){
    console.log('message: ' + msg);
       var str = msg.split(" ");
        var artname = "";
         for(i = 0; i < str.length - 1; i++){
             artname = artname + str[i];
             if(str.length - 2 != i){
                 artname = artname + " ";
             }
         }
         if(str[str.length - 1] === "Song"){
             str[str.length - 1] = "track";
         }
   var url1 = 'https://api.spotify.com/v1/search?q=' + artname + '&type=' + str[str.length-1] +'&limit=1&offset=0';
        //console.log(url1);
       // console.log("test");
   var request = require('request'); // "Request" library

var client_id = 'aff0745f7a4e45feabfd822fb8b780fd'; // Your client id
var client_secret = 'ac32d4ff7b254af8bf222d5fdffb1cb0'; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: url1,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
        if(str[str.length-1] == "Artist"){
       console.log(body.artists.items[0].name);
       // res.send("something else");
        //res.write(body.artists.items[0].name);
       // res.
        aname = body.artists.items[0].name + ' ' + body.artists.items[0].id + ' ' + body.artists.items[0].popularity + ' ' + body.artists.items[0].images[0].url;
        var url2 = 'https://api.spotify.com/v1/artists/' + body.artists.items[0].id + '/related-artists';
        var url3 = '';
      console.log(body.artists.items[0].id);
        console.log(body.artists.items[0].popularity);
            console.log(body.artists.items[0].images[0].url);
            ///////
            
            
request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: url2,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
       // console.log(body);
        console.log(body.artists[0].name);
        console.log(body.artists[0].id);
        url3 = 'https://api.spotify.com/v1/artists/' + body.artists[0].id + '/top-tracks?country=US'
        console.log(body.artists[1].name);
        console.log(body.artists[2].name);
        console.log(body.artists[3].name);
        console.log(body.artists[4].name);
        aname = aname + ' ' + body.artists[0].name + ' ' + body.artists[1].name + ' ' + body.artists[2].name + ' ' + body.artists[3].name + ' ' + body.artists[4].name;
 
            //////
            request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: url3,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
       // console.log(body);
        console.log(body.tracks[0].name);
        console.log(body.tracks[1].name);
        console.log(body.tracks[2].name);
        console.log(body.tracks[3].name);
        console.log(body.tracks[4].name);
        aname = aname + ' ' + body.tracks[0].name + ' ' + body.tracks[1].name + ' ' + body.tracks[2].name + ' ' + body.tracks[3].name + ' ' + body.tracks[4].name;
    });
  }
});
            
   });
  }
});       
            
            //////
       io.emit('chat message', aname);
        }
        if(str[str.length-1] == "track"){
            console.log(body.tracks.items[0].name);
            console.log(body.tracks.items[0].popularity);
            console.log(body.tracks.items[0].id);
            console.log(body.tracks.items[0].album.images[0].url);
            var sts = body.tracks.items[0].name + ' ' + body.tracks.items[0].popularity + ' ' + body.tracks.items[0].id + ' ' + body.tracks.items[0].album.images[0].url;
            io.emit('chat message', sts);
        }
    });
  }
  
});
   
        

         
         
         
    // io.emit('chat message', msg);
  });
   // url1 = '';
});

    });

var port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on *:3000');
});


