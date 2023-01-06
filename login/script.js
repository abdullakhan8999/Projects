//variable

//signUP variable
const SignUp_UserName = getElementId("SignUp_UserName");

const SignUp_email = getElementId("SignUp_email");

const SignUp_Password = getElementId("SignUp_Password");

const SignUp_RepeatPassword = getElementId("SignUp_RepeatPassword");

const SignUp_terms = getElementId("SignUp_terms");

const SignUp_Btn = getElementId("SignUp_Btn");

const Login_Link = getElementId("Login_Link");

// login variable
const loginUserName = getElementId("loginUserName");

const loginPassword = getElementId("loginPassword");

const loginBtn = getElementId("loginBtn");

const signUpLink = getElementId("signUpLink");

//event
signUpLink.addEventListener("click", showSignup);
Login_Link.addEventListener("click", showLogin);

//function
function getElementId(id) {
  return document.getElementById(id );
}

function showSignup() {
  signUp.classList.remove("d-none");
  logIn.classList.add("d-none");
}

function showLogin() {
  logIn.classList.remove("d-none");
  signUp.classList.add("d-none");
}
