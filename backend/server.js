const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const routes = require('./routes/contactRoute');
const cors = require('cors');
dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/contact', routes)

app.listen(3000, () =>{
  console.log("Server is running on port 3000");
})