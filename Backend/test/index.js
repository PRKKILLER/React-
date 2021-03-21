/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.should();
chai.use(chaiHttp);

// const apiHost = 'http://localhost';
// const apiPort = '3001';
// const apiURL = `${apiHost}:${apiPort}`;

describe('Ping server', () => {
  it('It should get response from server', (done) => {
    chai.request(server)
      .get('/user/pingServer')
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        done();
      });
  });
});

describe('Test Login', () => {
  it('It should get user data', (done) => {
    chai.request(server)
      .post('/user/login')
      .send({ email: 'yash@gmail.com', password: 'yash123' })
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('user').property('email').eq('yash@gmail.com');
        done();
      });
  });
});

describe('Test register', () => {
  it('It should create user data', (done) => {
    chai.request(server)
      .post('/user/register')
      .send({ email: 'chinmay1@gmail.com', password: 'chinmay123', name: 'Chinmay' })
      .end((err, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('user').property('email').eq('chinmay1@gmail.com');
        done();
      });
  });
});

describe('Update user profile', () => {
  it('It should update user data', (done) => {
    chai.request(server)
      .post('/user/updateUserDetails')
      .send({ userID: '194c8d30-8948-11eb-b665-d3ac8bea5ee1', updateData: { name: 'Yash Gupte' } })
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        done();
      });
  });
});

describe('Login on wrong credentials', () => {
  it('It should give user not found error', (done) => {
    chai.request(server)
      .post('/user/login')
      .send({ email: 'yash', password: 'yash123' })
      .end((err, response) => {
        response.should.have.status(404);
        response.body.should.be.a('object');
        response.body.should.have.property('errors').property('body').eq('User not found');
        done();
      });
  });
});

// it('Test server status', (done) => {
//   chai
//     .request(apiURL)
//     .get('/user/pingServer')
//     .send()
//     .end((err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.text).to.equal('Ping to Splitwise API succesful');
//       done();
//     });
// });

// describe('Check login', () => {
//   chai
//     .request(apiURL)
//     .post('/user/login')
//     .send({ email: 'yash@gmail.com', password: 'yash123' })
//     .end((err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.body.user.name).to.equal('Yash');
//       done();
//     });
// });

// it('Check register', (done) => {
//   chai.request(apiURL)
//     .post('/user/register')
//     .send({ email: 'chinmay@gmail.com', password: 'chinmay123', name: 'Chinmay' })
//     .end((err, res) => {
//       expect(res).to.have.status(201);
//       expect(res.body.user.email).to.equal('chinmay@gmail.com');
//       done();
//     });
// });

// it('Check register', (done) => {
//   chai.request(apiURL)
//     .post('/user/updateUserDetails')
//     .send({ userID: 'cc36de00-8957-11eb-bde9-d3239cd2e332', updateData: { name: 'DevD' } })
//     .end((err, res) => {
//       expect(res).to.have.status(200);
//       expect(res.body).to.equal('User updated successfully!');
//       done();
//     });