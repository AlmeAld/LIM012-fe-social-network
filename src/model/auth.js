// import {  } from '../view/sign-in.js'

//crear una cuenta
export const createUser = (email, password, Name)=>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(result=>{
    console.log('cuenta creada')
    // result.user.updateProfile({
    //   displayName : Name
    // })
    // const configuracion = {
    //   url: 'http://localhost:5001/#/signIn'
    // }
    
    result.user.sendEmailVerification().catch(error => {
      console.error(error)
      const errorMessage = error.message; 
    })
  })//then

  .catch(error => {
    console.log('no se pudo crear una cuenta');
    var errorCode = error.code;// Handle Errors here.
    console.log(errorCode);//error en email
    var errorMessage = error.message; 
    console.log(errorMessage);
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
  });
}

export const login = (emailLogin, passwordLogin)=>{
  firebase.auth().signInWithEmailAndPassword(emailLogin,passwordLogin)
    .then((userLogin)=>console.log('estoy logeado weeey'))
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      // console.log(errorCode);
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
}

export const currentUser = ()=>{firebase.auth().currentUser}


