console.log('Teste arquivo externo');

let titulo = document.querySelector('h1');

titulo.style.color = 'orange';

// console.log(titulo);

let primeiroP = document.querySelector('.primeiro-paragrafo');
primeiroP.style.fontFamily = 'sans-serif';

let segundoP = document.querySelector('#segundo-paragrafo');
segundoP.style.textDecoration = 'underline';

let todosP = document.querySelectorAll('p');

console.log(todosP);

//todosP[0].style.color = 'red';
//todosP[1].style.color = 'red';

for (let i = 0; i < todosP.length; i++) {
    todosP[i].style.color = 'gray';
}

let meuLink = document.querySelector('a');

console.log(meuLink.getAttribute('href'));

meuLink.setAttribute('href', 'http://fronthendy.com.br');

meuLink.setAttribute('style', 'background: orange; color: white; padding: 10px');

// exemplo de eventos JS

let botao1 = document.querySelector('.botao1')
let botao2 = document.querySelector('.botao2')
let body = document.querySelector('body')

botao1.onclick = function() {
  alert('Clique 1')
}

botao2.onmouseover = function() {
  body.style.backgroundColor = 'red'
}

botao2.onmouseout = function() {
  body.style.backgroundColor = 'inherit';
}

