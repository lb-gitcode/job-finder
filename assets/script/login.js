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
  if (usernameInput.value == "" && passwordInput.value == "") {
    error.innerText = "Error: Please enter your Credentials or Sign Up!";
  } else if (usernameInput.value == "") {
    error.innerText = "Error: Please enter your Email or Phone!";
  } else if (passwordInput.value == "") {
    error.innerText = "Error: Please enter your Password!";
  }else if (usernameInput.value == username && passwordInput.value == password) {
    loggedIn = true;
    setCookie("loggedIn", true, none);
  } else {
    error.innerText = "Error: One or more of your Credentials are incorrect!";
  }
})
