import { courses } from "../Scripts/dataBase.js";

/*Gestor docentes ids*/
const cursos = document.getElementById("contenidoCursos")
const containerCursos = document.getElementById("containerCursos")
const visualizadorCursos = document.getElementById("visualCursos")
const docentesBTN = document.getElementById("botonDocentes")
const cerrarModal =document.getElementById("cerrarModal")
const contenidoDocentes = document.getElementById("docentes")


if(!localStorage.getItem("cursos")){
    localStorage.setItem("cursos", JSON.stringify(courses));    //NO se vuelve a sobrescribir
}

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
            <td><button class="eliminationBTN"> Eliminar </button></td>
        </tr>
    `;
});
const eliminarBTN = document.querySelectorAll(".eliminationBTN");

eliminarBTN.forEach(btn => {

    btn.addEventListener("click", function(){

        const fila = this.closest("tr");
        const nombre = fila.dataset.name;

        // eliminar visualmente
        fila.remove();

        // eliminar del array
        const index = lista.findIndex(curso => curso.profesor === nombre);

        if(index !== -1){
            lista.splice(index,1);
        }

        // actualizar localStorage
        localStorage.setItem("cursos", JSON.stringify(lista));

    });

});

