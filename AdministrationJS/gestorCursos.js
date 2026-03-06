import { courses } from "../Scripts/dataBase.js";

/*Gestor cursos ids*/
const btnCrear = document.getElementById('btnGestorCuros');
const modalCursos = document.getElementById('modalCursos');
const cerrarModalCurso = document.getElementById('closeModalCurso');
const btnGuardar = document.getElementById('btnGuardarCurso');
const tablaCursos = document.getElementById('tablaCursos');
const modalCursoTitulo = document.getElementById('modalCursoTitulo');
const profileOp = document.getElementById('profile');
const modalProfile = document.getElementById('modalProfile');
const closeSesion = document.getElementById('closeSesion');

/*Gestor cursos*/

let cursoEditandoIndex = null;

function cargarTabla() {
    const lista = JSON.parse(localStorage.getItem('cursos')) || [];
    tablaCursos.innerHTML = '';

    lista.forEach((curso, index) => {
        tablaCursos.innerHTML += `
            <tr
                data-title="${curso.title}"
                data-profesor="${curso.profesor}"
                data-sesions="${curso.sesions}"
                data-score="${curso.score}">

                <td>${curso.title}</td>
                <td>${curso.profesor}</td>
                <td>${curso.sesions}</td>
                <td>
                    <button onclick="editarCurso(${index})">Editar</button>
                    <button onclick="eliminarCurso(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
};

/* Abrir modal para crear*/
btnCrear.addEventListener('click', () => {
    cursoEditandoIndex = null;
    modalCursoTitulo.textContent = 'Crear Curso';
    document.getElementById('inputTitle').value = '';
    document.getElementById('inputProfesor').value = '';
    document.getElementById('inputInfo').value = '';
    document.getElementById('inputScore').value = '';
    document.getElementById('inputSesions').value = '';
    modalCursos.classList.add('active');
});

/*cerrar Modal*/
cerrarModalCurso.addEventListener('click', () => {
    modalCursos.classList.remove('active');
});

modalCursos.addEventListener('click', (e) => {
    if (e.target === modalCursos) modalCursos.classList.remove('active');
});

/*Guardar cambios cursos*/
btnGuardar.addEventListener('click', () => {
    const lista = JSON.parse(localStorage.getItem('cursos')) || [];

    const cursoDato = {
        title: document.getElementById('inputTitle').value,
        profesor: document.getElementById('inputProfesor').value,
        info: document.getElementById('inputInfo').value,
        score: document.getElementById('inputScore').value,
        sesions: document.getElementById('inputSesions').value,
        img: document.getElementById('inputImg').value
    };

    if (cursoEditandoIndex != null) {
        lista[cursoEditandoIndex] = cursoDato;
    }else {
        lista.push(cursoDato);
    }

    localStorage.setItem('cursos', JSON.stringify(lista));
    modalCursos.classList.remove('active');
    cargarTabla();
});

/*editar cursos*/
window.editarCurso = function(index) {
    const lista = JSON.parse(localStorage.getItem('cursos')) || [];
    const curso = lista[index];
    cursoEditandoIndex = index;

    modalCursoTitulo.textContent = "Editar Curso";
    document.getElementById('inputTitle').value = curso.title;
    document.getElementById('inputProfesor').value = curso.profesor;
    document.getElementById('inputInfo').value = curso.info;
    document.getElementById('inputScore').value = curso.score;
    document.getElementById('inputSesions').value = curso.sesions;
    modalCursos.classList.add('active');
};

/*eliminar cursos*/

window.eliminarCurso = function(index) {
    if (!confirm('¿Seguro que quieres eliminar este curso?')) return;
    const lista = JSON.parse(localStorage.getItem('cursos')) || [];
    lista.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(lista));
    cargarTabla();
}

/*volver al login*/

profileOp.addEventListener('click', () => {
    modalProfile.classList.add('active')
})

document.addEventListener('click', (e) => {
    if (!modalProfile.contains(e.target) && e.target !== profile) {
        modalProfile.classList.remove('active');
    }
});

closeSesion.addEventListener('click', () => {
    window.location.replace('../index.html')
})

cargarTabla();