import { courses } from "../Scripts/dataBase.js";

const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")
const docentes = document.getElementById("botonDocentes")


localStorage.setItem('cursos', JSON.stringify(courses));

const lista = JSON.parse(localStorage.getItem('cursos'));
const tablaDocentes =document.getElementById("bodytabla");

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


