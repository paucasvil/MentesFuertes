// Datos de los equipos
const teams = [
    {
        name: "Equipo Águilas",
        members: ["Ana", "Luis", "José"],
        points: 120,
        place: "1°"
    },
    {
        name: "Equipo Tigres",
        members: ["Marta", "Pedro", "Sofía"],
        points: 100,
        place: "2°"
    },
    {
        name: "Equipo Lobos",
        members: ["Carlos", "Elena", "Raúl"],
        points: 80,
        place: "3°"
    },
    {
        name: "Equipo Halcones",
        members: ["María", "Roberto", "Paula"],
        points: 70,
        place: "4°"
    }
];

let currentIndex = 0;

// Referencias al DOM
const teamName = document.getElementById("team-name");
const teamMembersList = document.getElementById("team-members");
const teamPoints = document.getElementById("team-points");
const teamPlace = document.getElementById("team-place");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Función para actualizar la card
function updateCard(index) {
    const team = teams[index];
    teamName.textContent = team.name;

    // Limpiar y actualizar la lista de miembros
    teamMembersList.innerHTML = "";
    team.members.forEach(member => {
        const li = document.createElement("li");
        li.textContent = member;
        teamMembersList.appendChild(li);
    });

    teamPoints.textContent = `Puntos: ${team.points}`;
    teamPlace.textContent = `Lugar: ${team.place}`;
}

// Navegación previa
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + teams.length) % teams.length;
    updateCard(currentIndex);
});

// Navegación siguiente
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teams.length;
    updateCard(currentIndex);
});

// Inicializar con el primer equipo
updateCard(currentIndex);
