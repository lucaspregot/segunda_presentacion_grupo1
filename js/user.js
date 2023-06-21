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
        foto: 'https://img.freepik.com/foto-gratis/joven-atractiva-mujer-sonriente-mirando-alegremente-camara-papeles-bloc-notas-oficina-moderna_574295-5169.jpg?w=740&t=st=1687316589~exp=1687317189~hmac=83b15737ed4567c625cfdd0a3821b37e52f5b3b89a29b740d2d3bc604db254a0'

    },
    {
        id: "3",
        nombre: 'Adrían',
        apellido: 'Padilla',
        profesion: 'Ginecología',
        foto: 'https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=740&t=st=1686692696~exp=1686693296~hmac=7c1df3728c3c14abac9a8d702860b52094d87b52393b126f0183599f63413a0a'

    },
    {
        id: "4",
        nombre: 'Mariela',
        apellido: 'Soto',
        profesion: 'Medicina familiar',
        foto: 'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7781.jpg?w=900&t=st=1686693418~exp=1686694018~hmac=6fd21c615e7ed57c82e32680e53a7de87f01b2192abcbf55cb8cfa259ce89f3c'

    },
    {
        id: "5",
        nombre: 'José',
        apellido: 'Farias',
        profesion: 'Fisioterapia',
        foto: 'https://img.freepik.com/free-photo/medical-assistant-preparing-physiotherapy-exercises_23-2149071432.jpg?w=900&t=st=1686693343~exp=1686693943~hmac=7ae780182a3611503becf202f3c223ad19b3cab83fb83fd581b442ad2363ef15'

    },
    {
        id: "6",
        nombre: 'German',
        apellido: 'Suarez',
        profesion: 'Odontologo',
        foto: 'https://img.freepik.com/free-photo/male-dentist-room-with-medical-equipment-background_613910-15248.jpg?w=740&t=st=1686693220~exp=1686693820~hmac=71dd34f6dd6fdd1e762d5acc4b1c383132a8297794bbc6885149395b6ea4ce04'

    },
    {
        id: "7",
        nombre: 'Estefania',
        apellido: 'Juarez',
        profesion: 'Pediatra',
        foto: 'https://img.freepik.com/free-photo/beautiful-female-doctor-white-coat-standing-arms-crossed-white-wall_114579-47701.jpg?w=900&t=st=1686693143~exp=1686693743~hmac=361f093bf73b5968d50270dcb7896819aa6e081f552953a1be4331687f8a51fc'

    },
    {
        id: "8",
        nombre: 'Análisis Bioquímicos',
        apellido: '',
        profesion: '',
        foto: 'https://img.freepik.com/foto-gratis/mujer-trabajando-laborator_23-2148824177.jpg?w=740&t=st=1687316432~exp=1687317032~hmac=ed20367b4b5067f98c23b85475ef4dde41b6cae92de81dedd8248056b399e8ca'

    },
    {
        id: "9",
        nombre: 'Ecografías',
        apellido:"",
        profesion:"",
        foto: 'https://img.freepik.com/foto-gratis/hermosa-doctora-sentada-su-oficina-cerca-ultrasonido-sc_7502-8371.jpg?w=740&t=st=1687315992~exp=1687316592~hmac=f6c6662f647fe67921e0bb4205e16591c940280e2681326c5acfbfc9f245c438'

    }
]

localStorage.setItem('arrayProfesionales', JSON.stringify(arrayProfesionales))


const divCard = document.getElementById('cardProfesionales')

divCard.innerHTML = arrayProfesionales.map(
    (medico) =>

        `<div class="card col-sm-12 col-md-6 col-lg-3 my-5 mx-3" style="width: 18rem;">
     <img src="${medico.foto}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${medico.nombre} ${medico.apellido}</h5>
      <p class="card-text">${medico.profesion}</p>
      <a href="./profesional.html?id=${medico.id}" class="btn boton-card">Pedir Turno</a>
    
  </div>
  </div>`
)
    .join('');

    