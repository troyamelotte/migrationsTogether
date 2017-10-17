
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {flight_id: 1, user_id: 2, title: "going to mexico", description:"Just kidding going to la."},
        {flight_id: 3, user_id: 1, title: "Family vacation", description:"lets party"}
      ]);
    });
};
