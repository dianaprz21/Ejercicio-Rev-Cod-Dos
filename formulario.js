var formulario = document.querySelector("#form")

formulario.onsubmit = function (e) {

  e.preventDefault();

  var n = formulario.elements[0];
  var age = formulario.elements[1]; /* renombré la variable porque ya existía una igual */
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = age.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  //////////////////////////////////////////////////////

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
  var nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "per": "Peruana",
    "vnzl": "Venezolana"
  };
  nacionalidad = nacionalidades[nacionalidad];
  /* Aquí lo que hice fue refactorizar el código y convertir lo que eran varios ifs
  para asignar valores, lo hice un objeto y luego lo igualé a la variable nacionalidad */

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // Aquí estaba mal escrita la palabra add
  lista.appendChild(elementoLista);

/* Eliminé un pedazo de código porque se repetía lo mismo que esta en la función de crearElemento */

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  };
}