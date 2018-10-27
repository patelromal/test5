const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      studentRoutes = require('./expressRoutes/studentRoutes');

//const http = require('http');
//const Student = require('./models/Student');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/students', studentRoutes);

//Point static path to dist
//app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

//Mongo db connection ======================================
mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

//listen (start app with node server.js) ======================================
const port = process.env.PORT || 4000;
app.listen(port);
console.log("App listening on port 4000");

//original ->
//const express = require('express'),
//path = require('path'),
//bodyParser = require('body-parser'),
//cors = require('cors'),
//mongoose = require('mongoose'),
//config = require('./config/DB'),
//studentRoutes = require('./expressRoutes/studentRoutes');
//
//mongoose.Promise = global.Promise;
//mongoose.connect(config.DB).then(
//() => {console.log('Database is connected') },
//err => { console.log('Can not connect to the database'+ err)}
//);
//
//const app = express();
//app.use(bodyParser.json());
//app.use(cors());
//const port = process.env.PORT || 3000;
//
//app.use('/students', studentRoutes);
//
//const server = app.listen(port, function(){
//console.log('Listening on port ' + port);
//});