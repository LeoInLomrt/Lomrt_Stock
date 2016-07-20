var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');
app.use(express.static('public'));

//socket io
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
//
//
// io.on('connection', function(socket){
//   console.log('a user connected');
//   request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
//       var data =JSON.parse(body.substring(3));
//       var count =[{spend:47373.05,count:1000},{spend:18483.21,count:430},{spend:4260,count:100}];
//       // res.render('index',{jsondata:data,base:count});
//       socket.emit('ngTableSocket', data);
//     }
//   })
//       var users= [
//               {"name": "Moroni", "age": Math.round(Math.random() * 100)},
//               {"name": "Enos", "age":Math.round(Math.random() * 100)}
//       ];
// });
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });


// io.on('connection', function(socket){
//   console.log('a user connected');
//   socket.broadcast.emit('jsondata', {"aaa":"aaa"});
//   socket.on('new message', function (data2) {
//       console.log("app.js"+data2);
//       require('http').request({
//           host: 'finance.google.com',
//           path: '/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO',
//           method: 'GET'
//       }, function(res) {
//           res.setEncoding('utf8');
//           var body = '';
//           res.on('data', function(chunk) {
//               body += chunk;
//           });
//           res.on('end', function() {
//               // body = JSON.parse(body);
//               console.log(JSON.parse(body.substring(3)));
//               var data =JSON.parse(body.substring(3));
//               var count =[{spend:47373.05,count:1000},{spend:18483.21,count:430},{spend:4260,count:100}];
//               // Do stuff here
//               socket.broadcast.emit('jsondata', data);
//               socket.broadcast.emit('base', count);
//           })
//       }).end();
//
//   });
// });



app.get('/', function(req, res){
  request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
      var data =JSON.parse(body.substring(3));
      var count =[{spend:47373.05,count:1000},{spend:18483.21,count:430},{spend:4260,count:100}];
      res.render('index',{jsondata:data,base:count});

    }
  })

 });

 app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
