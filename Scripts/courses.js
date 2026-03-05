/* Button go back */
const portalStudent = document.querySelector('.head-fluid__h4');
portalStudent.addEventListener('click', () => {
    window.location.href = portalStudent.dataset.href;
});

/* Modal Cards*/
const modal = document.getElementById('courses__modal');
const modalClose = document.getElementById('modalClose');
const modalIntro = document.getElementById('modalIntro')
const modalDesign = document.getElementById('modalDesign')
const modalBD = document.getElementById('modalBD')
const modalIngles = document.getElementById('modelIngles')

/*Modal info cards*/

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

modalIntro.addEventListener('click', () => openModal(modalIntro));

modalDesign.addEventListener('click', () => openModal(modalDesign));

modalBD.addEventListener('click', () => openModal(modalBD));

modalIngles.addEventListener('click', () => openModal(modalIngles));

/*Close modals*/
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});
