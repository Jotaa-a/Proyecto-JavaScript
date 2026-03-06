import { courses } from "./dataBase.js";

const courseCard = document.querySelector('.small-card__link-course');
courseCard.addEventListener('click', () => {
    window.location.href = courseCard.dataset.href;
});

const calificationsCard = document.querySelector('.small-card__link-califications');
calificationsCard.addEventListener('click', () => {
    window.location.href = calificationsCard.dataset.href;
});

const lectionsCard = document.querySelector('.small-card__link-lections');
lectionsCard.addEventListener('click', () => {
    window.location.href = lectionsCard.dataset.href;
});

/*Score average*/
const totalScores = courses.reduce((suma, curso) => suma + curso.score, 0); /*reduce similar a forEach pero va acumulando*/
const scoreAv = (totalScores / courses.length).toFixed(1); /*toFixed para la cantidad de decimales*/

document.getElementById('scoreAV').textContent = scoreAv;