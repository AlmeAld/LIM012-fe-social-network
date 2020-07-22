import{db} from '../firebase-config.js'


//update post
// userName: displayName,
// photoURL: photo,
//imgPost// img: imgPost
export const postPrivacy =(id, status)=>{
  db.collection('posts').doc(id).update({
    postStatus: status,
  })
}
export const editPost = (id, contentPost)=>{
  db.collection('posts').doc(id).update({
    posts: contentPost,
  })
}

//create posts 
// export const createCollection = (uid, hora, displayName,contentPost,  status)=>{
//   db.collection('posts').add({
//     id:uid,
//     postHora: hora,
//     userName: displayName,
//     contentpost: contentPost,
//     postStatus: status,
//   })
// }

//get post
export const getPost = (callback) => {
  db.collection('posts')
    .orderBy('postFecha', 'desc')
    .onSnapshot((querySnapshot) => {
      let data = []
      querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        const obj ={
          id: doc.id,
          photoURL: doc.data().photoURL,
          userName:doc.data().userName,
          postHora: doc.data().postHora,
          posts: doc.data().posts,
          img: doc.data().img,
        }
        data.push(obj)
        console.log(doc.id);
      })
      callback(data);
    })
  }

  export const deletePost = (idPost) =>{
    db.collection('posts').doc(idPost).delete()
  }