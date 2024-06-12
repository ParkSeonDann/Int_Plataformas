function iniciarSesion() {
    const usuario = document.getElementById("name").value;
    const contraseña = document.getElementById("password").value;
    
    // Consultar Firebase para verificar las credenciales
    firebase.firestore().collection("usuarios").where("usuario", "==", usuario)
        .get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const usuarioData = doc.data();
                    const contraseñaGuardada = usuarioData.password; // Suponiendo que 'password' es el nombre del campo en la base de datos
                    // Comparar la contraseña ingresada con la contraseña guardada
                    if (contraseña === contraseñaGuardada) {
                        // Usuario y contraseña válidos, redirigir al usuario a la página listar.html
                        window.location.href = "/listar"; // Cambio en la URL de redirección
                    } else {
                        // Contraseña incorrecta, mostrar mensaje de error con SweetAlert2
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Contraseña incorrecta. Por favor, intenta nuevamente.'
                        });
                    }
                });
            } else {
                // Usuario no encontrado, mostrar mensaje de error con SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Usuario no encontrado. Por favor, verifica tus credenciales.'
                });
            }
        })
        .catch((error) => {
            console.error('Error al obtener datos de Firebase:', error);
            // Mostrar mensaje de error genérico
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.'
            });
        });
}

// Agrega el evento click al botón después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submitBtn").addEventListener("click", iniciarSesion);
});
