let accName = document.querySelector('.nameField')
let accEmail = document.querySelector('.emailField')
let accUsername = document.querySelector('.usernameField')
let accPassword = document.querySelector('.passwordField')

let nameErr = document.getElementsByClassName('.nameErr')

let submit = document.getElementById('submit')

let form = document.getElementById('form')

document.addEventListener('submit', () => {
    
    let errors = []

    if(accName.innerText === '' || accName.innerText == null){
        errors.push('name field cannot be empty')
        nameErr.innerText = errors
    }

    if(errors.length > 0){
        console.log('no errors')
    }
})