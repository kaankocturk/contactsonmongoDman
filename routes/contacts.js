var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./contacts.json', function(err, data) {
    if (err) throw err;
    var arr = JSON.parse(data);
    res.send(arr);
  });
});

router.post('/', function(req,res){
  fs.readFile('./contacts.json', function(err, data) {
    if (err) throw err;
    arr = JSON.parse(data);
    console.log(req.body.remindex);
    if(!req.body.remindex){
      arr.push({name: req.body.name, number: req.body.number, email: req.body.email});
      fs.writeFile('./contacts.json', JSON.stringify(arr), function(err) {
        if (err) throw err;
      });
      console.log('arr : ',arr)
      res.send(arr);
    }
    else{
      arr.splice(req.body.remindex,1,'removed');
      fs.writeFile('./contacts.json', JSON.stringify(arr), function(err) {
        if (err) throw err;
      });
      res.send('bravo son!')
    }
  });
});

module.exports = router;
