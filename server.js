import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import db from './config/db';
import api from './src/api';

//import GridFsStorage Çfrom 'multer-gridfs-storage';
//import Grid  from 'gridfs-stream';
//import multer from 'multer';

//var mongoUtil = require( './src/api/mongoUtil' );

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', api());

//Point static path to dist
app.use(express.static(path.join(__dirname, 'public')));

//mongo db connection ======================================
mongoose.Promise = global.Promise;
mongoose.connect(db.url).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

// mongoUtil.connectToServer( function( err ) {
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// } );

//listen (start app with node server.js) ======================================
app.listen(port);
console.log("Server listening on port " + port);

// working fine above code on firebase

// import studentRoutes from './expressRoutes/routes';
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const path = require('path');
// const mongoose = require('mongoose');
// const config = require('./config/DB');
// const api = require('./src/resources');
// const studentRoutes = require('./expressRoutes/routes');

// import http from 'http';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import api from './src/resources';
// import logger from 'morgan';
// import mongoose from 'mongoose';
// import path from 'path';
// import studentRoutes from './expressRoutes/routes';

// // import db from './db';
// // var debug = require('debug')('mean-app:server');

// const app = express();
// const port = process.env.PORT || 4000;

// app.server = http.createServer(app);

// app.use(logger('dev'));
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use('/', express.static('public'));

// //Mongo db connection ======================================
// // db( _ => {
// app.use('/api', api());
// app.use('/students', studentRoutes);
// 	// app.server.listen(port);
// // });

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://user1:welcome01@ds127342.mlab.com:27342/sspou');

// app.listen(port, function(){
// console.log('Listening on port ' + port);
// });

//listen (start app with node server.js) =====================================

// app.set('port', port);
// var server = createServer(app);

// server.listen(port);
// server.on('error', onError);
// server.on('listening', onListening);

// function onError(error) {
//   if (error.syscall !== 'listen') {
//     throw error;
//   }

//   var bind = typeof port === 'string'
//     ? 'Pipe ' + port
//     : 'Port ' + port;

//   // handle specific listen errors with friendly messages
//   switch (error.code) {
//     case 'EACCES':
//       console.error(bind + ' requires elevated privileges');
//       process.exit(1);
//       break;
//     case 'EADDRINUSE':
//       console.error(bind + ' is already in use');
//       process.exit(1);
//       break;
//     default:
//       throw error;
//   }
// }

// /**
//  * Event listener for HTTP server "listening" event.
//  */

// function onListening() {
//   var addr = server.address();
//   var bind = typeof addr === 'string'
//     ? 'pipe ' + addr
//     : 'port ' + addr.port;
//   debug('Listening on ' + bind);
// }


// router.get('/', function(req, res, next) {
//   res.send('Express REST API');
// });
//Point static path to dist
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/api', routes);
// require('./expressRoutes/routes');

//generic below -----------

// import http from 'http';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import db from './db';
// import api from './resources';
// import path from 'path';


// var app = express();
// const port = process.env.PORT || 4000;

// app.server = http.createServer(app);

// app.use(cors({
// 	exposedHeaders: ['Link']
// }));

// app.use(bodyParser.json({
// 	limit : '100kb'
// }));

// db( _ => {
// 	app.use('/', api());
//     app.server.listen(port);
// });

// app.use(express.static(path.join(__dirname, 'public')));

// var logger = require('morgan');
// var debug = require('debug')('mean-app:server');
// app.use(logger('dev'));

// export default app;

//generic above -----------


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

// // Get dependencies
// const express = require('express');
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');

// // Get our API routes
// const api = require('./server/routes/api');

// const app = express();

// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// // Set our api routes
// app.use('/api', api);

// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// /**
//  * Get port from environment and store in Express.
//  */
// const port = process.env.PORT || '3000';
// app.set('port', port);

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API running on localhost:${port}`));
