const { get } = require("express/lib/response");
const router = require("../users/UsersController");

function adminAuth(req, res, next) {
    if(req.session.user != undefined){
        next();
    } else {
        res.redirect("/login");
    }
}

router.get("/logout", (req,res) => {
    req.session.user = undefined;
    res.redirect("/");
})
module.exports = adminAuth