let divProfesional = document.getElementById('profesional');
let arrayProfesionalesLS = JSON.parse(localStorage.getItem('arrayProfesionales'));
let idProfesional = location.search.split('=')[1];

let profesional = arrayProfesionalesLS.filter((profesional) => {
  return profesional.id == idProfesional;
});


divProfesional.innerHTML = profesional.map((profesional) => {
  return `
    <div class="card col-sm-12 col-md-6 col-lg-3 my-5 mx-3" style="width: 18rem;">
      <img src="${profesional.foto}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${profesional.nombre} ${profesional.apellido}</h5>
        <p class="card-text"> ${profesional.profesion}</p>
        <a href="./profesional.html?id=${profesional.id}"></a>
      </div>
    </div>`
});


function enviarFormulario() {
      let fechaSeleccionada = document.getElementById("fecha").value;
      let horaSeleccionada = document.getElementById("hora").value;
      
      // Aquí puedes realizar las acciones que desees con los valores seleccionados
      // por ejemplo, enviarlos a un servidor o mostrarlos en la consola
      console.log("Fecha seleccionada:", fechaSeleccionada);
      console.log("Hora seleccionada:", horaSeleccionada);
      
      // Evitar que el formulario se envíe
      event.preventDefault();
    }