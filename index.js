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

function validateInput (text){
    console.log(text)
}

submit.addEventListener("click", function(){
   validateInput(accEmail)
})