const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser')
var mailRouter = require('./src/app/mailer/mail');

app.use(express.static(__dirname + '/dist/angular6-boiler'));
app.use(bodyParser.json());
app.use('/mailer/sendMail/',mailRouter);


app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/*', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/angular6-boiler/index.html'));
});

app.listen(process.env.PORT || 7777);


// const express = require('express');
// const http = require('http')
// const path = require('path')
// const compression = require('compression');

// const app = express();

// app.use(express.static(path.join(__dirname, '/dist/angular6-boiler')));
// app.use(compression()) //compressing dist folder 
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/dist/angular6-boiler/index.html'));
// })

// const port = process.env.PORT || '7777';
// app.set('port', port);

// const server = http.createServer(app);
// server.listen(port, () => console.log('Running at port ' + port))