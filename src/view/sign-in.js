import { changeView} from '../router/index.js';
import { validateInputEmail, validateInputPassword } from '../model/validate.js';
import { login} from '../model/auth.js';


export default ()=>{
  const viewSignIn = document.createElement('div');
  viewSignIn.classList.add('container'); 
  viewSignIn.innerHTML = `
  <img src="./img/home.png" alt="imagen" class="img-home">
      <div class="prueba">
        <div class="content">
          <h1 class="title">TripVenture</h1>
          <p class="welcome-text">Bienvenidx a la red social para ¡viajeros!</p>
          <form action="/signup" class="signup">
            <input type="email" placeholder="e-mail" required class="email-login" id='emailLogin'>
            <span id='helperTextEmail' class='helpertext helpertext-email'></span>
            <input type="password" placeholder="contraseña" required class="pasword-login" id='passwordLogin'>
            <span id='helperTextPassword' class='helpertextP helpertext-password'></span>
            <button class="btn  btn-tripventure" id='login'>
              Iniciar Sesión
            </button>
          </form>
          <button class="btn btn-facebook">
            <i class="fab fa-facebook fa-lg"></i>
          </button>
          <button class="btn btn-google">
            <i class="fab fa-google"></i>
          </button>
          <p>¿No tienes cuenta?
            <span><a href="#/signUp">Registrate</a></span></p>
        </div>
      </div>
`
  const btnSingUp = viewSignIn.querySelector('a');
  btnSingUp.addEventListener('click',()=>{

    changeView('#/signUp');
  })
  
    const emailLogin = viewSignIn.querySelector('#emailLogin')
    const passwordLogin = viewSignIn.querySelector('#passwordLogin')
    const helperTextEmail = viewSignIn.querySelector('#helperTextEmail')
    const helperTextPassword = viewSignIn.querySelector('#helperTextPassword')

    const btnLogin = viewSignIn.querySelector('#login')
    
    validateInputEmail(emailLogin)
  validateInputPassword(passwordLogin)
  
//login
  btnLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    const emailLogin = viewSignIn.querySelector('#emailLogin').value
    const passwordLogin = viewSignIn.querySelector('#passwordLogin').value
// Autentificacion con Firebase
    login(emailLogin, passwordLogin);
})


return viewSignIn
}


