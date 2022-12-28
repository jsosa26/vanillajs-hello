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

let pronoun = ["El", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".es", ".net", "org"];

function getAllCombinations(lista_1, lista_2, lista_3, lista_4) {
  let domain = "";
  let domains = [];
  lista_1.forEach(l1 => {
    lista_2.forEach(l2 => {
      lista_3.forEach(l3 => {
        lista_4.forEach(l4 => {
          domain = `${l1}${l2}${l3}${l4}`;
          domains.push(domain);
          console.log(domain);
        });
      });
    });
  });
  return domains;
}
