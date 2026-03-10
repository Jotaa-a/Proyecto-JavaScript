import { courses } from "./dataBase.js";

if(!localStorage.getItem("cursos")){
    localStorage.setItem("cursos", JSON.stringify(courses));
}

const contenedor = document.querySelector('.reports__cards')


const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));
cursosGuardados.forEach(curso => {
    contenedor.innerHTML += `
        <div class="report__card" 
            data-title="${curso.title}"
            data-img="${curso.img}">
            <img class="report-card__logo" src="${curso.img}" alt="">
            <span class="report-card__subject">${curso.title}</span>
        </div>
    `;
});



/* Modal Cards*/
const modal = document.getElementById('report__modal');
const modalInfo = document.getElementById('modalInfo')
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalProfesorName = document.getElementById('modalProfesorName')
const modalProfesorImg = document.getElementById('modalProfesorImg')

function openModal(card) {
    modalTitle.textContent = card.dataset.title;
    modalInfo = card.dataset.info;
    modalProfesorName.textContent = card.dataset.profesor;
    modalProfesorImg.src = card.dataset.img;
    modal.classList.add('active');
}

/*Open modals*/
document.querySelectorAll('.report__card').forEach(card => {
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


// const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));
// cursosGuardados.forEach(curso => {
//     contenedor.innerHTML += `
//         <div class="course__card" 
//             data-title="${curso.title}"
//             data-modulos="${curso.modulos}"
//             data-lecciones="${curso.modulos.lecciones}"
            
//             data-img="${curso.img}">
//             <img class="course-card__logo" src="${curso.img}" alt="">
//             <span class="course-card__subject">${curso.title}</span>
//             <span class="course-card__module">${curso.modulos.nombre}</span>
//             <span class="course-card__lection">${curso.modulos.lecciones}</span>
            
//         </div>
//     `;
// });