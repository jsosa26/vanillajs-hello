/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domains = getAllCombinations(pronoun, adj, noun, extension);
  let output = document.getElementById("dominios");
  output.innerHTML = domains.join("<br>");
};

function getAllCombinations(lista_1, lista_2, lista_3, lista_4) {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".es", ".io", ".us"];
}
