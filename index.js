


function login() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  console.log(email.value);

  console.log(password.value);
}



let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    login();
    
})