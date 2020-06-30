// import { changeView } from '../router/index.js'
// import { createUser} from '../model/auth.js'

export default () => {
  const viewHome = document.createElement('div');
  viewHome.classList.add('menu');
  viewHome.innerHTML = `
  <div class="header-home">
      <p class="title home-title">Tripventure</p>
    </div>
  //div que contenga el cuerpo
  //div para los posts (crear y pintar)
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
      <a href="#/exit" class="nav-link">
        <i class="fas fa-sign-out-alt nav-icon"></i>
        <span class="nav-text">Salir</span>
      </a>
    </nav>
    
`

  return viewHome
}