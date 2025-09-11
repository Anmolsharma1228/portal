const express = require('express');
const contactModel = require('../models/contact');
const router = express.Router();

//create a new contact
router.post('/contactinfo', async (req, res) =>{
  try{
 const newContact = new contactModel(req.body);
 await newContact.save();
 res.status(200).json(newContact);
  }catch(err){
    res.status(400).json({message: err.message});
  }
})

module.exports = router;