const supertest = require("supertest");
const server= require("./index"); // our server won't actually start due to the if statement in index.js
/*
 Does it return the expected status code?
 Does it return the expected data format?
 Does it return the expected data?

*/

test("welcome route", async () => {
   const res = await supertest(server).get("/");  
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe("Welcome to our API");
  expect(res.type).toBe("application/json");
});


