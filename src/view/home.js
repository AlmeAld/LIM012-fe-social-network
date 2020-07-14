// import { postsCreated } from './posts.js'
import { db} from '../firebase-config.js'

export default () => {
  const viewHome = document.createElement('div');
  // viewHome.id ='main-section'
  viewHome.classList.add('menu');
  viewHome.innerHTML = `
    <div class="header-home">
      <p class="title home-title">Tripventure</p>
    </div>
    <section class='body-content'>

      <div class='publication'>
        <button class= 'btn-modal-toPost>'
          <i class="fas fa-ellipsis-h"></i>
        </button>
        <div class='option-privacity'>
          <i class="fas fa-globe-americas"> Público</i>
          <i class="fas fa-lock">Privado</i> 
        </div>
        <textarea placeholder='¿Qué estás pensando?' cols='20' class = 'textarea'> </textarea>
        <button class = 'post btn-img'>
          <i class="far fa-image fa-lg"></i>
        </button>
        <button class = 'post btn-send'>
          <i class="far fa-paper-plane fa-lg"></i>
        </button>
      </div>

      <div class = 'posts-main'>
      </div>

      </div>
    </section>
    <nav class="nav">
      <a href="#/home" class="nav-link">
        <i class="fas fa-home nav-icon"></i>
        <span class="nav-text">Home</span>
      </a>
      <a href="#/perfil" class="nav-link">
        <i class="fas fa-user nav-icon"></i>
        <span class="nav-text">Perfil</span>
      </a>
      <a href="#/setting" class="nav-link">
        <i class="fas fa-cog nav-icon"></i>
        <span class="nav-text">Configurar</span>
      </a>
      <a href="#/exit" class="nav-link" id='exit'>
        <i class="fas fa-sign-out-alt nav-icon"></i>
        <span class="nav-text">Salir</span>
      </a>
    </nav>
    </section>
    <nav class="nav">
      <a href="#/home" class="nav-link">
        <i class="fas fa-home nav-icon"></i>
        <span class="nav-text">Home</span>
      </a>
      <a href="#/perfil" class="nav-link">
        <i class="fas fa-user nav-icon"></i>
        <span class="nav-text">Perfil</span>
      </a>
      <a href="#/setting" class="nav-link">
        <i class="fas fa-cog nav-icon"></i>
        <span class="nav-text">Configurar</span>
      </a>
      <a href="#/exit" class="nav-link" id='exit'>
        <i class="fas fa-sign-out-alt nav-icon"></i>
        <span class="nav-text">Salir</span>
      </a>
    </nav>
    
`
  const btnSignOut = viewHome.querySelector('#exit')
  btnSignOut.addEventListener('click',(e)=>{
    e.preventDefault()
    firebase.auth().signOut()
    .then(()=> {
      console.log('saliendo')
      window.location.hash ='#/exit'
    })
    .catch((error)=> {
      console.log(error)
    })
  })

  
  const btnSend = viewHome.querySelector('.btn-send')
  btnSend.addEventListener('click',()=>{
    const user = firebase.auth().currentUser;
    console.log(user);
    const contentPost = viewHome.querySelector('.textarea').value
    const displayName = user.displayName
    const photo = user.photoURL
    const hoy = new Date();
    const date = (`${hoy.getDate()}-${hoy.getMonth() + 1}-${hoy.getFullYear()}`);
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}`;
    const fecha = date
    // const db = firebase.firestore();
    db.collection('posts').doc().set({
      userName: displayName,
      photoURL: photo,
      postFecha: fecha,
      postHora : hora,
      posts: contentPost,
    });

  })

  //onSnapshot a toda la coleccion('posts')
  //sin onSnapshot
  // db.collection('posts').get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data().userName}
  //     => ${doc.data().photoURL} => ${doc.data().postFecha} => ${doc.data().posts}`);
  //   });
  // });
  //con onsnapshot
  // db.collection('posts')
  //   .onSnapshot((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       console.log(` Con onSnapshot ${doc.id} => ${doc.data().userName}
  //     => ${doc.data().photoURL} => ${doc.data().postFecha} => ${doc.data().posts}`);
  //     })
  //   })


  const pintarPost = viewHome.querySelector('.posts-main')
  console.log(pintarPost);
  pintarPost.innerHTML = '';
  db.collection('posts')
    .orderBy('postFecha','desc')
    .onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const postContent = document.createElement('div');
        postContent.classList.add('content-posts');
        postContent.innerHTML = `
          <div class= 'data-user'>
            <img src=${doc.data().photoURL} alt="avatar" s class = 'photo-user'>
            <h3 class = 'name-user'>${doc.data().userName}</h3>
            <p class='date'>${doc.data().postFecha} </p>
            <p class='hour'>${doc.data().postHora} </p>
            <button class= 'btn-modal'>
              <i class="fas fa-ellipsis-h"></i>
            </button>
            <div class = 'option-publication'>
            </div>
          </div>

          <div class='content-message'>
            <p class='message'>${doc.data().posts}</p>
          </div>
          <div class= 'like-coment'>
            <button class ='like'>
              <i class="far fa-heart fa-lg"></i>
            </button>
            0 
            <button class=coment>
              <i class="far fa-comment-alt fa-lg"></i>
            </button>
          </div>`
        pintarPost.appendChild(postContent)

        //modal
        const modalContainer = postContent.querySelector('.option-publication')
        modalContainer.innerHTML = `
          <button class= 'setting-post'><i class="fas fa-pen"></i>Edit</button>
          <button class= 'setting-post'><i class="fas fa-globe-americas"></i>Public</button>
          <button class= 'setting-post'><i class="fas fa-lock"></i>Private</button>
          <button class= 'setting-post'><i class="fas fa-trash-alt"></i>Remove</button>
          `

        const btnModal = postContent.querySelector('.btn-modal')
        btnModal.addEventListener('click', ()=>{
          console.log('click en opcion del modal');
          modalContainer.style.display='flex'
        })

      })
    })





  return viewHome
}