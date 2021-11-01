const { app } = require("../src/server");
const request = require("supertest");
const serverRequest = request(app);

describe("API routes", () => {
  test("home route | Prof of life ", async () => {
    const res = await serverRequest.get("/");
    expect(res.status).toBe(200);
  });

  test("should return 404 states and respond with proper message", async () => {
    const response = await serverRequest.get("/no page with this rout");
    expect(response.status).toBe(404);
    expect(response.text).toMatch("404 NOT FOUND");
  });

  test("user made a mistake 500", async () => {
    const res = await serverRequest.get("/error");
    expect(res.status).toBe(500);
    expect(res.body.errMessage).toMatch("You made an Error 🛑❗");
  });

  test("should send an object contain { name:ahmad }", async () => {
    const res = await serverRequest.get("/person?name=ahmad");
    expect(res.body.name).toMatch("ahmad");
  });
  test("should send an error with status of 500 if name query is not attache", async () => {
    const res = await serverRequest.get("/person");
    expect(res.body.errMessage).toMatch(`must attach the "name" query`);
  });
});
