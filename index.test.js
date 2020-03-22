const supertest = require("supertest");
const server= require("./index"); // our server won't actually start due to the if statement in index.js
cosnt db = require("./data/config");
/*
 Does it return the expected status code?
 Does it return the expected data format?
 Does it return the expected data?

*/
beforeEach(async () => {
   await db.seed.run();
});

test("welcome route", async () => {
   const res = await supertest(server).get("/");  
  expect(res.statusCode).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe("Welcome to our API");
  expect(res.body.message).toHaveLength(18);
  expect(res.body.message).toMatch(/welcome/i);
});

test("create a new hobbit route", async () => {
     const res = await supertest(server).post("/hobbits").send({name:"apple"});
     expect(res.statusCode).toBe(201);
     expect(res.type).toBe("application/json");
     expect(res.body.name).toBe("apple");
});


