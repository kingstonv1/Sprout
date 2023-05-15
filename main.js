let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(__dirname + '/site'));

app.get('/', function (req, res) {
    if (req.originalUrl == '/') {
        res.sendFile(path.resolve('./site/sprout-central.html'))
    } else {
        res.sendFile(path.resolve("./site/" + req.originalUrl));
    }
});


app.listen(8000, function () {
    console.log('Listening on port 8000.');
});