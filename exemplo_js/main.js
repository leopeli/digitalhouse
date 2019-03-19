let fruta = ""

const getFruta = document.getElementById('teste').value

function fazerFruta() {
  switch (getFruta) {
    case "banana":
      console.log("Vitamina");
      break;
    case "limão":
      console.log("caipirinha");
      break;
    default:
      console.log("faz suco");
  }
}

