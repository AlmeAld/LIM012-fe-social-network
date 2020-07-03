import { createUser } from '../src/model/auth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('createUser', () => {
  it('deberia poder iniciar sesion con email: almenaldana@gmail.com y password: Holamundo123', () => {
    createUser('almenaldana@gmail.com', 'Holamundo123')
      .then((user) => {
        expect(user.email).toBe('almenaldana@gmail.com');
      });
  });
});

// describe('createUser', () => {
//   it('deberia poder iniciar sesion con email: almenaldana@gmail.com
// y password: Holamundo123', () => {
//     createUser('almenaldana@gmail.com', 'Holamundo123')
//       .then((user) => {
//         expect(user.email).toBe('almenaldana@gmail.com');
//       });
//   });
// });
