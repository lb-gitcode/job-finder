'use strict';

import { select, getElement, listen, publish, getUsers} from "./utils.js";

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
const user = new Subscriber("Rone Kohut", "RoninTheDev", "NoviceProgrammer87@gmail.com", "(204) 807-9361", ['Programming', 'Kirby', 'Game development'], ['Siege of Popstar'], false);

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

let users = await getUsers("https://randomuser.me/api/?nat=CA&results=10&seed=same");

console.log(users);

let icon = null;
let name = null;
let state = null;
let country = null;
const nums = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
for (let i = 0; i < users.length; i++) {
  icon = select(`.icon-${nums[i]}`);
  name = select(`.name-${nums[i]}`);
  state = select(`.state-${nums[i]}`);
  country = select(`.country-${nums[i]}`);

  //icon = users[i].picture.thumbnail;
  name.innerText = `${users[i].name.first} ${users[i].name.last}`;
  state.innerText = users[i].location.state;
  country.innerText = users[i].nat;
}
