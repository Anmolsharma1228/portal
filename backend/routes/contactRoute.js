const express = require("express");
const Contact = require("../models/contact");
const router = express.Router();

router.post("/contactinfo", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ success: true, data: newContact });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
