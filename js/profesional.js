let divProfesional = document.getElementById('profesional');
let arrayProfesionalesLS = JSON.parse(localStorage.getItem('arrayProfesionales'));
let idProfesional = location.search.split('=')[1];

let profesional = arrayProfesionalesLS.filter((profesional) => {
  return profesional.id == idProfesional;
});


divProfesional.innerHTML = profesional.map((profesional) => {
  return `
    <div class="card" style="width: 18rem;">
      <img src="${profesional.foto}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${profesional.nombre} ${profesional.apellido}</h5>
        <p class="card-text">Profesión: ${profesional.profesion}</p>
        <a href="./profesional.html?id=${profesional.id}" class="btn btn-primary">Pedir Turno</a>
      </div>
    </div>`;
});