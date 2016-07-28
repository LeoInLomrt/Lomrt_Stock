var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
app.use(express.static('public'));



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
