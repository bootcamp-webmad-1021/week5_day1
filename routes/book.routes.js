const { capitalizeText, checkMongoID, isOwner } = require("../utils");
const { isLoggedIn, checkRoles } = require("../middlewares")
const Book = require("../models/Book.model")
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {

  Book.find()
    .then(allBooks => res.render("books/book-list", { allBooks }))
    .catch(err => console.log(err))

});

////Crear
router.get("/crear", (req, res) => res.render("books/book-create"))


router.post("/crear", (req, res) => {
  const { title, description, author, rating } = req.body

  const capitalizedTitle = capitalizeText(title)

  Book.create({ title: capitalizedTitle, description, author, rating, isOwner: req.session.currentUser._id })
    .then(createdBook => res.redirect("/libros"))
    .catch(err => console.log(err))
})


////Editar
router.get("/editar/:id", isLoggedIn, (req, res) => {
  const { id } = req.params

  Book.findById(id)
    .then(book => res.render("books/book-edit", book))
    .catch(err => console.log(err))

})

router.post("/editar/:id", isLoggedIn, (req, res) => {
  const { id } = req.params
  const { title, description, author, rating } = req.body

  Book.findByIdAndUpdate(id, { title, description, author, rating }, { new: true })
    .then(book => res.redirect(`/libros/detalles/${book._id}`))
    .catch(err => console.log(err))
})


////Detalles
router.get("/detalles/:id", (req, res) => {
  const { id } = req.params

  if (!checkMongoID(id)) {
    res.render("books/details-page", { errorMessage: "Este libro no existe en la DB" })
  }


  Book.findById(id)
    .then(book => {

      const isOwn = isOwner(book, req.session.currentUser)

      res.render("books/details-page", { book, isOwn })
    })
    .catch(err => console.log(err))

})

module.exports = router;











