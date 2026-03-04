const botones = document.querySelectorAll(".rolBtn");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const modalTitulo = document.getElementById("modalTitulo");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        modal.classList.add("activo");
        modalTitulo.textContent = "Login de " + boton.textContent;
    });
});

cerrarModal.addEventListener("click", () => {
    modal.classList.remove("activo");
});

const loginForm = document.getElementById("loginBoton");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página
    
    window.location.href = "./pages/principalPageStudent.html";
});