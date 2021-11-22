const request = require("supertest");
const app = require("../app");

describe("GET requests to nonexistent pages ", () => {
  test("It should respond with a 404", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(404);
  });

  test("It should respond with a 404", async () => {
    const response = await request(app).get("/test");
    expect(response.statusCode).toBe(404);
  });
});

describe("GET request to /lookup/:domain endpoint ", () => {
  test("It should respond with WHOIS information about the valid domain", async () => {
    const response = await request(app).get("/lookup/google.com");
    expect(response.statusCode).toBe(200);
    console.log(response.body);
  });

  test("It should send an empty response", async () => {
    const response = await request(app).get("/lookup/invalid");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({});
  });
});