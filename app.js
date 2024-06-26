const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const router = require("./src/routes/main")
const port = 8080
const uri = "mongodb+srv://admin:password00@clusterbikereview.tvk4z1o.mongodb.net/db_reviewbike?retryWrites=true&w=majority&appName=ClusterBikeReview";

const app = express()
app.use(cors()); // Use cors middleware

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json())
app.use("/", router)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})