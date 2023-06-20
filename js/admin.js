let usersLocalStorage = JSON.parse(localStorage.getItem('arrayUsuarios')) || []
let userID = location.search.split('=')[1]
console.log(userID)
let user = usersLocalStorage.filter((usuario) => {
  return usuario.id === parseInt(userID)
})
/* const buttonLogout = document.getElementById('logout') */
const tBody = document.getElementById('tBody')
let userIndex = usersLocalStorage.findIndex((user) => user.id === parseInt(userID)) 

tBody.innerHTML = usersLocalStorage.map((user) =>
  `
  <tr>
  <th scope="row">${user.id}</th>
  <td>${user.user}</td>
  <td>${user.role}</td>
  <td>${user.mail}</td>
  <td>${user.telefono}</td>
  <td>${user.direccion}</td>

  <td class="d-flex">

  <button type="button" class="btn btn-success mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal${user.id}">
    Editar
  </button>

  <button id="buttonDelete" class='btn btn-danger' onclick='deleteUser(${user.id})'>Borrar</button>
 
  <div class="modal fade" id="exampleModal${user.id}" tabindex="-1" aria-labelledby="exampleModalLabel${user.id}" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel${user.id}">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form>
        <div class="mb-3">
          <label for="inputUser" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="inputUser${user.id}" aria-describedby="emailHelp"
          value='${user.user}' name='user'>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1${user.id}" class="form-label">Role</label>
          <input type="text" class="form-control" id="exampleInputPassword1${user.id}">
        </div>
        <button type="button" class="btn btn-success" onclick='editUser(${user.id})'>Guardar Cambios</button>
      </form>
        </div>
    </div>
  </div>
    
</td>       
</tr>
`
).join('')

const inputUsers = document.querySelectorAll('input[name="user"]');
const buttonDeleted = document.getElementById('buttonDeleted')
/* buttonDeleted.disabled = true */

let inputChangeUser = ''

const editFunction = (event) => {
 const { value } = event.target;
 inputChangeUser = value
}

inputUsers.forEach((inputUser) => {
  inputUser.addEventListener('input', editFunction);
});

const editUser = (id) => {
 const userEditIndex = usersLocalStorage.findIndex((user) => user.id === id) 
  usersLocalStorage[userEditIndex].user = inputChangeUser
  localStorage.setItem('arrayUsuarios', JSON.stringify(usersLocalStorage))
  inputChangeUser = ''
  location.reload()

}

const deleteUser = (id) => {
 console.log(id)
 const userFilter = usersLocalStorage.filter((user) => user.id !== id)
 localStorage.setItem('users', JSON.stringify(userFilter))
 location.reload()
}

/* const deleteUser = (id) => {
  const userIndex = usersLocalStorage.findIndex((user) => user.id === id)
  usersLocalStorage[userIndex].deleted = true
  localStorage.setItem('users', JSON.stringify(usersLocalStorage))
  location.reload()
 } */

/* const logout = () => {
  usersLocalStorage[userIndex].login = false
  localStorage.setItem('users', JSON.stringify(usersLocalStorage))
  location.href = '../index.html'
}

buttonLogout.addEventListener('click', logout) */