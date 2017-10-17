
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', (table)=>{
    table.increments();
    table.integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade")
      .index();

    table.integer("flight_id")
      .notNullable()
      .references("id")
      .inTable("flights")
      .onDelete("cascade")
      .index();

    table.string("title");
    table.string("description");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips')
};
