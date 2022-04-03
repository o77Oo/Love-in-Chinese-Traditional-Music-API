const express = require('express');
const router = express.Router();
const fs = require('fs');



router.get('/', (req, res) => {
  fs.readFile('./data/instruments.json',  (err, data) => {
    const instrumentsData = JSON.parse(data);
    res.json(instrumentsData);
  });
});


module.exports = router;