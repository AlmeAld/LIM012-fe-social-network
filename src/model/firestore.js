
//creando el documento para los usuarios
export const infoUser = (user)=>{
  const db = firebase.firestore();
  db.collection('usuarios').doc(user.email).set({
    userEmail: user.email,
    userName: user.displayName,
    urlPhoto: user.photoURL,
  });
}