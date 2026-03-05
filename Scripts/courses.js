import { courses } from "./dataBase.js";

/* Button go back */
const portalStudent = document.querySelector('.head-fluid__h4');
portalStudent.addEventListener('click', () => {
    window.location.href = portalStudent.dataset.href;
});

localStorage.setItem('cursos', JSON.stringify(courses));


const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));
const contenedor = document.querySelector('.courses__cards');

cursosGuardados.forEach(curso => {
    contenedor.innerHTML += `
        <div class="course__card" 
            data-title="${curso.title}"
            data-info="${curso.info}"
            data-profesor="${curso.profesor}"
            data-img="${curso.img}">
            <img class="course-card__logo" src="${curso.img}" alt="">
            <span class="course-card__subject">${curso.title}</span>
            <span class="course-card__score">${curso.score}</span>
        </div>
    `;
});

/* Modal Cards*/
const modal = document.getElementById('courses__modal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalInfo = document.getElementById('modalInfo');
const modalProfesorName = document.getElementById('modalProfesorName')
const modalProfesorImg = document.getElementById('modalProfesorImg')

function openModal(card) {
    modalTitle.textContent = card.dataset.title;
    modalInfo.textContent = card.dataset.info;
    modalProfesorName.textContent = card.dataset.profesor;
    modalProfesorImg.src = card.dataset.img;
    modal.classList.add('active');
}

/*Open modals*/
document.querySelectorAll('.course__card').forEach(card => {
    card.addEventListener('click', () => openModal(card));
})

/*Close modals*/
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
