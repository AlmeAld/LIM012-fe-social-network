import{db} from '../firebase-config.js'

//update post
export const postPrivacy =(id, status)=>{
  db.collection('posts').doc(id).update({
    postStatus: status,
  })
}

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
        }
        data.push(obj)
      })
      callback(data);
      // console.log(data);
    })
  }

  export const deletePost = (idPost) =>{
    db.collection('posts').doc(idPost).delete()
  }