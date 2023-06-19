//obtengo los botones de registro e inicio de sesion
let botonRegistrarse = document.getElementById('botonRegistrarse')


//obtengo los input de registarse
let inputNombreUsuarioRegistro = document.getElementById('inputNombreUsuarioRegistro')
let inputCorreoElectronico = document.getElementById('inputCorreoElectronico')
let inputContraseniaRegistro = document.getElementById('inputContraseniaRegistro')
let inputReContraseniaRegistro = document.getElementById('inputReContraseniaRegistro')
//obtengo los mensajes de error de los input
let msjCampoUsuarioVacio = document.getElementById('msjCampoUsuarioVacio')
msjCampoUsuarioVacio.classList = 'd-none'

let msjEmail = document.getElementById('msjEmail')
msjEmail.classList = 'd-none'

let msjContrasenia = document.getElementById('msjContrasenia')
msjContrasenia.classList = 'd-none'

let msjReContrasenia = document.getElementById('msjReContrasenia')
msjReContrasenia.classList = 'd-none'

//obtengo la base de datos del localStorage
let baseDeDatosLS=JSON.parse(localStorage.getItem('usuarios')) || []

//array de cuentas creadas
let cuentas= []

//recorro el localSrotage y almaceno el nuevo usuario
if (baseDeDatosLS.length > 0) {
    baseDeDatosLS.forEach(usuarios => cuentas.push(usuarios))
  }

//genero el id dinamico
let idUsuario=baseDeDatosLS.length ===0 ? 1 :
 baseDeDatosLS[baseDeDatosLS.length -1].id+1

//objeto de almacenamiento de los datos del formulario de registro
let NombreUsuario=''
let CorreoElectronico=''
let Contrasenia=''
let ReContrasenia=''

let registroUsuario = {
    id:idUsuario,
    NombreUsuario: '',
    CorreoElectronico: '',
    Contrasenia: '',
    ReContrasenia: '',
    rol:'usuario',
    login:false
}


//funcion de escucha de los input de formulario de registro
let inputRegistrase = (event) => {
    const { name, value } = event.target
    registroUsuario[name] = value
    
    switch (name) {
        case 'NombreUsuario':
            msjCampoUsuarioVacio.classList = 'd-none'
            inputNombreUsuarioRegistro.classList.remove('is-invalid')
            break;
        case 'CorreoElectronico':
            msjEmail.classList = 'd-none'
            inputCorreoElectronico.classList.remove('is-invalid')
            break;
        case 'Contrasenia':
            msjContrasenia.classList = 'd-none'
            inputContraseniaRegistro.classList.remove('is-invalid')
            break;
        case 'ReContrasenia':
        
            msjReContrasenia.classList = 'd-none'
            inputReContraseniaRegistro.classList.remove('is-invalid')
            break;
    }

}
//funcion del boton registrarse
let registrarse = (event) => {
    const { NombreUsuario, CorreoElectronico, Contrasenia, ReContrasenia } = registroUsuario
    if (NombreUsuario && CorreoElectronico && Contrasenia && ReContrasenia) {
        if (Contrasenia===ReContrasenia) {
            cuentas.push(registroUsuario)
        localStorage.setItem('usuarios', JSON.stringify(cuentas))
        
        }else{
            alert('las contraseñas no coinciden')
        }
        
        
    }
    if (!NombreUsuario && !CorreoElectronico && !Contrasenia && !ReContrasenia) {
        alert('formulario vacio')
    } else if (!NombreUsuario) {
        msjCampoUsuarioVacio.classList = 'd-block text-danger'
        inputNombreUsuarioRegistro.classList.add('is-invalid')
    } else if (!CorreoElectronico) {
        msjEmail.classList = 'd-block text-danger'
        inputCorreoElectronico.classList.add('is-invalid')
    } else if (!Contrasenia) {
        msjContrasenia.classList = 'd-block text-danger'
        inputContraseniaRegistro.classList.add('is-invalid')
    } else if (!ReContrasenia) {
        msjReContrasenia.classList = 'd-block text-danger'
        inputReContraseniaRegistro.classList.add('is-invalid')
    }
    
}

//escucha del boton registrarse
botonRegistrarse.addEventListener('click', registrarse)

//pongo a escuchar los input de registrarse
inputNombreUsuarioRegistro.addEventListener('input', inputRegistrase)
inputCorreoElectronico.addEventListener('input', inputRegistrase)
inputContraseniaRegistro.addEventListener('input', inputRegistrase)
inputReContraseniaRegistro.addEventListener('input', inputRegistrase)