const express = require("express")
const cors = require('cors');
require('dotenv').config();
const mongoose = require("mongoose")
const router = require("./src/routes/main")
const port = 8080

const app = express()
app.use(cors()); // Use cors middleware

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json())
app.use("/api", router)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

module.exports = app