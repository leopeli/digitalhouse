let title = document.getElementById("titular");
title.style.display = "none";

let owl = document.querySelector("#lechuza");
owl.style.filter = "grayscale(100%)";

let input = document.querySelectorAll("input");
input.forEach(function(elem) {
  elem.style.background = "#f00";
});

let copy = document.querySelector("#copyright");
console.log(copy.attributes);

let whatSocial = ["fa-facebook", "fa-twitter"];

whatSocial.forEach(function(elem) {
  var whatSocial = document.querySelector(`.${elem}`)
  console.log(whatSocial.getAttribute('href'))
})

let youtube = document.querySelector('.fa-youtube')
youtube.setAttribute('href', 'http://youtube.com')
console.log(youtube.getAttribute('href'))
