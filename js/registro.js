let inputUser = document.getElementById('inputUser')
let inputPass = document.getElementById('inputPass')
let inputRepeatPass = document.getElementById('inputRepeatPass')
let inputCheck = document.getElementById('idCheck')

let divErrUser = document.getElementById('divErrUser')
let divErrPass = document.getElementById('divErrPass')
let divErrRepeatUser = document.getElementById('divErrRepeatPass')
let divCheck = document.getElementById('divCheck')

let buttonRegister = document.getElementById('buttonRegister')

let usersLocalStorage = JSON.parse(localStorage.getItem('users')) || []
let usersArray = []

if (usersLocalStorage.length > 0) {
  usersLocalStorage.forEach(user => usersArray.push(user))
}

divErrUser.classList = 'd-none'
divErrPass.classList = 'd-none'
divErrRepeatUser.classList = 'd-none'
divCheck.classList = 'd-none'

let user = ''
let pass = ''
let repeatPass = ''
let check = false

let idUser = usersLocalStorage.length > 0 ? usersLocalStorage[usersLocalStorage.length - 1].id + 1 : 1

const objetoForm = {
  id: idUser,
  user: '',
  pass: '',
  repeatPass: '',
  check: false,
  role: 'user',
  login: false,
  deleted: false
}

const changeInput = (event) => {
  const { name, value } = event.target
  if (name === 'check') {
    objetoForm[name] = inputCheck.checked
    divCheck.classList = 'd-none'
  } else {
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
      case 'repeatPass':
        divErrRepeatUser.classList = 'd-none'
        inputRepeatPass.classList.remove('is-invalid');
        break;

      default:
        console.log('error no existe ese name en el objeto')
        break;
    }
  }
}

const sendRegister = () => {
  const { user, pass, repeatPass, check } = objetoForm
  
  if (user && pass && repeatPass && check) {
    if(pass === repeatPass){
      usersArray.push(objetoForm)
      localStorage.setItem('users', JSON.stringify(usersArray))
      Swal.fire(
        'El usuario se creo exitosamente!',
        'Revisa tu email recibiras un mail de confirmacion',
        'success'
      )
      setTimeout(() => {
       location.href='../index.html' 
      }, 3000)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
      })
      inputPass.classList.add('is-invalid');
      inputRepeatPass.classList.add('is-invalid');
    }

  } else if (!user && !pass && !repeatPass && !check) {
    switch (true) {
      case !user:
        divErrUser.classList = 'd-block text-danger'
        inputUser.classList.add('is-invalid');
      case !pass:
        divErrPass.classList = 'd-block text-danger'
        inputPass.classList.add('is-invalid');
      case !repeatPass:
        divErrRepeatUser.classList = 'd-block text-danger'
        inputRepeatPass.classList.add('is-invalid');
      case !check:
        divCheck.classList = 'd-block text-danger'
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
    if (!repeatPass) {
      divErrRepeatUser.classList = 'd-block text-danger'
      inputRepeatPass.classList.add('is-invalid');
    }
    if (!check) {
      divCheck.classList = 'd-block text-danger'
    }
  }
}

inputUser.addEventListener('input', changeInput)
inputPass.addEventListener('input', changeInput)
inputRepeatPass.addEventListener('input', changeInput)
inputCheck.addEventListener('click', changeInput)
buttonRegister.addEventListener('click', sendRegister)
