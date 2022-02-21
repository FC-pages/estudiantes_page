const path = require("path");
const cookieParser = require('cookie-parser');
const express = require("express");
const config = require('config');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express(); // create express app
const port = config.get('server.port');
const host = config.get('server.host');

//const { mongoose } = require('./database');  Instancia la base de datos

// Instanciamos las Rutas
let tesistasRouter = require('./routes/tesistas.route');
let docentesRouter = require('./routes/docentes.route');

// Morgan
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


// Rutas
app.use('/api/tesistas', tesistasRouter);
app.use('/api/docentes', docentesRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});



