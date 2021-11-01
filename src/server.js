const express = require("express");
const app = express();
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const nameValidator = require("./middleware/validator");
app.use(express.json());
app.use(logger);

app.get("/", (_, res, next) => {
  res.send("welcome");
});
app.get("/error", (_, __, next) => {
  next(new Error("You made an Error 🛑❗"));
});
app.get("/person", nameValidator, (req, res) => {
  res.json({ name: req.query.name });
});
app.use(errorHandler);
app.use("*", notFoundHandler);
const start = (port) => {
  app.listen(port, () => console.log(`listening to ${port}`));
};
module.exports = {
  app,
  start,
};
