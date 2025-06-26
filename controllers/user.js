const User = require("../models/user")
const {v4: uuidv4} = require("uuid")
const {setUser, getUser} = require("../service/auth")

async function handelUserSignUp(req, res){
    const {name, email, password} = req.body
    await User.create({
        name,
        email,
        password
    })

    return res.redirect("/")
}

async function handelUserLogin(req,res){
    const {email, password} = req.body
    const user = await User.findOne({email, password})
    if(!user) return res.render("login", {
        error : "invalid username or password"
    })

    const token = setUser(user)
    res.cookie("uid", token,{
        // domain: "www.google.com"
    }) // this cookie will be hadeled by middleware
    return res.redirect("/")
    // res.json({token})
}



module.exports = {
    handelUserSignUp,
    handelUserLogin,
}