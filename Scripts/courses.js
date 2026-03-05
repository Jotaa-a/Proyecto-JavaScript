/*Course Database*/

const courses = [
    {
        id: 'modalIntro',
        title: 'Introduccion a la Progamación',
        info: 'Fundamentos de lógica, algoritmos y programación orientada a objetos usando Python',
        profesor: 'Carlos Martínez',
        img: '../media/Carlos-Martinez.png',
        score: 90
    },
    {
        id: 'modalDesign',
        title: 'Diseño Web',
        info: 'Principios de maquetación con HTML y CSS, diseño responsive y nociones básicas de UI/UX',
        profesor: 'Laura Gómez',
        img: '../media/Luarua-Gomez.png',
        score: 90
    },
    {
        id: 'modalBD',
        title: 'Base de Datos',
        info: 'Modelado entidad-relación, normalización y consultas con SQL en sistemas gestores como MySQL',
        profesor: 'Andrés Herrera',
        img: '../media/Andres-Herrera.png',
        score: 90
    },
    {
        id: 'modalnglés',
        title: 'Inglés Técnico',
        info: 'Lectura y compresión de documentación técnica, vocabulario y escritura de reportes en inglés',
        profesor: 'Sandra Ríos',
        img: '../media/sandra-Rios.png',
        score: 90
    }

]

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

/* Button go back */
const portalStudent = document.querySelector('.head-fluid__h4');
portalStudent.addEventListener('click', () => {
    window.location.href = portalStudent.dataset.href;
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
