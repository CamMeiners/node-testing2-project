const request = require('supertest');
const db = require('../data/db-config');
const server = require('../server');
const Corvette = require('./corvettesModel');

const corvette1 = { year: '2005', model: 'base', color: 'black' };

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});
describe('sanity check', () => {
  test('sanity check', async () => {
    const bruh = 1 + 1;
    expect(bruh).toBe(2);
  });
});

describe('corvette functions', () => {
  let data;
  beforeEach(async () => {
    data = await Corvette.getAll();
  });

  test('responds with all the corvettes', async () => {
    expect(data.length).toBe(4);
    expect(data).toHaveLength(4);
  });
  test('adds a corvette', async () => {
    let corvettes;
    await Corvette.insert(corvette1);
    corvettes = await db('corvettes');
    expect(corvettes).toHaveLength(5);
  });
});
describe('getById()', () => {
  test('returns the correct corvette', async () => {
    const car = await Corvette.getById('9');
    expect(car).toMatchObject({ id: 9, color: 'Red' });
  });
});
