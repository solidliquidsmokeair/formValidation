let accName = document.querySelector('.nameField')
let accEmail = document.querySelector('.emailField')
let accUsername = document.querySelector('.usernameField')
let accPassword = document.querySelector('.passwordField')

let signInName = document.querySelector('.signInUsernameField')
let signInPassword = document.querySelector('.signInPasswordField')

let signUp = document.getElementById('signUpButton')
let signIn = document.getElementById('signInButton')

let form = document.getElementById('form')

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

    let nameErr = document.querySelector('.nameErr')
    let passErr = document.querySelector('.passErr')

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

    // if(user.innerText === users[0].username && signInPassword.innerText === users[0].password){
    //     console.log('hooray')
    // }

// console.log('hello')
}

signIn.addEventListener('click', function(){

    submitForm()

})