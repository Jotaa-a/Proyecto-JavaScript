const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")

const cursosJS = [
  {
    curso: "Fundamentos de JavaScript",
    descripcion: "Introducción a JavaScript, variables, tipos de datos, condicionales y ciclos. Ideal para principiantes.",
    duracion: "20 horas",
    profesor: "Carlos Méndez"
  },
  {
    curso: "Manipulación del DOM con JavaScript",
    descripcion: "Aprende a interactuar con elementos HTML usando JavaScript, eventos y modificación dinámica de la página.",
    duracion: "15 horas",
    profesor: "Laura Rodríguez"
  },
  {
    curso: "JavaScript Intermedio",
    descripcion: "Profundización en funciones, arrays, objetos, callbacks y programación asincrónica básica.",
    duracion: "25 horas",
    profesor: "Andrés Salazar"
  },
  {
    curso: "JavaScript Moderno (ES6+)",
    descripcion: "Uso de características modernas como arrow functions, destructuring, modules, promises y async/await.",
    duracion: "18 horas",
    profesor: "Daniela Torres"
  },
  {
    curso: "Desarrollo Frontend con JavaScript",
    descripcion: "Construcción de aplicaciones web dinámicas integrando JavaScript con HTML, CSS y APIs.",
    duracion: "30 horas",
    profesor: "Miguel Herrera"
  }
];

localStorage.setItem("lista", JSON.stringify(cursosJS));
let Listacursos = JSON.parse(localStorage.getItem("lista"));

Listacursos.forEach(i => {

  const creardiv = document.createElement("div");

  creardiv.textContent =
    "Curso: " + i.curso +
    " | Duración: " + i.duracion +
    " | Profesor: " + i.profesor;

  visualizadorCursos.appendChild(creardivdiv);

});


let curso = "";
let descripcion = "";
let profesor = "";

botonCursos.addEventListener("click", () => {
        containerCursos.classList.add("activo");
})