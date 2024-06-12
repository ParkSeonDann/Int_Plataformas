
// Función para cargar los tickets desde Firebase y poblar el menú desplegable
function cargarTickets() {
    fetch('https://fir-servicio-tecnico-default-rtdb.firebaseio.com/tickeds.json')
        .then(response => response.json())
        .then(data => {
            const ticketSelect = document.getElementById('ticketId');
            ticketSelect.innerHTML = '';  // Limpiar opciones
            for (const id in data) {
                const option = document.createElement('option');
                option.value = id;
                option.text = data[id].title; // Usar el título del ticket como texto de opción
                ticketSelect.appendChild(option);
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

// Función para cargar los datos del ticket seleccionado en el formulario
function cargarDatosTicket(ticketId) {
    const ticketUrl = `https://fir-servicio-tecnico-default-rtdb.firebaseio.com/tickeds/${ticketId}.json`;
    fetch(ticketUrl)
        .then(response => response.json())
        .then(data => {
            // Llenar los campos del formulario con los datos del ticket seleccionado
            document.getElementById('title').value = data.title;
            document.getElementById('description').value = data.description;
            document.getElementById('priority').value = data.priority;
            document.getElementById('status').checked = data.status;
            document.getElementById('ticketDate').value = data.ticketDate;
            document.getElementById('updateDate').value = data.updateDate;
        })
        .catch(error => console.error('Error al obtener los datos del ticket:', error));
}

// Cargar tickets al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarTickets();
});

// Manejar cambio en el menú desplegable
document.getElementById('ticketId').addEventListener('change', function() {
    const selectedTicketId = this.value;
    if (selectedTicketId) {
        cargarDatosTicket(selectedTicketId);
    } else {
        // Limpiar campos si no se selecciona ningún ticket
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('priority').value = '';
        document.getElementById('status').checked = false;
        document.getElementById('ticketDate').value = '';
        document.getElementById('updateDate').value = '';
    }
});

// Manejar envío del formulario
document.getElementById('updateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener ID del ticket seleccionado
    const selectedTicketId = document.getElementById('ticketId').value;
    if (!selectedTicketId) {
        swal("Por favor selecciona un ticket para actualizar.");
        return;
    }

    // Obtener valores del formulario
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').checked;
    const ticketDate = document.getElementById('ticketDate').value;
    const updateDate = document.getElementById('updateDate').value;

    // Crear objeto de datos para enviar al servidor
    const ticketData = {
        title: title,
        description: description,
        priority: priority,
        status: status,
        ticketDate: ticketDate,
        updateDate: updateDate
    };

    // URL específica para el ticket seleccionado
    const ticketUrl = `https://fir-servicio-tecnico-default-rtdb.firebaseio.com/tickeds/${selectedTicketId}.json`;

    // Enviar datos a Firebase usando fetch y PATCH
    fetch(ticketUrl, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Datos actualizados exitosamente:', data);
        Swal.fire("Ticket actualizado exitosamente");
    })
    .catch(error => {
        console.error('Error al actualizar los datos:', error);
        swal("Hubo un error al actualizar el ticket");
    });
});
