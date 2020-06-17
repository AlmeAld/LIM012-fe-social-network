import { changeView } from '../router/index.js'
import { createUser } from '../model/auth.js'

export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('container');
  viewSignUp.innerHTML = `
          <img src="./img/signup2.PNG" alt="imagen" class="img-register">
      <div class="prueba">
        <div class="content">
          <h1 class="title">TripVenture</h1>
          <p class="welcome-text">¡Hola Viajerx!<span>Ingrese su información a continuación para registrarse</span></p>
          <form action="/signup" class="signup">
            <input type="text" placeholder="Nombre y Apellidos" required class="name-login">
            <input type="email" placeholder="e-mail" required class="email-login" id='email'>
            <input type="password" placeholder="contraseña" minlength="8" required class="pasword-login" id='password'>
            <button class="btn  btn-tripventure">
              Registrarse
            </button>
            <!--<input type="submit" value="Registrarse" class="btn  btn-tripventure"> -->
          </form>
          <p>¿ya tienes cuenta?
            <span><a href="#/signIn">Inicia Sesión</a></span></p>
        </div>
      </div>
          
`

const btnSingUp = viewSignUp.querySelector('button');
btnSingUp.addEventListener('click', (e) => {
  //por defecto los formularios se reinician cuando capturas el evento. entonces recibimos un evento 'e' y desde ese evento quiero supreventDefault() para cancelar el evento de reinicio de formulario 
  e.preventDefault();
  changeView('#/home');
  const email = viewSignUp.querySelector('#email').value
  const password = viewSignUp.querySelector('#password').value
  createUser(email, password)
})

  return viewSignUp
}
