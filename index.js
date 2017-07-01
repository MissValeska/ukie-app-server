var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000));

app.set('json spaces', 0);
 
app.get('/', function(req, res) {
  res.sendfile('PrivacyPolicy.html', {root: __dirname })
  #res.json({conj:"живеш", conjtype:"ти", infin:"жити"});
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});