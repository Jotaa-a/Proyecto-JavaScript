import { courses } from "./dataBase.js";

localStorage.setItem('cursos', JSON.stringify(courses));
const lista = JSON.parse(localStorage.getItem('cursos'));

let cursoSeleccionado = null;   
let moduloSeleccionado = null;  

const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', () => {
    window.location.href = btnVolver.dataset.href;
})

function mostrarVista(idVista) {
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('active'));
    document.getElementById(idVista).classList.add('active');
}