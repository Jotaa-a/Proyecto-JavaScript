import { courses } from "../Scripts/dataBase.js";

/*Gestor docentes ids*/
const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")
const docentesBTN = document.getElementById("botonDocentes")
const cerrarModal =document.getElementById("cerrarModal")
const contenidoDocentes = document.querySelector(".contenido-docentes")

/*Gestor cursos ids*/
const btnCrear = document.getElementById('btnGestorCuros');
const modalCursos = document.getElementById('modalCursos');
const cerrarModalCurso = document.getElementById('closeModalCurso');
const btnGuardar = document.getElementById('btnGuardarCurso');
const tablaCursos = document.getElementById('tablaCursos');
const modalCursoTitulo = document.getElementById('modalCursoTitulo');


localStorage.setItem('cursos', JSON.stringify(courses));

const lista = JSON.parse(localStorage.getItem('cursos'));
const tablaDocentes =document.getElementById("bodytabla");


docentesBTN.addEventListener("click", () => {
        contenidoDocentes.classList.add("active");
    })

cerrarModal.addEventListener("click", () => {
    contenidoDocentes.classList.remove("active");
});

//El += agrega sin borrar lo anterior. = solo lo hace una vez
// data-set, guarda la informacion por decir invisiblemente
lista.forEach(i => {
    tablaDocentes.innerHTML += `
        <tr 
            data-name ="${i.profesor}"  
            data-curso = "${i.title}"
            data-duracion = "${i.sesions}"
            data-imagen = "${i.img}">
            
            <td >
                <img class="imagenDocente" src="${i.img}">
            </td>
            <td>${i.profesor }</td>
            <td>${i.title}</td>
            <td>${i.sesions}</td>
        </tr>
    `;
});

cerrarModal.addEventListener("click", () => {
    contenidoDocentes.classList.remove("activo");
});

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
                <td>${curso.score}</td>
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

cargarTabla();