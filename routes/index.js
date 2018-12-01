var express = require('express');
const mongoose =require('mongoose')
var router = express.Router();


const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
  console.log('mongo connect success')
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
