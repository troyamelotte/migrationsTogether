
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airlines').del()
    .then(function () {
      // Inserts seed entries
      return knex('airlines').insert([
        {name: 'Southwest', description:"not fun but affordable"},
        {name: 'Jet blue', description:"our planes our actually white usually"},
        {name: 'United', description:"It probably wont happen to you"}
      ]);
    });
};
