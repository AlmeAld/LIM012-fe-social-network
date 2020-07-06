import { obComponents } from '../view/index.js';

const container = document.getElementById('main')

export const changeView = (route) => {

  container.innerHTML='';

  switch (route) {
    case '':
    case '#/':
    case '#/signIn':
    case '#/exit':
      return container.appendChild(obComponents.signin)
    case '#/signUp':
      return container.appendChild(obComponents.signup)
    case '#/home':
      return container.appendChild(obComponents.home)

    default: return container.appendChild(obComponents.notfound)
  }

}
//para traer el cambio de la vista y asosiarlos
// export { changeView }