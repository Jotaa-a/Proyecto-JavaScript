const agregarBTN = document.getElementById("agregarProfesor");

const inputProfesor = document.getElementById("nuevoProfesor");
const inputCurso = document.getElementById("nuevoCurso");
const inputDuracion = document.getElementById("nuevaDuracion");
const inputImagen = document.getElementById("nuevaImagen");

agregarBTN.addEventListener("click", () => {

    const nuevo = {
        profesor: inputProfesor.value,
        title: inputCurso.value,
        sesions: inputDuracion.value,
        img: inputImagen.value
    };

    // agregar al array
    lista.push(nuevo);

    // guardar en localStorage
    localStorage.setItem("cursos", JSON.stringify(lista));

    // agregar a la tabla visualmente
    tablaDocentes.innerHTML += `
        <tr data-name="${nuevo.profesor}">
            <td>
                <img class="imagenDocente" src="${nuevo.img}">
            </td>
            <td>${nuevo.profesor}</td>
            <td>${nuevo.title}</td>
            <td>${nuevo.sesions}</td>
            <td><button class="eliminationBTN">Eliminar</button></td>
        </tr>
    `;

    // limpiar inputs
    inputProfesor.value = "";
    inputCurso.value = "";
    inputDuracion.value = "";
    inputImagen.value = "";

});

