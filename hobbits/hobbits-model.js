const db = require("../data/config")

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
}

async function insert(hobbit) {
  const [id] = await db("hobbits").insert(hobbit);
  return await db("hobbits").where("id", id).first();
}

async function update(id, changes) {
  await db("hobbits").where({id}).update(changes);
  return findById(id);

}

async function remove(id) {
  return await db("hobbits").where("id", id).del();
}

function getAll() {
  return db("hobbits")
}

async function findById(id) {
  return db("hobbits").where("id", id).first();
}
