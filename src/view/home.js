// import { changeView } from '../router/index.js'
// import { createUser} from '../model/auth.js'

export default () => {
  const viewHome = document.createElement('div');
  viewHome.classList.add('menu');
  viewHome.innerHTML = `
    <div class="header-home">
      <p class="title home-title">Tripventure</p>
    </div>
    <section class='body-content'>
      <div class='publication'>
        <i class="fas fa-ellipsis-h"></i>
        <div class='option-privacity'>
        <i class="fas fa-globe-americas"> Público</i>
        <i class="fas fa-lock">Privado</i> 
        </div>
        <textarea placeholder='¿Qué estás pensando?' cols='20' class = 'textarea'> </textarea>
        <i class="far fa-image fa-lg"></i>
        <i class="far fa-paper-plane fa-lg"></i>
      </div>
      <div class = 'content-posts'>
        <div class= 'info-profile'>
        <img src="../img/profile1.png" alt="avatar" width = 120px>
        <h3>Fulana Suarez</h3>
        <p>5 de julio de 2020</p>
        <i class="fas fa-ellipsis-h"></i>
        <div class = 'option-publication' >
        <i class="fas fa-pen">Editar</i>
        <i class="fas fa-globe-americas"> Público</i>
        <i class="fas fa-lock">Privado</i>
        <i class="far fa-trash-alt">Eliminar</i>
        </div>
        <div class='content-message'>
          <p>Hola soy fulanas</p>
        </div>
        <i class="far fa-heart"></i>
        <i class="far fa-comment-alt"></i>
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
    
  return viewHome
}