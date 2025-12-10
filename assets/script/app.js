'use strict';

import { select, getElement, listen, publish} from "./utils.js";

class User {
  #name = "";
  #userName = "";
  #email = "";
  #id = "";
  constructor(name, userName, email, id) {
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
    this.#id = id;
  }
  getUserName() {
    return this.#userName;
  }
  getInfo() {
    let info = Array(this.#name, this.#userName, this.#email, this.#id);
    return info;
  }
}
class Subscriber extends User {
  #groups = [];
  #pages = [];
  #canMonetize = false;
  constructor(name, userName, email, id, groups, pages, canMonetize) {
    super(name, userName, email, id);
    this.#groups = groups;
    this.#pages = pages;
    this.#canMonetize = canMonetize;
  }
}

const feed = getElement("post-feed");
const send = getElement("post-btn");
const inputText = getElement("new-post-text");
const target = select(".target");
const username = select(".username");
const user = new Subscriber("Rone Kohut", "RoninTheDev", "NoviceProgrammer87@gmail.com", "000001", ['Programming', 'Kirby', 'Game development'], ['Siege of Popstar'], false);

username.innerText = user.getUserName();

listen('click', send, function() {
  let inputImg = "";
  if (target.files[0] != null) {
    inputImg = URL.createObjectURL(target.files[0]);
  }
  let date = new Date;
  let time = date.toDateString();
  time = time.slice(3, time.length - 5) + "," + time.slice(time.length - 5, time.length);
  let name = user.getUserName();
  publish(inputText.value, inputImg, time, name, feed);
  inputText.value = "";
})