module.exports = {
  isLoggedIn: (req, res, next) => {
    req.session.currentUser ? next() : res.render("auth/login-page", { errorMessage: "Has de estar logueado para ver este contenido" })
  },


  checkRoles: (...roles) => (req, res, next) => {
    roles.includes(req.session.currentUser.role) ? next() : res.status(401).render("auth/login-page", { errorMessage: "No tienes los permisos adecuados" })
  }

  /////////   Alternativas  ////////
  // isLoggedIn: (req, res, next) => {
  // if (req.session.currentUser) {
  //   next()
  // } else {
  //   res.render("auth/login-page", { errorMessage: "Has de estar logueado para ver este contenido" })
  // }
  // }
  // isAdmin: (req, res, next) => {
  //   req.session.currentUser.role === "ADMIN" ? next() : res.render("auth/login-page", { errorMessage: "Has de ser administrador para ver este contenido" })
  // },
}