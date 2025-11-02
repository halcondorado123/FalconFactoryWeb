    // ===================================
// INICIALIZACIÓN EMAILJS
// ===================================
(function () {
    emailjs.init("XPL-O6zFZdxbFvTw1"); // Reemplaza con tu public key de EmailJS
})();

// ===================================
// FUNCIONES DE VALIDACIÓN
// ===================================

// Función para mostrar error debajo del campo
function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.textContent = message;
    }
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
}

// Función para limpiar error de un campo
function clearError(input) {
    const errorDiv = input.parentElement.querySelector('.invalid-feedback');
    if (errorDiv) {
        errorDiv.textContent = '';
    }
    input.classList.remove('is-invalid');
}

// Función para validar email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Patrones de validación
const urlPattern = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([^\s]+\.(com|net|org|co|io|gov|edu))/gi;
const htmlTagPattern = /<[^>]*>/g;

// ===================================
// MANEJO DEL FORMULARIO
// ===================================
window.onload = function () {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    const nameInput = contactForm.querySelector('input[name="user_name"]');
    const emailInput = contactForm.querySelector('input[name="user_email"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    // Validar en tiempo real al escribir
    [nameInput, emailInput, messageField].forEach(input => {
        if (input) {
            input.addEventListener('input', () => clearError(input));
        }
    });

    // ===================================
    // EVENTO SUBMIT DEL FORMULARIO
    // ===================================
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let hasError = false;

        // Obtener valores
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageField.value.trim();

        // Limpiar errores previos
        clearError(nameInput);
        clearError(emailInput);
        clearError(messageField);

        // Validación del nombre
        if (name.length <= 3) {
            showError(nameInput, 'El nombre debe tener al menos 4 caracteres.');
            hasError = true;
        }

        // Validación del email
        if (!isValidEmail(email)) {
            showError(emailInput, 'Ingresa un email válido.');
            hasError = true;
        }

        // Validación del mensaje
        if (message.length < 10) {
            showError(messageField, 'El mensaje debe tener al menos 10 caracteres.');
            hasError = true;
        } else if (message.length > 500) {
            showError(messageField, 'El mensaje no puede superar los 500 caracteres.');
            hasError = true;
        } else if (urlPattern.test(message)) {
            showError(messageField, 'No se permiten URLs o enlaces en el mensaje.');
            hasError = true;
        } else if (htmlTagPattern.test(message)) {
            showError(messageField, 'No se permiten etiquetas HTML en el mensaje.');
            hasError = true;
        }

        // Si hay errores, mostrar alerta y detener
        if (hasError) {
            Swal.fire({
                icon: 'error',
                title: '¡Error en el formulario!',
                text: 'Por favor corrige los campos marcados antes de enviar.',
                confirmButtonText: 'Entendido',
                confirmButtonColor: '#0d6efd'
            });
            return;
        }

        // Deshabilitar botón y mostrar spinner
        const spinner = submitButton.querySelector('.spinner-border');
        const buttonText = submitButton.querySelector('.button-text');

        if (spinner) spinner.classList.remove('d-none');
        if (buttonText) buttonText.textContent = 'Enviando...';
        submitButton.disabled = true;

        // ===================================
        // ENVIAR EMAIL CON EMAILJS
        // ===================================
        emailjs.sendForm('service_ag17agh', 'template_82d7idm', this) // Reemplaza con tu Service ID y Template ID
            .then(() => {
                // Éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    text: 'Gracias por tu mensaje. Lo he recibido y me comunicaré contigo a la mayor brevedad.',
                    confirmButtonText: 'Cerrar',
                    confirmButtonColor: '#198754'
                }).then(() => {
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                });
            })
            .catch((error) => {
                // Error
                console.error('Error al enviar:', error);
                Swal.fire({
                    icon: 'error',
                    title: '¡Error al enviar el mensaje!',
                    text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.',
                    confirmButtonText: 'Cerrar',
                    confirmButtonColor: '#dc3545'
                });
            })
            .finally(() => {
                // Ocultar spinner y reactivar botón
                if (spinner) spinner.classList.add('d-none');
                submitButton.disabled = false;
                if (buttonText) buttonText.textContent = 'Enviar Mensaje';
            });
    });

    // ===================================
    // VALIDACIÓN DE BOOTSTRAP
    // ===================================
    (function () {
        'use strict';

        // Aplicar validación de Bootstrap a todos los formularios
        const forms = document.querySelectorAll('.needs-validation');

        Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
};