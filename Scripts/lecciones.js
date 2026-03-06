import { courses } from "./dataBase.js";

localStorage.setItem('cursos', JSON.stringify(courses));
const lista = JSON.parse(localStorage.getItem('cursos'));

let cursoSeleccionado = null;   
let moduloSeleccionado = null;  
let leccionEditandoIndex = null;

const btnVolver = document.getElementById('btnVolver');
btnVolver.addEventListener('click', () => {
    window.location.href = btnVolver.dataset.href;
})

function mostrarVista(idVista) {
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('active'));
    document.getElementById(idVista).classList.add('active');
}

/*Cargar Cursos*/
function cargarCursos() {
    const listaCursos = document.getElementById('listaCursos');
    listaCursos.innerHTML = '';
    lista.forEach((curso, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${curso.img}" alt="">
            <h3>${curso.title}</h3>
            <p>${curso.info}</p>
        `;
        card.addEventListener('click', () => {
            cursoSeleccionado = index;
            document.getElementById('tituloModulos').textContent = curso.title;
            cargarModulos();
            mostrarVista('vistaModulos');
        });
        listaCursos.appendChild(card);
    });
}

/*Cargar módulos */
function cargarModulos() {
    const listaModulos = document.getElementById('listaModulos');
    listaModulos.innerHTML = '';
    const modulos = lista[cursoSeleccionado].modulos || [];
    modulos.forEach((modulo, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-info">
                <h3>${modulo.nombre}</h3>
                <p>${modulo.descripcion}</p>
            </div>
            <div class="card-acciones">
                <button class="btn-editar" id="btnEditarModulo${index}">Editar</button>
                <button class="btn-eliminar" id="btnEliminarModulo${index}">Eliminar</button>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-editar') || e.target.classList.contains('btn-eliminar')) return;
            moduloSeleccionado = index;
            document.getElementById('tituloLecciones').textContent = modulo.nombre;
            cargarLecciones();
            mostrarVista('vistaLecciones');
        });

        // editar módulo
        card.querySelector(`#btnEditarModulo${index}`).addEventListener('click', () => {
            moduloSeleccionado = index;
            document.getElementById('inputNombreModulo').value = modulo.nombre;
            document.getElementById('inputDescModulo').value = modulo.descripcion;
            document.getElementById('tituloModalModulo').textContent = 'Editar Módulo';
            modalModulo.classList.add('active');
        });

        // eliminar módulo
        card.querySelector(`#btnEliminarModulo${index}`).addEventListener('click', () => {
            if (!confirm('¿Seguro que querés eliminar este módulo?')) return;
            const cursosLS = JSON.parse(localStorage.getItem('cursos'));
            cursosLS[cursoSeleccionado].modulos.splice(index, 1);
            localStorage.setItem('cursos', JSON.stringify(cursosLS));
            lista[cursoSeleccionado].modulos = cursosLS[cursoSeleccionado].modulos;
            cargarModulos();
        });

        listaModulos.appendChild(card);
    });
}

/* Cargar lecciones */
function cargarLecciones() {
    const listaLecciones = document.getElementById('listaLecciones');
    listaLecciones.innerHTML = '';
    const lecciones = lista[cursoSeleccionado].modulos[moduloSeleccionado].lecciones || [];
    lecciones.forEach((leccion) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-info">
                <h3>${leccion.titulo}</h3>
                <p>${leccion.horas} horas</p>
            </div>
            <div class="card-acciones">
                <button class="btn-editar" id="btnEditarLeccion${index}">Editar</button>
                <button class="btn-eliminar" id="btnEliminarLeccion${index}">Eliminar</button>
            </div>
        `;

        // click en card para ver contenido
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-editar') || e.target.classList.contains('btn-eliminar')) return;
            document.getElementById('tituloContenido').textContent = leccion.titulo;
            document.getElementById('contenidoHoras').textContent = `Intensidad horaria: ${leccion.horas}h`;
            document.getElementById('contenidoTexto').textContent = leccion.contenido;
            document.getElementById('contenidoMultimedia').innerHTML = leccion.multimedia
                ? `<a href="${leccion.multimedia}" target="_blank">Ver recurso multimedia</a>`
                : 'Sin multimedia';
            mostrarVista('vistaContenido');
        });

        // editar lección
        card.querySelector(`#btnEditarLeccion${index}`).addEventListener('click', () => {
            moduloSeleccionado = moduloSeleccionado;
            document.getElementById('inputTituloLeccion').value = leccion.titulo;
            document.getElementById('inputHorasLeccion').value = leccion.horas;
            document.getElementById('inputContenidoLeccion').value = leccion.contenido;
            document.getElementById('inputMultimediaLeccion').value = leccion.multimedia;
            document.getElementById('tituloModalLeccion').textContent = 'Editar Lección';
            leccionEditandoIndex = index;
            modalLeccion.classList.add('active');
        });

        // eliminar lección
        card.querySelector(`#btnEliminarLeccion${index}`).addEventListener('click', () => {
            if (!confirm('¿Seguro que querés eliminar esta lección?')) return;
            const cursosLS = JSON.parse(localStorage.getItem('cursos'));
            cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones.splice(index, 1);
            localStorage.setItem('cursos', JSON.stringify(cursosLS));
            lista[cursoSeleccionado].modulos[moduloSeleccionado].lecciones = cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones;
            cargarLecciones();
        });

        listaLecciones.appendChild(card);
    });
}

