const express = require("express")
const URL = require("../models/url")
const router = express.Router()

router.get("/", async (req, res)=>{
    if(!req.user) return res.redirect("/login")
    const userUrl = await URL.find({createdBy:req.user._id})
    res.render("home",{
        urls: userUrl
    })
})

router.get("/signup",(req, res)=>{
    return res.render("signup")
})

router.get("/login", (req, res)=>{
    return res.render("login")
})

router.get("/:shortId",async (req, res)=>{
    const shortID = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
        shortID, // Is actually JavaScript shorthand for: { shortID: shortID }
        }, 
        {$push:{visitHistory: {timestamp: new Date().toLocaleString()}}},
        {new:true}
    )

    if (!entry) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURl)
})

module.exports = router