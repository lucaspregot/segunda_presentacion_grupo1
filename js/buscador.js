let inputBuscador = document.getElementById('inputBuscador')
let inputBuscadorHamburguesa = document.getElementById('inputBuscadorHamburguesa')
let arrayProfesionales = [
    {
        nombre: 'Carlos',
        apellido: 'Gomez',
        profesion: 'Pediatria',
    }, 
    {
        nombre: 'Susana',
        apellido: 'Perez',
        profesion: 'Cardiologia',
    },
    {
        nombre: 'Fabiana',
        apellido: 'Rosales',
        profesion: 'Dermatologia',
    }
   
]
const filtroBuscador = (event) => {
    const {  value } = event.target
    let terminoFiltro = value.toLowerCase()
    let filtroProfesionales = arrayProfesionales.filter((profesional) => {
        let nombreProfesional = `${profesional.nombre} ${profesional.apellido}`.toLowerCase()
        let profesion = `${profesional.profesion}`.toLowerCase()
        return nombreProfesional.includes(terminoFiltro) || profesion.includes(terminoFiltro)
    })

    if (filtroProfesionales.length > 0) {
        console.log(filtroProfesionales)
    }else{
        console.log('no existe profesional')
    }
}

inputBuscador.addEventListener('input', filtroBuscador)
inputBuscadorHamburguesa.addEventListener('input', filtroBuscador)