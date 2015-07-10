var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var fs = require("fs");
  var filename = "index.html";
  var buf = fs.readFileSync(filename, "utf8");
  response.send(buf.toString('ascii'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
