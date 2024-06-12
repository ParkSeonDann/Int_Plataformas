// Cambia la función guardar para que use SweetAlert2
function guardar() {
    const usuario = document.getElementById("name").value;
    const contraseña = document.getElementById("password").value;
    
    // Verificar usuario y contraseña
    if ((usuario === "fabi_soporte" || usuario === "danilo_soporte") && contraseña === "duoc1234") {
        // Usuario y contraseña correctos, redirigir al usuario a la página post.html
        window.location.href = "agregar";
    } else {
        // Usuario y/o contraseña incorrectos, mostrar mensaje de error con SweetAlert2
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario y/o contraseña incorrectos. Por favor, intenta nuevamente.'
        });
    }
}

// Agrega el evento click al botón después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submitBtn").addEventListener("click", guardar);
});
