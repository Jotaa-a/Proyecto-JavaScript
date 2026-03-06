import { courses } from "./dataBase.js";

localStorage.setItem('cursos', JSON.stringify(courses));
const lista = JSON.parse(localStorage.getItem('cursos'));
const bntVolver = document.getElementById('btnVolver');

let cursoSeleccionado = null;   
let moduloSeleccionado = null;  

function mostrarVista(idVista) {
    document.querySelectorAll('.vista').forEach(v => v.classList.remove('active'));
    document.getElementById(idVista).classList.add('active');}
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
            <h3>${modulo.nombre}</h3>
            <p>${modulo.descripcion}</p>
        `;
        card.addEventListener('click', () => {
            moduloSeleccionado = index;
            document.getElementById('tituloLecciones').textContent = modulo.nombre;
            cargarLecciones();
            mostrarVista('vistaLecciones');
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
            <h3>${leccion.titulo}</h3>
            <p>${leccion.horas} horas</p>
        `;
        card.addEventListener('click', () => {
            document.getElementById('tituloContenido').textContent = leccion.titulo;
            document.getElementById('contenidoHoras').textContent = `Intensidad horaria: ${leccion.horas}h`;
            document.getElementById('contenidoTexto').textContent = leccion.contenido;
            document.getElementById('contenidoMultimedia').innerHTML = leccion.multimedia
                ? `<a href="${leccion.multimedia}" target="_blank">Ver recurso multimedia</a>`
                : 'Sin multimedia';
            mostrarVista('vistaContenido');
        });
        listaLecciones.appendChild(card);
    });
}

/* Botones volver */
document.getElementById('btnVolverCursos').addEventListener('click', () => mostrarVista('vistaCursos'));
document.getElementById('btnVolverModulos').addEventListener('click', () => mostrarVista('vistaModulos'));
document.getElementById('btnVolverLecciones').addEventListener('click', () => mostrarVista('vistaLecciones'));
bntVolver.addEventListener('click', () => {
    window.location.replace('../pages/principalPageStudent.html')
});

/* Iniciar */
cargarCursos();
mostrarVista('vistaCursos');