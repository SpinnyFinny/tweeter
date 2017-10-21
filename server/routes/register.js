const express = require('express');
const registerRoutes = express.Router();

module.exports = function(DataHelpers) {
  
  registerRoutes.post("/", function(req, res) {
    const {email, password} = req.body;
    if(email.trim() === '' || password.trim() === '') {
      res.status(400).json({ error: 'Invalid email/password'});
      return;
    }
    //if (userisalreadyregisteredorsomethig)
    const newUser = {
      email,
      password
    }

    DataHelpers.registerNewUser(newUser, function(err, newUser) {
      if(err) {
        res.status(500).json({ error: err});
      } else {
        res.redirect("/");
      }
    });
  
  });
  
  return registerRoutes;

}   
  
  
