let divCurso = document.getElementById('cursos')

let meuTitulo = document.createElement('h1')
let textoTitulo = document.createTextNode('Cursos')

meuTitulo.appendChild(textoTitulo)
divCurso.appendChild(meuTitulo)

//**************************

let minhaLista = document.createElement('ul');
divCurso.appendChild(minhaLista)

let listaCursos = [
  "FullStack",
  "Marketing",
  "Mobile",
  "Data Science",
]

for (curso of listaCursos) {
  let itemLi = document.createElement('li');
  let itemTexto = document.createTextNode(curso)

  itemLi.appendChild(itemTexto);
  minhaLista.appendChild(itemLi);
}