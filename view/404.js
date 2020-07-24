export default () => {
  const viewNotFound = document.createElement('div');
  viewNotFound.classList.add('notfound-container');
  viewNotFound.innerHTML = `
  <img src="./img/error404.png" alt="not found" class="img-404">
  <div class='text-404'>
    <h1 class='header-text'>Ooops.</h1>
    <p class = 'title-404' >Encontraste nuestro lugar de descanso.</p>
    <p class= 'subtitle'>respire por un momento. Si no sabe a dónde ir, cualquier dirección servirá.</p>
    <p class='text-ancor'>¿Qué tal echar un vistazo a los enlaces a continuación? tal vez puedas encontrar una dirección.</p>
    <a href="#/home" class= 'icon-home'>
    <i class="fas fa-home"></i>
    Go Home</a>
    <a href="#/profile" class='icon-user'>
    <i class="fas fa-user"></i>
    Profile</a>
  </div>
`




  return viewNotFound
}