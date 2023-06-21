const arrayProfesionales = [
    {
        id: "1",
        nombre: 'Belén',
        apellido: 'Arias',
        profesion: 'Ginecología',
        foto: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=740&t=st=1686536641~exp=1686537241~hmac=1f0c8a258967bc7460734aa20de970a2bd0195cea6f3501aa828ea0b26306e1e'

    },
    {
        id: "2",
        nombre: 'Soledad',
        apellido: 'Lazarte',
        profesion: 'Psicología',
        foto: 'https://img.freepik.com/free-photo/front-view-elegant-businesswoman-holding-clipboard_23-2148788840.jpg?w=900&t=st=1686692612~exp=1686693212~hmac=6fa2d2e839c3d28c88c4119a19b6f85a82b8b1e7d664097c0dcf42992f3ca844'

    },
    {
        id: "3",
        nombre: 'Belén',
        apellido: 'Arias',
        profesion: 'Ginecología',
        foto: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1686692696~exp=1686693296~hmac=7c1df3728c3c14abac9a8d702860b52094d87b52393b126f0183599f63413a0a'

    },
    {
        id: "4",
        nombre: 'Belén',
        apellido: 'Arias',
        profesion: 'Ginecología',
        foto: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1686692750~exp=1686693350~hmac=4decb7c53ce001a709bd2bc99889ab3353749bf4ded4ee32cf0927fbd732534d'

    },
    {
        id: "5",
        nombre: 'Belén',
        apellido: 'Arias',
        profesion: 'Ginecología',
        foto: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7781.jpg?w=900&t=st=1686693418~exp=1686694018~hmac=6fd21c615e7ed57c82e32680e53a7de87f01b2192abcbf55cb8cfa259ce89f3c'

    },
    {
        id: "6",
        nombre: 'Belén',
        apellido: 'Arias',
        profesion: 'Fisioterapia',
        foto: 'https://img.freepik.com/free-photo/medical-assistant-preparing-physiotherapy-exercises_23-2149071432.jpg?w=900&t=st=1686693343~exp=1686693943~hmac=7ae780182a3611503becf202f3c223ad19b3cab83fb83fd581b442ad2363ef15'

    },
    {
        id: "7",
        nombre: 'Belén',
        apellido: 'Arias',
        profesion: 'Odontologo',
        foto: 'https://img.freepik.com/free-photo/male-dentist-room-with-medical-equipment-background_613910-15248.jpg?w=740&t=st=1686693220~exp=1686693820~hmac=71dd34f6dd6fdd1e762d5acc4b1c383132a8297794bbc6885149395b6ea4ce04'

    },
    {
        id: "8",
        nombre: 'Estefania',
        apellido: 'Juarez',
        profesion: 'Pediatra',
        foto: 'https://img.freepik.com/free-photo/beautiful-female-doctor-white-coat-standing-arms-crossed-white-wall_114579-47701.jpg?w=900&t=st=1686693143~exp=1686693743~hmac=361f093bf73b5968d50270dcb7896819aa6e081f552953a1be4331687f8a51fc'

    },
    {
        id: "8",
        nombre: 'Estefania',
        apellido: 'Juarez',
        profesion: 'Pediatra',
        foto: 'https://img.freepik.com/free-photo/beautiful-female-doctor-white-coat-standing-arms-crossed-white-wall_114579-47701.jpg?w=900&t=st=1686693143~exp=1686693743~hmac=361f093bf73b5968d50270dcb7896819aa6e081f552953a1be4331687f8a51fc'

    }
]

localStorage.setItem('arrayProfesionales', JSON.stringify(arrayProfesionales))


const divCard = document.getElementById('cardProfesionales')

divCard.innerHTML = arrayProfesionales.map(
    (medico) =>

        `<div class="card" style="width: 18rem;">
     <img src="${medico.foto}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${medico.nombre} ${medico.apellido}</h5>
      <p class="card-text">Profesión: ${medico.profesion}</p>
      <a href="./profesional.html?id=${medico.id}" class="btn btn-primary">Pedir Turno</a>
    
  </div>
  </div>`
)
    .join('');

    