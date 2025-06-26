const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
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
        type : [{timestamp:{type:String}}]
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
}, {timestamps:true})

const URL = mongoose.model("url", urlSchema)

module.exports = URL