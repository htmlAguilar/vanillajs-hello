/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log("Hello Rigo from the console!");
//};

// Define arrays for pronouns, adjectives, nouns, and extensions
let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

// Function to generate a random domain name
function generateRandomDomainName() {
  let pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  let noun = nouns[Math.floor(Math.random() * nouns.length)];
  let extension = extensions[Math.floor(Math.random() * extensions.length)];
  return pronoun + adjective + noun + extension;
}

// Function to display domain name on the webpage
function displayDomainName(domainName) {
  let domainNameDiv = document.getElementById("domainName");
  domainNameDiv.textContent = domainName;
}

// Event listener for generate button click
document.getElementById("generateButton").addEventListener("click", function() {
  let randomDomainName = generateRandomDomainName();
  displayDomainName(randomDomainName);
});
