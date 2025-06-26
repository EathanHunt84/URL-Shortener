const express = require("express")
const {handelGenerateNewShortUrl, handelGetAnalytics, handelGetAllUrls} = require("../controllers/url")

const router = express.Router()

router.post("/", handelGenerateNewShortUrl)
router.get("/analytics/:shortId", handelGetAnalytics)
router.get("/analytics", handelGetAllUrls)


module.exports = router