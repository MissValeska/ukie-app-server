var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.set('json spaces', 0);

app.get('/conj', function(req, res) {
  res.json({conj:"живеш"});
})

app.get('/infin', function(req, res) {
  res.json({infin:"жити"});
})

app.get('/conjtype', function(req, res) {
  res.json({conjtype:"ти"});
})
 
app.get('/', function(req, res) {
  res.send("HAI")
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});