const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(
    "mongodb+srv://" + process.env.OWNER + ":" + process.env.DATABASE + "@hrnet.tt4nhhs.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) console.log("Mongo DB connected")
        else console.log('Connection error',err)
    }
)