import signIn from './sign-in.js';
import signUp from './sign-up.js';
import home from './home.js';
import notfound from './404.js'

const obComponents = {
signin: signIn(),
signup: signUp(),
home: home(),
notfound: notfound()
}


export{obComponents}