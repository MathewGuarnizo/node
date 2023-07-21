function generarTabaDeportes() {
    const tbody = document.getElementById("tbody-deportes");
    fetch("http://localhost:3030/api/deportes")
        .then(response => response.json())
        .then(deportes => {
            deportes.forEach(function(deportes) {
                const fila = tbody.insertRow();
                const celdaId = fila.insertCell();
                const celdaDeporte = fila. insertCell();
                const celdaEquipo = fila.insertCell();
                const celdaJugadores = fila.insertCell();

                celdaId.textContent = deportes.id;
                celdaDeporte.textContent = deportes.deporte;
                celdaEquipo.textContent = deportes.equipo;
                celdaJugadores.textContent = deportes.jugadores;
            });
        });
    }

    generarTabaDeportes();