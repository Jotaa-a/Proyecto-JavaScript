const portalStudent = document.querySelector('.head-fluid__h4');
portalStudent.addEventListener('click', () => {
    window.location.href = portalStudent.dataset.href;
})