const arrayUsuarios = [
    {
        id:"1",
        user: 'Carla',
        pass: 'car123',
        mail: 'carli.ca@gmail.com',
        telefono: '3813557896',
        direccion: 'corrientes 265',
        role: 'user'

    },
    {
        id:"1",
        user: 'Lucas',
        pass: 'Pregot',
        mail: 'lucas28@gmail.com',
        telefono: '3813564786',
        direccion: 'Salta 1500',
        role: 'admin'
    }
]

localStorage.setItem('arrayUsuarios', JSON.stringify(arrayUsuarios))