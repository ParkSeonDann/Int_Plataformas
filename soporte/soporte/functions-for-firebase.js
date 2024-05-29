// functions-for-firebase.js

function guardar() {
    try {
        const docRef = firebase.firestore().collection("usuarios").add({
            nombre: document.getElementById("name").value,
            apellido: document.getElementById("last").value,
        });
        alert("congrat, registro exitoso.");
    } catch (e) {
        alert("Error en el registro ", e);
    }
}