/* Botones volver */
document.getElementById('btnVolverCursos').addEventListener('click', () => mostrarVista('vistaCursos'));
document.getElementById('btnVolverModulos').addEventListener('click', () => mostrarVista('vistaModulos'));
document.getElementById('btnVolverLecciones').addEventListener('click', () => mostrarVista('vistaLecciones'));

/* Modal módulo */
const modalModulo = document.getElementById('modalModulo');
document.getElementById('btnAgregarModulo').addEventListener('click', () => modalModulo.classList.add('active'));
document.getElementById('cerrarModalModulo').addEventListener('click', () => modalModulo.classList.remove('active'));

document.getElementById('btnGuardarModulo').addEventListener('click', () => {
    const nombre = document.getElementById('inputNombreModulo').value;
    const descripcion = document.getElementById('inputDescModulo').value;
    if (!nombre) return;

    const cursosLS = JSON.parse(localStorage.getItem('cursos'));

    if (moduloSeleccionado !== null && document.getElementById('tituloModalModulo').textContent === 'Editar Módulo') {
        cursosLS[cursoSeleccionado].modulos[moduloSeleccionado] = {
            ...cursosLS[cursoSeleccionado].modulos[moduloSeleccionado],
            nombre,
            descripcion
        };
    } else {
        cursosLS[cursoSeleccionado].modulos.push({ nombre, descripcion, lecciones: [] });
    }

    localStorage.setItem('cursos', JSON.stringify(cursosLS));
    lista[cursoSeleccionado].modulos = cursosLS[cursoSeleccionado].modulos;
    document.getElementById('inputNombreModulo').value = '';
    document.getElementById('inputDescModulo').value = '';
    document.getElementById('tituloModalModulo').textContent = 'Agregar Módulo';
    modalModulo.classList.remove('active');
    cargarModulos();
});

document.getElementById('btnGuardarLeccion').addEventListener('click', () => {
    const titulo = document.getElementById('inputTituloLeccion').value;
    const horas = document.getElementById('inputHorasLeccion').value;
    const contenido = document.getElementById('inputContenidoLeccion').value;
    const multimedia = document.getElementById('inputMultimediaLeccion').value;
    if (!titulo) return;

    const cursosLS = JSON.parse(localStorage.getItem('cursos'));

    if (leccionEditandoIndex !== null) {
        cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones[leccionEditandoIndex] = { titulo, horas, contenido, multimedia };
        leccionEditandoIndex = null;
    } else {
        cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones.push({ titulo, horas, contenido, multimedia });
    }

    localStorage.setItem('cursos', JSON.stringify(cursosLS));
    lista[cursoSeleccionado].modulos[moduloSeleccionado].lecciones = cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones;
    document.getElementById('inputTituloLeccion').value = '';
    document.getElementById('inputHorasLeccion').value = '';
    document.getElementById('inputContenidoLeccion').value = '';
    document.getElementById('inputMultimediaLeccion').value = '';
    document.getElementById('tituloModalLeccion').textContent = 'Agregar Lección';
    modalLeccion.classList.remove('active');
    cargarLecciones();
});

/* Modal lección */
const modalLeccion = document.getElementById('modalLeccion');
document.getElementById('btnAgregarLeccion').addEventListener('click', () => modalLeccion.classList.add('active'));
document.getElementById('cerrarModalLeccion').addEventListener('click', () => modalLeccion.classList.remove('active'));

document.getElementById('btnGuardarLeccion').addEventListener('click', () => {
    const titulo = document.getElementById('inputTituloLeccion').value;
    const horas = document.getElementById('inputHorasLeccion').value;
    const contenido = document.getElementById('inputContenidoLeccion').value;
    const multimedia = document.getElementById('inputMultimediaLeccion').value;
    if (!titulo) return;

    const cursosLS = JSON.parse(localStorage.getItem('cursos'));
    cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones.push({ titulo, horas, contenido, multimedia });
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
    lista[cursoSeleccionado].modulos[moduloSeleccionado].lecciones = cursosLS[cursoSeleccionado].modulos[moduloSeleccionado].lecciones;

    document.getElementById('inputTituloLeccion').value = '';
    document.getElementById('inputHorasLeccion').value = '';
    document.getElementById('inputContenidoLeccion').value = '';
    document.getElementById('inputMultimediaLeccion').value = '';
    modalLeccion.classList.remove('active');
    cargarLecciones();
});

/*edicion de lecciones*/

/* Iniciar */
cargarCursos();
mostrarVista('vistaCursos');