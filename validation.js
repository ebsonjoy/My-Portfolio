let nameError = document.getElementById("name-error");
let lnameError = document.getElementById("lname-error");
let emailError = document.getElementById("email-error");
let subjectError = document.getElementById("subject-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        nameError.innerHTML = "Use only Aplhabets";
        return false;
    }
        nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
        return true
    
}

function validateEmail(){
    let email = document.getElementById("email").value;

    if (email.length == 0) {
      emailError.innerHTML = "Email is required"  
      return false
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = "Email Invalid"
        return false;
    }

    emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
    return true;
}

function validateMessage(){
    let message = document.getElementById("message").value;
    let required = 30;
    let left = required - message.length;

    if (left > 0){
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    return true;
}

function validateForm(){
     if(!validateName() || !validateMessage() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error to submit';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
     }
}

// function validateLastName(){
//     let lastName = document.getElementById("lname").value;

//     if (lastName.length == 0) {
//         lnameError.innerHTML = "Last name is required";
//         return false;
//     }
//     if(!lastName.match(/^[A-Za-z]*$/)){
//         lnameError.innerHTML = "Use only Aplhabets";
//         return false;
//     }
//         lnameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
//         return true
// }
function validateSubject(){
    let subject = document.getElementById("subject").value;

    if (subject.length == 0) {
        subjectError.innerHTML = "Subject is required";
        return false;
    }
        subjectError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
        return true
}