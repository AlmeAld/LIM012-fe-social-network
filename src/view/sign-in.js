import { changeView} from '../router/index.js'
import { login} from '../model/auth.js'

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
            <input type="password" placeholder="contraseña" minlength="8" required class="pasword-login" id='passwordLogin'>
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
    // console.log('estoy en regisytro');
    

    // createUser(email,pasword)
  })

const btnLogin = viewSignIn.querySelector('#login')
btnLogin.addEventListener('click',(e)=>{
  // console.log('click');
  e.preventDefault();
  changeView('#/home');
  const emailLogin = viewSignIn.querySelector('#emailLogin').value
    const passwordLogin = viewSignIn.querySelector('#passwordLogin').value
    login(emailLogin,passwordLogin)
})

return viewSignIn
}


