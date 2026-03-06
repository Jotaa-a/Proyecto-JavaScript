import { courses } from "../Scripts/dataBase.js";

const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")
const docentesBTN = document.getElementById("botonDocentes")
const cerrarModal =document.getElementById("cerrarModal")
const contenidoDocentes = document.getElementById("docentes")

localStorage.setItem('cursos', JSON.stringify(courses));

const lista = JSON.parse(localStorage.getItem('cursos'));
const tablaDocentes =document.getElementById("bodytabla");


docentesBTN.addEventListener("click", () => {
        contenidoDocentes.classList.add("active");
    })

cerrarModal.addEventListener("click", () => {
    contenidoDocentes.classList.remove("active");
});

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



