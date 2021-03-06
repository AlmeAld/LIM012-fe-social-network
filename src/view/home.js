// import { postsCreated } from './posts.js'
import { db } from '../firebase-config.js'
import { getPost } from '../model/firestore.js'
import postContent from './posts.js'
// import{uploadImage } from '../model/storage.js'


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
        
        <div class='option-privacity'>
          
          <div class= 'privacidad'>
            Privacidad <i class="fas fa-ellipsis-h"></i>
            <div class='option-privacity-post' id= 'privacidad-post'>
              <ul>
                <li class= 'public'>
                  <i class="fas fa-globe-americas"></i>
                  <span> Publica</span>
                </li>
                <li class = 'private' >
                  <i class="fas fa-lock"></i>
                  <span >Privado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <textarea placeholder='¿Qué estás pensando?' cols='20' class = 'textarea'> </textarea>
        
        <label class = 'btn-file'>
        <i class="far fa-image fa-lg"></i>
        <input type='file' name= '' class='post-photo' id='photo' hidden>
        </label>
      
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
    </section>`

    
  const btnSignOut = viewHome.querySelector('#exit')
  btnSignOut.addEventListener('click', (e) => {
    e.preventDefault()
    firebase.auth().signOut()
      .then(() => {
        console.log('saliendo')
        window.location.hash = '#/exit'
      })
      .catch((error) => {
        console.log(error)
      })
  })


  const pintarPost = viewHome.querySelector('.posts-main')
  // console.log(pintarPost);
  let status = '';
  const btnSend = viewHome.querySelector('.btn-send')
  btnSend.addEventListener('click', (e) => {
    e.preventDefault()
    const user = firebase.auth().currentUser;
    const contentPost = viewHome.querySelector('.textarea').value
    const displayName = user.displayName
    const photo = user.photoURL
    const getPhoto = viewHome.querySelector('#photo')
    const imgPost = getPhoto.files[0]
    const date = new Date().toLocaleString()
    const hoy = new Date();
    const hora = `${hoy.getHours()}:${hoy.getMinutes()}`;
    console.log(status);
    // creando
    db.collection('posts').doc().set({
      userName: displayName,
      photoURL: photo,
      postFecha: hoy,
      postHora: hora,
      posts: contentPost,
      postStatus: status,
      // img: imgPost
      // postEdit:editPost
    });

    // db.collection('posts').add({
    //   id: user.uid,
    //   postHora: hora,
    //   userName: displayName,
    //   contentpost: contentPost,
    //   postStatus: status,
    // })
  })

  //pintar los post
  const postsPintados = (dataArray) => {
    // console.log(dataArray);
    pintarPost.innerHTML = ''
    dataArray.forEach(element => {
      const templatePost = postContent(element)
      pintarPost.appendChild(templatePost)
    });
  }
  // pintarPost.innerHTML = '';
  // postsPintados(pintarPost)
  getPost(postsPintados)

  //boton de privacidad publica para escribir post
  const btnPrivacidad = viewHome.querySelector('.privacidad')
  const optionPublic = btnPrivacidad.querySelector('.public')
  optionPublic.addEventListener('click', () => {
    status = 'public'
  })
  //boton de privada para escribir post
  const optionPrivate = btnPrivacidad.querySelector('.private')
  optionPrivate.addEventListener('click', () => {
    status = 'private'
  })

  //funcionalidad al div privacidad
  window.addEventListener('click', (e) => {
    console.log('click en window');
    if (btnPrivacidad.containszoo) {
      btnPrivacidad.classList.toggle('open');
    } else {
      btnPrivacidad.classList.remove('open');
    }
  });

  return viewHome
}