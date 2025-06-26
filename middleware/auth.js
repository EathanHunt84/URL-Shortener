// middleware/auth.js
const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  // const userUid = req.headers["authorization"];
  const userUid = req.cookies.uid
  if (!userUid) {
    return res.redirect("/login"); // No cookie found
  }
  // const token = userUid.split("Bearer ")[1]
  const user = getUser(userUid);
  if (!user) {
    return res.redirect("/login"); // Session not found
  }

  req.user = user;
  next();
}

async function checkAuth(req, res, next){
  // const userUid = req.headers["authorization"];
  const userUid = req.cookies.uid
  // const token = userUid.split("Bearer ")[1]
  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};
