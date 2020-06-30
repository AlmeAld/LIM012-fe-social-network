//valida input email
export const validateInputEmail = (email)=>{

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  email.addEventListener('input', (e) => {
    const value = e.target.value

    const btnSignup = document.querySelector('#signupBtn')
    window.setTimeout(() => {
      if (validateEmail(value)) {
        helperTextEmail.textContent = ''
        btnSignup.disabled = false
      } else {
        helperTextEmail.textContent = '*no cumple con las características de un correo válido.'
        btnSignup.disabled = true
      }

    }, 1000)

  })
  return
}

//valida input password
export const validateInputPassword = (password)=>{

  const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    console.log(regexPassword.test(password));
    return regexPassword.test(password);
  }

  password.addEventListener('input', (e) => {
    const value = e.target.value
    console.log(value);

    window.setTimeout(()=>{
      if (!validatePassword(value)) {
        helperTextPassword.textContent = 'su password debe tener al menos una letra mayúscula y un número.'
      } else {
        helperTextPassword.textContent = 'password válido'
        
      }
    },1000)
  })

  return
}