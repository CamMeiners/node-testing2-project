const db = require('../data/db-config');
module.exports = {
  insert,
  getAll,
  getById,
};
function getAll() {
  return db('corvettes');
}

function getById(id) {
  return db('corvettes').where('id', id).first();
}

async function insert(corvette) {
  return db('corvettes')
    .insert(corvette)
    .then(([id]) => {
      return getById(id);
    });
}
