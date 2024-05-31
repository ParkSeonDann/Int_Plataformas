// functions-for-firebase.js

function guardar() {
    try {
        firebase.firestore().collection("usuarios").add({
            nombre: document.getElementById("name").value,
            apellido: document.getElementById("last").value,
        })
        .then(() => {
            alert("congrat, registro exitoso.");
            window.location.href = "pruebapost.html";
        });
    } catch (e) {
        alert("Error en el registro: " + e);
    }
}

