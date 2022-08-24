const request = require('supertest');
const app = require('../server/app');
const dbBuild = require('../server/database/config/build');
const connection = require('../server/database/config/connection');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

test('test post endpoint', (done) => {
  request(app)
    .post('/api/v1/post')
    .send({ category: 'husam', image: 'husam', content: 'kamal' })
    .end((err, res) => {
      if (err) return done(err);

      expect(res.statusCode).toEqual(200);
      expect(res.body.data[0]).toEqual({
        id: 5, category: 'husam', image: 'kamal', content: 'husam',
      });
      return done();
    });
});
