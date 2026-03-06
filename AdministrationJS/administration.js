import { courses } from "../Scripts/dataBase.js";

/*Gestor docentes ids*/
const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")
const docentes = document.getElementById("botonDocentes")
const cerrarModal =document.getElementById("cerrarModal")
const contenidoDocentes = document.querySelector(".contenido-docentes")

/*Gestor cursos ids*/



localStorage.setItem('cursos', JSON.stringify(courses));

const lista = JSON.parse(localStorage.getItem('cursos'));
const tablaDocentes =document.getElementById("bodytabla");


docentes.addEventListener("click", () => {
        contenidoDocentes.classList.add("activo");
    })

//El += agrega sin borrar lo anterior. = solo lo hace una vez
// data-set, guarda la informacion por decir invisiblemente
lista.forEach(i => {
    tablaDocentes.innerHTML += `
        <tr 
            data-name ="${i.profesor}"  
            data-curso = "${i.title}"
            data-duracion = "${i.sesions}"
            data-imagen = "${i.img}">
            
            <td >
                <img class="imagenDocente" src="${i.img}">
            </td>
            <td>${i.profesor }</td>
            <td>${i.title}</td>
            <td>${i.sesions}</td>
        </tr>
    `;
});

cerrarModal.addEventListener("click", () => {
    contenidoDocentes.classList.remove("activo");
});

/*Gestor cursos*/
