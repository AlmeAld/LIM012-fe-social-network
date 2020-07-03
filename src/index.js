// import { example } from './example.js';

// example();


import { changeView } from './router/index.js';
// import { firebaseInit } from './firebase-config.js';



const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
  // firebaseInit();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // /si user existe signfica que te logueaste
      // localStorage.setItem('uid', user.uid)
      window.location.has = '#/home';
    } else {
      window.location.hash = '#/';
    }
  });
};

window.addEventListener('load', init);
// window.addEventListener('hashchange', init);

// const init = () => {

//   changeView(window.location.hash);
//   window.addEventListener('hashchange', () => {
//     changeView(window.location.hash);
//   })
//   firebaseInit();
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       window.location.hash = '#/signIn'
//     } else {
//       window.location.hash = '#/home'

//     }
//   })
// }

// window.addEventListener('load', init)
