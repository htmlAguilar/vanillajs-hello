/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log("Hello Rigo from the console!");
//};

/* eslint-disable */
let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"]; // Adding extensions

window.onload = function() {
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let domainName = pronoun + adjective + noun + extension;
          console.log(domainName);
        }
      }
    }
  }
};
