exports.up = function (knex) {
  return knex.schema.createTable('corvettes', (tbl) => {
    tbl.increments();
    tbl.string('year', 6).notNullable();
    tbl.string('model', 255).notNullable();
    tbl.string('color', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('corvettes');
};
