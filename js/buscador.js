let inputBuscador = document.getElementById('inputBuscador')
let inputBuscadorHamburguesa = document.getElementById('inputBuscadorHamburguesa')

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