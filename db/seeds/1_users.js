
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'asdfasdf', email: "asdf@asdf.asdf", password:"asdfasdf"},
        {name: 'Teresa', email: "Teresa@a.com", password:"password"}
      ]);
    });
};
