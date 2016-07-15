var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
      var data =JSON.parse(body.substring(3));
      var count =[{spend:47373.05,count:1000},{spend:18483.21,count:430},{spend:4260,count:100}];
      // res.send(data);
      // var data ={t:'adasdw'};
      // res.render('index',{page_title:"Edit Customers - Node.js",data:rows});
      // res.sendfile("index.html");
      // res.send(data);
      res.render('index',{jsondata:data,base:count});
    }
  })

 });
// 
//
// app.get('/', function (req, res) {
// request('http://finance.google.com/finance/info?client=ig&q=NASDAQ:NVDA,NYSE:LN,NYSE:TWLO', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(JSON.parse(body.substring(3))); // Show the HTML for the Google homepage.
//     // var data =JSON.parse(body.substring(3));
//     // res.send(data);
//     // var data ={t:'adasdw'};
//     // res.render('index',{page_title:"Edit Customers - Node.js",data:rows});
//     // res.sendfile("index.html");
//     // res.send(data);
//   }
// })
//   // res.send('Hello World!');
// });



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
