// Función para cargar los tickets desde Firebase y poblar el acordeón
function cargarTickets(filters = {}) {
    fetch('https://fir-servicio-tecnico-default-rtdb.firebaseio.com/tickeds.json')
        .then(response => response.json())
        .then(data => {
            const ticketAccordion = document.getElementById('ticketAccordion');
            ticketAccordion.innerHTML = '';  // Limpiar acordeón
            for (const id in data) {
                const ticket = data[id];
                
                // Aplicar filtros
                if (filters.title && !ticket.title.toLowerCase().includes(filters.title.toLowerCase())) continue;
                if (filters.priority && ticket.priority !== filters.priority) continue;
                if (filters.status && ticket.status !== filters.status) continue;
                if (filters.date && new Date(ticket.ticketDate).toDateString() !== new Date(filters.date).toDateString()) continue;

                const ticketItem = `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${id}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">
                                ${ticket.title}
                            </button>
                        </h2>
                        <div id="collapse${id}" class="accordion-collapse collapse" aria-labelledby="heading${id}" data-bs-parent="#ticketAccordion">
                            <div class="accordion-body">
                                <p><strong>Descripción:</strong> ${ticket.description}</p>
                                <p><strong>Prioridad:</strong> ${ticket.priority}</p>
                                <p><strong>Estado:</strong> ${ticket.status}</p>
                                <p><strong>Fecha del Ticket:</strong> ${ticket.ticketDate}</p>
                                <p><strong>Fecha de Actualización:</strong> ${ticket.updateDate}</p>
                                <a href="/modificar/" class="btn btn-sm btn-primary" onclick="modificarTicket()">
                                    <i class="bi bi-pencil"></i> Modificar
                                </a>
                                <button class="btn btn-sm btn-danger" onclick="eliminarTicket('${id}')">
                                    <i class="bi bi-trash"></i> Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                ticketAccordion.innerHTML += ticketItem;
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

// Función para eliminar un ticket
function eliminarTicket(ticketId) {
    Swal.fire({
        title: '¿Estás seguro de que deseas eliminar este ticket?',
        text: '¡Esta acción no se puede deshacer!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://fir-servicio-tecnico-default-rtdb.firebaseio.com/tickeds/${ticketId}.json`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    cargarTickets();  // Recargar la lista de tickets
                    Swal.fire({
                        title: "Ticket eliminado exitosamente",
                        icon: "success",
                    });
                } else {
                    console.error('Error al eliminar el ticket:', response.statusText);
                    Swal.fire({
                        title: "Hubo un error al eliminar el ticket",
                        icon: "error",
                    });
                }
            })
            .catch(error => {
                console.error('Error al eliminar el ticket:', error);
                Swal.fire({
                    title: "Hubo un error al eliminar el ticket",
                    icon: "error",
                });
            });
        }
    });
}

// Manejar el envío del formulario de filtro
document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const filters = {
        title: document.getElementById('titleFilter').value,
        priority: document.getElementById('priorityFilter').value,
        status: document.getElementById('statusFilter').value,
        date: document.getElementById('dateFilter').value
    };
    cargarTickets(filters);
});

// Cargar todos los tickets al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarTickets();
});