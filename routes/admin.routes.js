const { isLoggedIn, checkRoles } = require("../middlewares");
const User = require("../models/User.model")
const { isAdmin } = require("../utils")

const router = require("express").Router();

/* GET home page */
router.get("/panel", isLoggedIn, checkRoles("ADMIN", "EDITOR"), (req, res, next) => {

  User.find()
    .then(allUsers => res.render("admin/admin-page",
      {
        loggedUser: req.session.currentUser,
        allUsers,
        isAdmin: isAdmin(req.session.currentUser)
      }))


});




module.exports = router;
