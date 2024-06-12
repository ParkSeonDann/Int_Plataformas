function guardar() {
    try {
        firebase.firestore().collection("usuarios").add({
            usuario: document.getElementById("name").value,
            password: document.getElementById("password").value,
        })
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: '¡Bienvenido!',
                confirmButtonText: 'Continuar',
            }).then(() => {
                window.location.href = "agregar";
            });
        });
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Error en el registro',
            text: 'Hubo un problema durante el registro. Por favor, inténtalo de nuevo.',
            confirmButtonText: 'Entendido',
        });
    }
}