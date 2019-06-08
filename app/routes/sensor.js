var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  const sensor = req.body;
  console.log(sensor);
  const response = {
    success: true,
    data: sensor,
  }
  res.json(response);

});

module.exports = router;
