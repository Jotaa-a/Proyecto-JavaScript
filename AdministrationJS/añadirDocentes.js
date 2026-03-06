const abriragregarBTN = document.getElementById("agregarProfesor");
const agregarContainer = document.getElementById("form-agregar")
const cerrar = document.getElementById("cerraradd")
const anadir = document.getElementById("addBTN")

const inputProfesor = document.getElementById("nuevoProfesor");
const inputCurso = document.getElementById("nuevoCurso");
const inputDuracion = document.getElementById("nuevaDuracion");
const inputImagen = document.getElementById("nuevaImagen");

const lista = JSON.parse(localStorage.getItem("cursos")) || [];

abriragregarBTN.addEventListener("click", () => {
    agregarContainer.classList.add("active");
});

cerrar.addEventListener("click", () => {
    agregarContainer.classList.remove("active");
});

anadir.addEventListener("click", (e) => {

    e.preventDefault();

    const nuevo = {
        profesor: inputProfesor.value,
        title: inputCurso.value,
        sesions: inputDuracion.value,
        img: inputImagen.value
    };

    lista.push(nuevo);

    localStorage.setItem("cursos", JSON.stringify(lista));

    alert("Profesor añadido:", nuevo);

});