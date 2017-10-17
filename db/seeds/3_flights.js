
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {airline_id: 2, start: 'PHX', destination: "LAX"},
        {airline_id: 1, start: 'PHX', destination: "JFK"},
        {airline_id: 3, start: 'LAX', destination: "DFW"}
      ]);
    });
};
