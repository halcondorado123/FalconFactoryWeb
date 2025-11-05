  // Inicializar el carrusel solo si existe el elemento
document.addEventListener("DOMContentLoaded", () => {
  const clientsCarousel = document.querySelector('#clientsCarousel');
  if (clientsCarousel) {
    const carousel = new bootstrap.Carousel(clientsCarousel, {
      interval: 2500,
      ride: 'carousel'
    });
    console.log("Carrusel inicializado correctamente");
  } else {
    console.warn("No se encontró el carrusel (#clientsCarousel)");
  }
});
