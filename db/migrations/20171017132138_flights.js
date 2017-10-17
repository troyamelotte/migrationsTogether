
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flights', (table)=>{
    table.increments();
    table.integer("airline_id")
      .notNullable()
      .references("id")
      .inTable("airlines")
      .onDelete("cascade")
      .index();
    table.string("start");
    table.string("destination");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flights')
};
