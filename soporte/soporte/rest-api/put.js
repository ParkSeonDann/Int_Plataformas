document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').checked;

    // Crear objeto de datos
    const ticketData = {
        name: name,
        description: description,
        date: date,
        status: status
    };

    // Nombre único para el ticket, podrías usar un UUID o similar en un entorno real
    const ticketId = name.replace(/\s+/g, '-').toLowerCase();

    // URL de Firebase
    const firebaseUrl = `https://fir-servicio-tecnico-default-rtdb.firebaseio.com/tickeds/${ticketId}.json`;

    // Enviar datos a Firebase usando fetch y PUT
    fetch(firebaseUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos guardados exitosamente:', data);
        alert('Ticket creado exitosamente');
    })
    .catch(error => {
        console.error('Error al guardar los datos:', error);
        alert('Hubo un error al crear el ticket');
    });
});