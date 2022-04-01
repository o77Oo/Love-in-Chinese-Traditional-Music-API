const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');



router.post("/", (req, res) => {
    // read JSON file
    fs.readFile("./data/customer.json", 'utf8', (err, data) => {
console.log(err)
console.log(data)
const customerData = JSON.parse(data);
      const newComment = {
        id: uuidv4(), // creating unique id
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailaddress: req.body.emailaddress,
        address: req.body.address,
        phonenumber:req.body.phonenumber,
        postalcode:req.body.postalcode,
        province:req.body.province,
        comments: req.body.comments,

        
      };
      // push new object to local array
      customerData.push(newComment);
     
      // write data back to JSON file
      fs.writeFile("./data/customer.json", JSON.stringify(customerData), () => {
        res.json({ message: 'data written to file', data: newComment });
      });
    });
  });
  
  
  
  module.exports = router;