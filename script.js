// Obtener referencias al modal y la imagen
const modal = document.getElementById("miModal");
const imgModal = document.getElementById("imgModal");
const cerrar = modal.querySelector(".cerrar");

// Función para abrir el modal con la imagen seleccionada
function abrirModal(rutaImagen) {
  imgModal.src = rutaImagen;
  modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
  modal.style.display = "none";
}

// Evento para cerrar al hacer click en la "X"
cerrar.addEventListener("click", cerrarModal);

// Evento para cerrar al hacer click fuera de la imagen
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    cerrarModal();
  }
});

// También cerrar con tecla ESC
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    cerrarModal();
  }
});
