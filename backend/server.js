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


app.use('/email', require('./routes/emailRoute'))
app.use('/users', require('./routes/usersRoute'))


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
  console.log(err)
})
