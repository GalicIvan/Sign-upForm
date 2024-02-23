let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirm_password')
let first_name = document.querySelector('#first_name')
let last_name = document.querySelector('#last_name')

function getValue() {
    let form = document.getElementById("myForm")
    
    let passwordInput = form.elements["password"]
    let value = passwordInput.value
    let confirmPasswordInput = form.elements["confirm_password"]
    let value2 = confirmPasswordInput.value

    if (value === value2) {
        passwordInput.style.borderColor = 'green'
        confirmPasswordInput.style.borderColor = 'green'
    } else {
        passwordInput.style.borderColor = 'red'
        confirmPasswordInput.style.borderColor = 'red'
    }
  }


  