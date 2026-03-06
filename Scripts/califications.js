import { courses } from "./dataBase.js";

const portalStudent = document.querySelector('.head-fluid__h4');
portalStudent.addEventListener('click', () => {
    window.location.href = portalStudent.dataset.href;
});

localStorage.setItem('cursos', JSON.stringify(courses));

const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));
const contenedor = document.querySelector('.body-fluid__subjects');

cursosGuardados.forEach(curso => {
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