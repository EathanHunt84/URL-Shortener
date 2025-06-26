const shortid = require("shortid")
const URL = require("../models/url")

async function handelGenerateNewShortUrl(req, res){
    const body = req.body
    if(!body.url){return res.status(404).json({"Error": "URL is required"})}
    const shortId = shortid()
    await URL.create({
        shortID: shortId,
        redirectURl: body.url,
        visitHistory: [],
        createdBy: req.user._id // req user is comming from the inline middleware
    })

    return res.render("home", {id: shortId})
}

async function handelGetAnalytics(req, res){
    const shortId = req.params.shortId
    const result = await URL.findOne({shortID : shortId})
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics : result.visitHistory
    })
}

async function handelGetAllUrls(req, res){
    const allURL = await URL.find({})
    return res.render("url", {
        urls: allURL
    })
}

module.exports = {
    handelGenerateNewShortUrl,
    handelGetAnalytics,
    handelGetAllUrls,
}