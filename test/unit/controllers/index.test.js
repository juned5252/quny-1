var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../../../src/app');

chai.use(chaiHttp);

describe('Index Route', function () {
  it('should exist', function (done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
