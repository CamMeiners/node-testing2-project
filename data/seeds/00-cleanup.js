const corvettes = [
  { year: '2023', model: 'Z07', color: 'Red' },
  { year: '1972', model: 'Stingray', color: 'Red' },
  { year: '2019', model: 'Z51', color: 'Silver' },
  { year: '2017', model: 'Z06', color: 'White' },
];

exports.seed = function (knex, Promise) {
  return knex('corvettes')
    .truncate()
    .then(function () {
      return knex('corvettes').insert(corvettes);
    });
};

exports.corvettes = corvettes;
