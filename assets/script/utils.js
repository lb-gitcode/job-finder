'use strict';

//functions grabbed from notes.
export function setCookie(name, value, maxAge) {
  const options = {
    path: '/',
    SameSite: 'Lax'
  };
  if (maxAge) {
    options.maxAge = maxAge;
  }
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  for (let option in options) {
    cookieString += `; ${option}=${options[option]}`;
  }
  document.cookie = cookieString;
}

export function publish(text, image, time, publisher, feed) {
  if (image != "" && text != "") {
    feed.innerHTML += `<div class="post white-box"><div class="poster-info flex"><div class="user-icon"></div><p class="poster-name">${publisher}</p><p class="poster-time">${time}</p></div><p>${text}</p><img class="chatImg" src=${image}></div>`;
  } else if (image == "") {
    feed.innerHTML += `<div class="post white-box"><div class="poster-info flex"><div class="user-icon"></div><p class="poster-name">${publisher}</p><p class="poster-time">${time}</p></div><p>${text}</p></div>`;
  } else if (text == "") {
    feed.innerHTML += `<div class="post white-box"><div class="poster-info flex"><div class="user-icon"></div><p class="poster-name">${publisher}</p><p class="poster-time">${time}</p></div><img class="chatImg" src=${image}></div>`;
  }
}

export function getCookie(name) {
  if (document.cookie != null) {
    const cookies = document.cookie;
    let test = false;
    for (let i in cookies) {
      if (i == ";") {
        test = true;
        break;
      }
    }
    if (test == true) {
      cookies = cookies.split(';');
      for (let cookie in cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
        if (decodeURIComponent(cookieName) === name) { 
          return decodeURIComponent(cookieValue);
        }
      }
    } else {
      const [cookieName, cookieValue] = cookies.split('=').map(c => c.trim());
      if (decodeURIComponent(cookieName) === name) { 
        return decodeURIComponent(cookieValue);
      }
    }
  }
  return null;
}

export async function getUsers(endpoint) {
  let data = null;
  const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/JSON; charset=UTF-8'
    },
    mode: 'cors'  
  }
  try {
    const result = await fetch(endpoint, options);
    if(!result.ok) {
      throw new error(`${result.status}: ${result.statusText}`)
    }

    data = await result.json();
    return data.results;

  } catch(error) {
    console.log(error.message);
  }
}

export function getElement(selector, scope = document) { return scope.getElementById(selector); }

export function select(selector, scope = document) { return scope.querySelector(selector); }

export function selectAll(selector, scope = document) { return [...scope.querySelectorAll(selector)]; }

export function listen(event, selector, callback) { return selector.addEventListener(event, callback); }