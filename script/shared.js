//  Función genérica para cargar componentes HTML
function loadComponent(containerId, filePath, callback) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar ${filePath}');
      return response.text();
    })
    .then(data => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = data;
        if (callback) callback();
      } else {
        console.warn('No se encontró el contenedor con ID: ${containerId}');
      }
    })
    .catch(error => console.error('Error al cargar ${filePath}:', error));
}

// Carga el componente <Head></Head> compartido
fetch("../shared/head.html")
  .then(res => res.text())
  .then(html => {
    document.head.innerHTML += html;
  });

// Carga el componente desde el Shared del HEADER
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

// Carga el componente desde el Shared del FOOTER
loadComponent("footer-container", "../shared/footer.html");
