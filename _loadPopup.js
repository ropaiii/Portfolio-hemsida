// Ladda in popup-templates
function loadPopups() {
    fetch('/popupTemplates.html') // Hämta innehållet från popups.html
        .then(response => response.text())
        .then(data => {
            const container = document.createElement('div'); // Skapa en temporär container
            container.innerHTML = data; // Lägg in HTML-innehållet
            document.body.appendChild(container); // Lägg till innehållet i body
        })
        .catch(error => console.error('Error loading popups:', error));
}

// Kör funktionen när sidan laddas
document.addEventListener('DOMContentLoaded', loadPopups);