// Your web app's Firebase configuration
// export const firebaseInit = () => {
//   const firebaseConfig = {
//     apiKey: 'AIzaSyC-QYMoP1B_uLO9yC5rTZiYjCTWXIvnNaQ',
//     authDomain: 'tripventure-312d5.firebaseapp.com',
//     databaseURL: 'https://tripventure-312d5.firebaseio.com',
//     projectId: 'tripventure-312d5',
//     storageBucket: 'tripventure-312d5.appspot.com',
//     messagingSenderId: '943591452341',
//     appId: '1:943591452341:web:ca70304a60a163ba1a98fc',
//     measurementId: 'G-KK0BCSQFGG',
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// };
  const firebaseConfig = {
    apiKey: 'AIzaSyC-QYMoP1B_uLO9yC5rTZiYjCTWXIvnNaQ',
    authDomain: 'tripventure-312d5.firebaseapp.com',
    databaseURL: 'https://tripventure-312d5.firebaseio.com',
    projectId: 'tripventure-312d5',
    storageBucket: 'tripventure-312d5.appspot.com',
    messagingSenderId: '943591452341',
    appId: '1:943591452341:web:ca70304a60a163ba1a98fc',
    measurementId: 'G-KK0BCSQFGG',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  // firebase.analytics();
