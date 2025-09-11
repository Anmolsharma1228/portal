//mongodb schema
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name:{
    type: String,
    // required: true
  },
  email:{
    type: String,
    // required: true
  },
  number:{
    type: Number,
    // required: true
  },
  message:{
    type: String,
    // required: true
  }
})

const contact = mongoose.model("contactdata", contactSchema);
module.exports = contact;