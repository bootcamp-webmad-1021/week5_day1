module.exports = (app) => {
  // const index = require("./base.routes");
  // app.use("/", index);

  app.use("/", require("./base.routes"))
  app.use("/", require("./auth.routes"))
  app.use("/", require("./user.routes"))
  app.use("/libros", require("./book.routes"))
  app.use("/admin", require("./admin.routes"))
}