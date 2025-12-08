'use strict';

//functions grabbed from notes.
function setCookie(name, value, maxAge) {
  const options = {
    path: '/',
    SameSite: 'Lax'
  };

  if (maxAge) {
    options.maxAge = maxAge;
  }

  let cookieString = `encodeURIComponent(${name})=encodeURIComponent(${value})`;
  for (let option in options) {
    cookieString += `; ${option}=${options[option]}`;
  }

  document.cookie = cookieString;
}

function getCookie(name) {
  const cookies = document.cookies.split(';');
  for (let cookie in cookies) {
    const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
    
    if (decodeURIComponent(cookieName) === name) { 
      console.log(decodeURIComponent(cookieValue));
    }
  }
}

export function getElement(selector, scope = document) { return scope.getElementById(selector); }

export function select(selector, scope = document) { return scope.querySelector(selector); }

export function selectAll(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }

export function listen(event, selector, callback) { return selector.addEventListener(event, callback); }