/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "my phone ", "the car "];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let str = who[Math.floor(Math.random() * 4)];
  str += action[Math.floor(Math.random() * 4)];
  str += what[Math.floor(Math.random() * 3)];
  str += when[Math.floor(Math.random() * 5)];
  console.log(str);
  document.getElementById("excuse").innerHTML = str;
};
