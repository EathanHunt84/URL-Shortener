const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 8001

mongoose.connect("mongodb://127.0.0.1:27017/url-shortener").
then(()=>{
    console.log("mongoose connected")
}).catch((err)=>{
    console.log("Error: ", err)
})

const userSchema = new mongoose.Schema({
    shortID:{
        type: String,
        require: true,
        unique: true
    },
    redirectURl: {
        type: String,
        require: true
    },
    visitHistory:{
        type : [{timestamp:{type:Number}}]
    }
}, {timestamps:true})

const Users = mongoose.model("user", userSchema)

app.use(express.urlencoded({extended : false}))

app.listen(port, ()=>{
    console.log("Server running on port: ", port)
})