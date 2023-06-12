let express = require('express');
let app = express();
let path = require('path');
let injectHTML = require('./modules/html-injector.js')['injectHTML'];

app.use(express.static(__dirname + '/site'));

app.get('/', function (req, res) {
    
    if (req.originalUrl == '/') {
        p = path.resolve('./site/sprout-central.html');

        res.send(injectHTML(p));
        return;
    } 
        
    res.sendFile(path.resolve("./site/" + req.originalUrl));
    return;
});


app.listen(8000, function () {
    console.log('Listening on port 8000.');
});