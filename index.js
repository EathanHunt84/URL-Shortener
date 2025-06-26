const express = require("express")
const path = require("path")
const {connection} = require("./connection")
const URL = require("./models/url")

const urlRoutes = require("./routes/url")
const staticRoute = require("./routes/static")
const userRoute = require("./routes/user")

const cookieParser = require("cookie-parser");
const {restrictToLoggedinUserOnly, checkAuth} = require("./middleware/auth")

const app = express()
const port = 8001

// Connect
connection("mongodb://127.0.0.1:27017/short-url")

// middlewares
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cookieParser());

//Routes
app.use("/user", userRoute)
app.use("/url", restrictToLoggedinUserOnly, urlRoutes)// inline middleware
app.use("/", checkAuth, staticRoute) // inline middleware

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.listen(port, ()=>{
    console.log("Server running on port: ", port)
})