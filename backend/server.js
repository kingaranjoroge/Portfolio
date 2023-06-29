require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')

const PORT = process.env.PORT || 3500;

connectDB()

app.use(cors())

app.use(express.json())


app.use('/send-email', require('./routes/sendEmailRoute'))
app.use('/store-user-details', require('./routes/storeUserDetailsRoute'))


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
  console.log(err)
})
