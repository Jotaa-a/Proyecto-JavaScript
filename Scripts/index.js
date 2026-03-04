const botones = document.querySelectorAll(".rolBtn");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const modalTitulo = document.getElementById("modalTitulo");
const formulario = document.getElementById("formulario-login")
const loginForm = document.getElementById("loginBoton");

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

    e.preventDefault(); // Evita el envío y recargana
    
    window.location.href = "./pages/principalPageStudent.html";
});