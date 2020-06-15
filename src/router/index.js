import { obComponents } from '../view/index.js';

const container = document.getElementById('main')

export const changeView = (route) => {

  container.innerHTML='';

  switch (route) {
    case '':
    case '#/':
    case '#/signIn':
      return container.appendChild(obComponents.signin)
    case '#/signUp':
      return container.appendChild(obComponents.signup)

    default: return console.log('not found!!');
  }

}
//para traer el cambio de la vista y asosiarlos
// export { changeView }