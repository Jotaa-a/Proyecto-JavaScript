const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")


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