import { obComponents } from '../view/index.js';

export const changeView = (route) => {

  const container = document.getElementById('main')
  // container.innerHTML='';

  switch (route) {
    case '':
    case '#/':
    case '#/signIn':
      return container.appendChild(obComponents.signin)
    case '#/signUp':
      return container.appendChild(obComponents.signup)

    default: return console.log('aqui sale un error porque algo anda mal!!');
  }

}
//para traer el cambio de la vista y asosiarlos
// export { changeView }