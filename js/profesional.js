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


document.getElementById("formFechaHora").addEventListener("submit", function(event) {
  let fechaSeleccionada = document.getElementById("imputFecha").value;
  let horaSeleccionada = document.getElementById("hora").value;
  let fechaError = document.getElementById("mensajeErrorFecha");
  let horaError = document.getElementById("mensajeErrorHora");

  if (!fechaSeleccionada) {
    fechaError.textContent = "Por favor, seleccione una fecha.";
    event.preventDefault();
  } else {
    fechaError.textContent = "";
  }

  if (!horaSeleccionada) {
    horaError.textContent = "Por favor, seleccione una hora.";
    event.preventDefault();
  } else {
    horaError.textContent = "";
  }


});
