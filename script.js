
//form popup//
const loginBtn = document.querySelector('.sign-in');
const closeBtn = document.querySelector('.close');

function showForm(){
    document.querySelector('.overlay').classList.add('showoverlay');
         document.querySelector('.form').classList.add('showform');
}
function closeForm(){
    document.querySelector('.overlay').classList.remove('showoverlay');
         document.querySelector('.form').classList.remove('showform');
}

loginBtn.addEventListener('click',showForm);
closeBtn.addEventListener('click',closeForm);

closeBtn.addEventListener('click', () => {
    window.location.reload();
});


//add cart button function//
const addcart = document.querySelectorAll('.add');

addcart.forEach(button => {
    button.addEventListener('click', () => {
        alert('added to cart');
    })
});



//form validation//
const form = document.getElementById('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

const errors = document.querySelectorAll('.error-message');

function isValidEmail(emailValue){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailValue);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Clear all errors first
    errors.forEach(error => error.innerHTML = "");

    // Name validation
    if (name.value.trim() === "") {
        errors[0].innerHTML = "Name is required";
        name.style.border = "2px solid red";
        isValid = false;
    }else {
        errors[0].innerHTML = "";
        name.style.border = "2px solid green";

    }

    // Email validation
    if (email.value.trim() === "") {
        errors[1].innerHTML = "Email is required";
        email.style.border = "2px solid red";
        isValid = false;
    }else if (!isValidEmail(email.value.trim())) {
        errors[1].innerHTML = "Required exact email address";
        email.style.border = "2px solid red";

        isValid = false;
    }else {
        errors[1].innerHTML = "";
        email.style.border = "2px solid green";

    }

    // Password validation
    if (password.value.trim() === "") {
        errors[2].innerHTML = "Password is required";
        password.style.border = "2px solid red";
        isValid = false;
    }else if(password.value.length < 8){
        errors[2].innerHTML = "Password must contain 8 characters";
        password.style.border = "2px solid red";
        isValid = false;
    }else {
        errors[2].innerHTML = "";
        password.style.border = "2px solid green";

    }

    // Confirm password validation
    if (password1.value.trim() === "") {
        errors[3].innerHTML = "Confirm password is required";
        password1.style.border = "2px solid red";
        isValid = false;
    } else if (password.value !== password1.value) {
        errors[3].innerHTML = "Passwords do not match";
        password1.style.border = "2px solid red";
        isValid = false;
    }else {
        errors[3].innerHTML = "";

        password1.style.border = "2px solid green";
    }

    //if all valid // 
    if (isValid) {
        alert("Your account created sucessfully");
        form.submit();
    }
});

//contact//






