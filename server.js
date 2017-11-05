var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express();
var port = 3000;

app.use(serveStatic(path.join(__dirname, 'dist')));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server started on port ${port}`))