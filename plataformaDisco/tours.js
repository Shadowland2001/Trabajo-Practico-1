const span = document.querySelector("#welcome");
let nombre = "";

while (nombre.length < 3) {
    nombre = prompt("Porfa, ingresame tu nombre (mínimo 3 letras):");
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 letras.");
    }
}


span.textContent = "Hola, " + nombre.toUpperCase();

const iconoTickets = document.createElement("i");
iconoTickets.className = "fas fa-ticket-alt"; 
span.appendChild(iconoTickets);