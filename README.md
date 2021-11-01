# basic-express-server

## Links

- heroku: [jallad-basic-express-server](https://jallad-basic-express-server.herokuapp.com/)
- github repo: [basic-express-server](https://github.com/Ahmadjlallad/basic-express-server)
- latest PR: [PR](https://github.com/Ahmadjlallad/basic-express-server/pull/1)
- Github actions: [actions](https://github.com/Ahmadjlallad/basic-express-server/actions)

## express with basic routes and unit testing

---

## progress

- [x] create a basic express server
- [x] create a route to handle the request
- [x] create middleware
  - [x] create 404 notFound handler
  - [x] create 500 error handler
  - [x] create logger to log requests to console
  - [x] create validation middleware to validate request query params
- [x] create a test unit to test the server

---

## Documentation

UML Reference
![process/data flow](./assets/class2.drawio.png)
![notes](./assets/notes.png)

---

## JSDoc

```js
const { Request, Response, NextFunction } = require("express");

/**
 * @function validate
 * a middleware function of express
 * validate if the request object has a property named 'name' on the query object
 * Takes 3 armaments
 * @param   {request} req the first object of the request
 * @param   {response} res the second object of the response
 * @param {next} next the third next function of express
 */

const validate = (req, res, next) => {
  if (req.query.name) next();
  else next(new Error(`must attach the "name" query`));
};
/**
 * @function logger
 * logger is a express middleware function use to log on every request
 * log time of the request
 * PATH, METHOD, BODY if present and query if there is query presented
 * @param   {Request} req the first object of the request
 * @param   {Response} _ the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const logger = (req, _, next) => {
  const time = new Date();
  console.log(
    `LOG AT: ${time.getHours()}:${time.getMinutes()}\nPATH: ${
      req.path
    }\nMETHOD: ${req.method}\nbody?: ${
      req.method === "GET" ? null : JSON.stringify(req.body)
    }\nquery?: ${JSON.stringify(req.query)}`
  );
  next();
};

/**
 * @function errorHandler
 * express middleware handel the error if the user did a mistake or cues any problem
 * @param   {ErrorEvent} err the first object of the request
 * @param   {Request} req the first object of the request
 * @param   {Response} _ the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const errorHandler = (err, _, res, next) => {
  if (err) {
    res.status(500).json({
      status: 500,
      errMessage: err.message,
    });
  } else next();
};

/**
 * @function notFoundHandler
 * its a express middleware use to send a 404 and not found message
 * when the clint try to access a unknown route
 * @param   {ErrorEvent} err the first object of the request
 * @param   {Request} req the first object of the request
 * @param   {Response} _ the second object of the response
 * @param {NextFunction} next the third next function of express
 */
const notFoundHandler = (req, res) => {
  res.status(404).send("404 NOT FOUND");
};
```
