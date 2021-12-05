let accName = document.querySelector('.nameField')
let accEmail = document.querySelector('.emailField')
let accUsername = document.querySelector('.usernameField')
let accPassword = document.querySelector('.passwordField')

let signUp = document.getElementById('signUpButton')
let signIn = document.getElementById('signInButton')

let form = document.getElementById('form')

let nameErr = document.querySelector('.nameErr')
let passErr = document.querySelector('.passErr')


var users = [
    {
        name:'stan',
        email:'sjgogan@me.com',
        username:'stang123',
        password:'apple123',
    },
    {
        name:'',
        email:'',
        username:'',
        password:'',
    }
]

function submitForm(){
    const user = document.querySelector('.signInUsernameField').value
    const pass = document.querySelector('.signInPasswordField').value

    if(user === users[0].username && pass === users[0].password){
        window.location.replace("./account.html");
    }else{
        console.log('nope user')
    }

    if(user != users[0].username){
        nameErr.innerText = 'invalid username'
        console.log('wrong')
    }

    if(pass != users[0].password){
        passErr.innerText = 'invalid password'
        console.log('wrong')
    }
}

signIn.addEventListener('click', function(){

    submitForm()

})