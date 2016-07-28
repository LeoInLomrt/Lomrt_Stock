var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static('public'));
// //socket io
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
//
//
// var aaa=10;
// io.on('connection', function(socket){
//   console.log('a user connected');
//   request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
//       var data =JSON.parse(body.substring(3));
//       var count =[{spend:47373.05,count:aaa},{spend:18483.21,count:430},{spend:4260,count:100}];
//       // res.render('index',{jsondata:data,base:count});
//       socket.emit('ngTableSocket', {jsondata:data,base:count});
//     }
//   })
//   // socket.on('message', function(data2) {
//   //   request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO', function (error, response, body) {
//   //     if (!error && response.statusCode == 200) {
//   //       // console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
//   //       aaa++;
//   //       var data =JSON.parse(body.substring(3));
//   //       var count =[{spend:47373.05,count:aaa},{spend:18483.21,count:430},{spend:4260,count:100}];
//   //       // res.render('index',{jsondata:data,base:count});
//   //       socket.emit('ngTableSocket', {jsondata:data,base:count});
//   //     }
//   //   })
//   // });
// });
//
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });


// app.get('/update', function(req, res){
//   request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NASDAQ:GPRO', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
//       var data =JSON.parse(body.substring(3));
//       var count =[{spend:47373.05,count:1},{spend:11431.48,count:1000}];
//
//       res.render('index',{jsondata:data,base:count});
//     }
//   })
//
//  });


app.get('/', function(req, res){
  request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NASDAQ:GPRO', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
      var data =JSON.parse(body.substring(3));
      var count =[{spend:47373.05,count:1000},{spend:24088.68,count:2000}];
      res.render('index0',{jsondata:data,base:count});

    }
  })

 });

 app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
