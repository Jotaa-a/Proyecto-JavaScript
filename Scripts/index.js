const botones = document.querySelectorAll(".rolBtn");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const modalTitulo = document.getElementById("modalTitulo");
const formulario = document.getElementById("formulario-login")
const loginForm = document.getElementById("loginBoton");
const usuario = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena")


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        modal.classList.add("activo");
        modalTitulo.textContent = "Login de " + boton.textContent;
    });
});


cerrarModal.addEventListener("click", () => {
    modal.classList.remove("activo");
});

formulario.addEventListener("submit", function(e) { 
    e.preventDefault(); // Evita el envío y recarga
    const usr= usuario.value 
    const cntr = contrasena.value

    if (usr === "juan" && cntr === "123") {
        window.location.href = "./pages/principalPageStudent.html";
    }
    else {
        alert("Usuario o contraseña incorrectos, intente nuevamente")
    }
});