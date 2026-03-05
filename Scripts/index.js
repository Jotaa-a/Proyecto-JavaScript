const botones = document.querySelectorAll(".rolBtn");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const modalTitulo = document.getElementById("modalTitulo");
const formulario = document.getElementById("formulario-login")
const loginForm = document.getElementById("loginBoton");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena")


let cargo = ""; // variable global


botones.forEach(i => {
    i.addEventListener("click", () => {
        modal.classList.add("activo");
        modalTitulo.textContent = "Login de " + i.textContent;
        cargo = i.textContent; // guardamos el texto
    });
});


formulario.addEventListener("submit", function(e) { 
    e.preventDefault(); // Evita el envío y recarga
    const usr= usuario.value 
    const cntr = contrasena.value
    switch (cargo) {
        case 'Estudiante':
                if (usr === "juan" && cntr === "123") {
                    window.location.href = "./pages/principalPageStudent.html";
                }
                else {
                    alert("Usuario o contraseña incorrectos, intente nuevamente");
                }
                break;
        case 'Docente':
                if (usr === "docenciaABC" && cntr === "123") {
                    window.location.href = "./pages/principalPageStudent.html";
                }
                else {
                    alert("Usuario o contraseña incorrectos, intente nuevamente");
                }
                break;
        case 'Administrador':
                if(usr=== "administracionABC" && cntr ==="123") {
                    window.location.href = "./pages/principalPageStudent.html";
                }
                else {
                    alert("Usuario o contraseña incorrectos, intente nuevamente")
                }
                break;
    }
})

cerrarModal.addEventListener("click", () => {
    modal.classList.remove("activo");
});
