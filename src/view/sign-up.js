export default () => {
  const viewSignUp = document.createElement('div');
  viewSignUp.classList.add('container');
  viewSignUp.innerHTML = `
          <img src="./img/signup.png" alt="imagen" class="img-register">
      <div class="prueba">
        <div class="content">
          <h1 class="title">TripVenture</h1>
          <p class="welcome-text">¡Hola Viajerx!<span>Ingrese su información a continuación para registrarse</span></p>
          <form action="/signup" class="signup">
            <input type="text" placeholder="Nombre y Apellidos" required class="name-login">
            <input type="email" placeholder="e-mail" required class="email-login">
            <input type="password" placeholder="contraseña" minlength="8" required class="pasword-login">
            <button class="btn  btn-tripventure">
              <!-- <i class="fas fa -suitcase-rolling fa-2x"></i> -->
              Registrarse
            </button>
          </form>
          <p>¿ya tienes cuenta?
            <span><a href="#/signIn">Inicia Sesión</a></span></p>
        </div>
      </div>
          
`

  return viewSignUp
}