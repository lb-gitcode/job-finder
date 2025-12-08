'use strict';

import { select, selectAll, getElement, listen, getCookie, setCookie } from "./utils.js";

let username = "NoviceProgrammer87@gmail.com";
let password = "DontVibeCode01";
let loggedIn = false;

const login = getElement("login-btn");
const usernameInput = getElement("user-email");
const passwordInput = getElement("user-password");
const error = getElement("errorMsg");

listen('click', login, function() {
  if (usernameInput.innerText == "" && passwordInput.innerText == "") {
    error.innerText = "Error: Please enter your Credentials or Sign Up!";
  } else if (usernameInput.innerText == "") {
    error.innerText = "Error: Please enter your Email or Phone!";
  } else if (passwordInput.innerText == "") {
    error.innerText = "Error: Please enter your Password!";
  }else if (usernameInput.innerText == username && passwordInput.innerText == password) {
    loggedIn = true;
    setCookie("loggedIn", true, none);
  } else {
    error.innerText = "Error: One or more of your Credentials are incorrect!";
  }
})
