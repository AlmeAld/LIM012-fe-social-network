import { validateInputPassword, validateInputEmail } from '../model/validate.js';
import { changeView } from '../router/index.js'
import { createUser} from '../model/auth.js'
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
            <span id='helperTextEmail' class='helpertext helpertext-email'></span>
            <input type="password" placeholder="contraseña" required class="pasword-login" id='password'>
            <span id='helperTextPassword' class='helpertextP helpertext-password'></span>
            <button class="btn  btn-tripventure"  id= 'signupBtn'>
              Registrarse
            </button>
          </form>
          <p>¿ya tienes cuenta?
            <span><a href="#/signIn">Inicia Sesión</a></span></p>
        </div>
      </div>
          
`

  const email = viewSignUp.querySelector('#email')
  const password = viewSignUp.querySelector('#password')
  const helperTextPassword = viewSignUp.querySelector('#helperTextPassword')
  const  helperTextEmail = viewSignUp.querySelector('#helperTextEmail')
  
  // validando input email para registrarse 
  validateInputEmail(email)
  // validando input password para registrarse
  validateInputPassword(password)
  
  const btnSignup = viewSignUp.querySelector('button');
  console.log(btnSignup);
  btnSignup.addEventListener('click', (e) => {
    //por defecto los formularios se reinician cuando capturas el evento. entonces recibimos un evento 'e' y desde ese evento quiero supreventDefault() para cancelar el evento de reinicio de formulario 
    e.preventDefault();
    const email = viewSignUp.querySelector('#email').value
    console.log(email);
    const password = viewSignUp.querySelector('#password').value
    createUser(email, password)
    // changeView('#/home');  
})














  return viewSignUp
}
