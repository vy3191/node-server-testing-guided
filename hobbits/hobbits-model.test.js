const hobbitsModel = require("./hobbits-model");
const db = require("../data/config");

beforeEach( async() => {
   await db.seed.run();
})

test("It should insert an object with name property", async () => {
      const res = await hobbitsModel.insert({name:"rana"});
      expect(res.name).toBe("rana");
});

test("It should find the name with the given ID", async () => {
     const res = await hobbitsModel.findById(1);
     expect(res.name).toBe("sam");
});

test("It should update the existing object's name with no errors", async () => {
     const res = await hobbitsModel.update(1, {name:"mayuri"});
     expect(res.name).toBe("mayuri");
});

test("It should delete the existing object", async () => {
    const res = await hobbitsModel.remove(1);
    const hb = await db("hobbits").select();
    expect(hb).toHaveLength(3);
});