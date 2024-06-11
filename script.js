document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const btn = document.getElementById('boton');
    const errorContainer = document.getElementById('error-container');

    btn.addEventListener('click', () => {
        
        const email = input.value.trim(); // Obtener el valor del input y eliminar espacios en blanco al principio y al final
        //e.preventDefault(); nunca fue necesario se arregla con estructura html
        if (!isValidEmail(email)) { // Comprobar si el correo electrónico no es válido
            showErrorText(); // Mostrar el mensaje de error
           
        } else {
            hideErrorText(); // Ocultar el mensaje de error si el correo electrónico es válido
        }
    });

    function isValidEmail(email) {
        // Expresión regular para validar el formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // Devuelve true si el correo electrónico es válido, de lo contrario devuelve false
    }

    function showErrorText() {
        errorContainer.textContent = 'Please provide a valid email'; // Texto del mensaje de error
        errorContainer.style.display = 'block'; // Mostrar el mensaje de error
    }
  
    function hideErrorText() {
        errorContainer.textContent = ''; // Limpiar el texto del mensaje de error
        errorContainer.style.display = 'none'; // Ocultar el mensaje de error
    }
    
});
