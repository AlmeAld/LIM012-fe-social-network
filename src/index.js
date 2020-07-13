// import { example } from './example.js';

// example();


import { changeView } from './router/index.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.location.hash = '#/home';
    } else {
      window.location.hash = '#/';
    }
  });
};

window.addEventListener('load', init);
