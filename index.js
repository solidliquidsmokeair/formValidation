let accName = document.querySelector('.nameField')
let accEmail = document.querySelector('.emailField')
let accUsername = document.querySelector('.usernameField')
let accPassword = document.querySelector('.passwordField')

let submit = document.getElementById('submit')

var users = [
    {
        id: 1,
        name: 'name',
        email: 'email',
        username: 'username',
        password: 'password',
    }
]

function validateInput (){
    if(accName.value.trim()==''){
        console.log('no name')
    }  else if(accEmail.value.trim()==''){
        console.log('no email')
    } else if(accUsername.value.trim()==''){
        console.log('no user')
    } else if(accPassword.value.trim()==''){
        console.log('no pass')
    } else{
        users[0].name = accName.value
        users[0].email = accEmail.value
        users[0].username = accUsername.value
        users[0].password = accPassword.value
    }
}

submit.addEventListener("click", function(event){
    event.preventDefault()
   validateInput()
})