const request = require('supertest');
const app = require('../server/app');

// eslint-disable-next-line no-undef
test('test post endpoint', (done) => {
  request(app)
    .post('/api/v1/post')
    .send({ category: 'husam', image: 'husam', content: 'kamal' })
    .end((err,res) => {
      console.log(err);
      if (err) return done(err);
      console.log(res.body);
      expect(res.statusCode).toEqual(200);
      expect(res.body.data).toEqual({ category: 'husam', image: 'husam', content: 'kamal' });
      return done();
    });
});
