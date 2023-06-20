let inputUser = document.getElementById('inputUser')
let inputPass = document.getElementById('inputPass')

let divErrUser = document.getElementById('divErrUser')
let divErrPass = document.getElementById('divErrPass')

let buttonLogin = document.getElementById('buttonLogin')

let usersLocalStorage = JSON.parse(localStorage.getItem('users')) || []
let usersArray = []

if (usersLocalStorage.length > 0) {
  usersLocalStorage.forEach(user => usersArray.push(user))
}

divErrUser.classList = 'd-none'
divErrPass.classList = 'd-none'

let user = ''
let pass = ''

const objetoForm = {
  user: '',
  pass: '',
}

const changeInput = (event) => {
  const { name, value } = event.target

  objetoForm[name] = value

  switch (name) {
    case 'user':
      divErrUser.classList = 'd-none'
      inputUser.classList.remove('is-invalid');
      break;
    case 'pass':
      divErrPass.classList = 'd-none'
      inputPass.classList.remove('is-invalid');
      break;

    default:
      console.log('error no existe ese name en el objeto')
      break;
  }

}

const sendRegister = () => {
  const { user, pass } = objetoForm
  if (user && pass) {
    const userLS = usersArray.find(userLs => userLs.user === user)
    const userIndex = usersArray.findIndex(userLs => userLs.user === user)

    if (userLS.user === user && userLS.pass === pass) {
      if (userLS.role === 'user') {
        usersArray[userIndex].login = true
        localStorage.setItem('users', JSON.stringify(usersArray))
        location.href = `user.html?id=${userLS.id}`
      } else if (userLS.role === 'admin') {
        usersArray[userIndex].login = true
        localStorage.setItem('users', JSON.stringify(usersArray))
        location.href = `admin.html?id=${userLS.id}`
      }
    } else {
     Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o contraseña incorrecto',
      })
    }
  } else if (!user && !pass) {
    switch (true) {
      case !user:
        divErrUser.classList = 'd-block text-danger'
        inputUser.classList.add('is-invalid');
      case !pass:
        divErrPass.classList = 'd-block text-danger'
        inputPass.classList.add('is-invalid');
    }
  } else {
    if (!user) {
      divErrUser.classList = 'd-block invalid-feedback text-danger'
      inputUser.classList.add('is-invalid');
    }
    if (!pass) {
      divErrPass.classList = 'd-block text-danger'
      inputPass.classList.add('is-invalid');
    }
  }
}

inputUser.addEventListener('input', changeInput)
inputPass.addEventListener('input', changeInput)
buttonLogin.addEventListener('click', sendRegister)