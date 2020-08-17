document.querySelectorAll('.form-element[data-error] .input').forEach(inpEl => {
    inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'))
})    

function hideError(errorName){    
    document.getElementById(errorName).innerHTML = "";
}

function onSubmit(){
    let flag=false
    let username = document.getElementById('username').value
    let errorUsername = document.getElementById('errorUsername')

    let phone = document.getElementById('phone').value
    let errorPhone = document.getElementById('errorPhone')

    let password = document.getElementById('password').value
    let errorPassword = document.getElementById('errorPassword')

    let confirmPassword = document.getElementById('confirmPassword').value
    let errorCPassword = document.getElementById('errorCPassword')
    
    if(username.length < 5){
        
        errorUsername.innerHTML = "User name should be of at-least 5 character"
    }else{
        errorUsername.innerHTML = ""
    }

    console.log(phone.length)
    if(phone.length != 10){
        errorPhone.innerHTML = "Phone number should be of 10 digits"
    }else{
        errorPhone.innerHTML = ""
    }

    if(password == 0){
        errorPassword.innerHTML = "Please enter valid password (min 8 and max 12)"
    }
    else if(password.length <= 8 && password.length >= 12){
        errorPassword.innerHTML = "password should be of >=8 char and <12 char"
    }else{
        errorPassword.innerHTML = ""
    }

    if(password != confirmPassword){
        errorCPassword.innerHTML = "password does not match"
    }else {
        errorCPassword.innerHTML = ""
    }
}