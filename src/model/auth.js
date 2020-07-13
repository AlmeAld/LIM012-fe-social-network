// import {  } from '../view/sign-in.js'


//crear una cuenta
export const createUser = (email, password, Name)=>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(result=>{
    console.log('cuenta creada')
    result.user.updateProfile({
      displayName : Name
    })
    const configuracion = {
      url: 'http://localhost:5000/#/signIn'
    }
    
    result.user.sendEmailVerification(configuracion).catch(error => {
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

//login
export const login = (emailLogin, passwordLogin)=>{
  firebase.auth().signInWithEmailAndPassword(emailLogin,passwordLogin)
    .then((userLogin)=>{
      console.log(userLogin);
      window.location.hash = '#/home'
      console.log('estoy logeado weeey')
      console.log(userLogin);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
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





