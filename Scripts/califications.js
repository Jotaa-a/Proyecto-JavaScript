import { courses } from "./dataBase.js";


const portalStudent = document.querySelector('.head-fluid__h4');
const contenedor = document.querySelector('.body-fluid__subjects');
portalStudent.addEventListener('click', () => {
    window.location.href = portalStudent.dataset.href;
});

if(!localStorage.getItem("cursos")){
    localStorage.setItem("cursos", JSON.stringify(courses));  /*Si no existe cursos en localStorage → entonces guardar el array original*/
}  

const lista = JSON.parse(localStorage.getItem("cursos"));


lista.forEach(curso => {
    contenedor.innerHTML += ` 
        <div class="body-fluid__subject"
            data-title="${curso.title}"
            data-score="${curso.score}"
            data-sesions="${curso.sesions}"
            data-professor="${curso.profesor}"}
            <p class="subject_title">${curso.title}</p>
            <p class="subject_score">${curso.score}</p>
            <p class="subject_sesions">${curso.sesions}</p>
            <p class="subject_professor">${curso.profesor}</p>
        </div>  
    `;
});