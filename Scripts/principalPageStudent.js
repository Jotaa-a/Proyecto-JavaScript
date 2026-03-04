const courseCard = document.querySelector('.small-card__link-course');
courseCard.addEventListener('click', () => {
    window.location.href = courseCard.dataset.href;
});

const calificationsCard = document.querySelector('.small-card__link-califications');
calificationsCard.addEventListener('click', () => {
    window.location.href = calificationsCard.dataset.href;
});