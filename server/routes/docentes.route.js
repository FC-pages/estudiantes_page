let docentes = require('../data/docentes.json').docentes
let express = require('express');
let router = express.Router();

const bodyParser = require('body-parser');
//let mongoose = require('mongoose');

//const cors = require('cors');

router.use(bodyParser.json());

router.route('/')
  .get(function(req, res) {
    console.log("Ingresó a ruta docentes")
    res.json(docentes);
})
.options((req, res, next) => {
    res.end();
})
/*
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
router.route('/tesistas')

*/
module.exports = router;
