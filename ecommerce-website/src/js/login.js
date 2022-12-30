//variable
const loginPage = getElementID("loginPage");

const loginForm = getElementID("loginForm");

const signupForm = getElementID("signupForm");

const showLoginBtn = getElementID("showLoginBtn");

const showSignupBtn = getElementID("showSignupBtn");

const loginUsername = getElementID("loginUsername");

const signupUsername = getElementID("signupUsername");

const signupEmail = getElementID("signupEmail");

const loginPassword = getElementID("loginPassword");

const signupPassword = getElementID("signupPassword");

const signupBtn = getElementID("signupBtn");

const loginBtn = getElementID("loginBtn");

const authErrMsg = getElementID("authErrMsg");

const succErrMsg = getElementID("succErrMsg");

//events
showSignupBtn.addEventListener("click", showSignup);

showLoginBtn.addEventListener("click", showLogin);

signupBtn.addEventListener("click", signupFn);

loginBtn.addEventListener("click", loginFu);

//function
function getElementID(id) {
  return document.getElementById(id);
}

// Fn

function showSignup() {
  signupForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
}

function showLogin() {
  loginForm.classList.remove("d-none");
  signupForm.classList.add("d-none");
}

function signupFn() {}

function loginFu() {}
