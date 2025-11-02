document.addEventListener("DOMContentLoaded", () => {
  // Función genérica para cargar componentes HTML
  function loadComponent(containerId, filePath, callback) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error(`No se pudo cargar ${filePath}`);
        return response.text();
      })
      .then(data => {
        document.getElementById(containerId).innerHTML = data;
        if (callback) callback();
      })
      .catch(error => console.error(`Error al cargar ${filePath}:`, error));
  }

  // 🧭 Cargar el HEADER
  loadComponent("nav-menu", "../shared/header.html", () => {
    // Activar el enlace actual automáticamente
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // ⚓ Cargar el FOOTER
  loadComponent("footer-container", "../shared/footer.html");
});


  const clientsCarousel = document.querySelector('#clientsCarousel');
  const carousel = new bootstrap.Carousel(clientsCarousel, {
    interval: 2500,
    ride: 'carousel'
  });