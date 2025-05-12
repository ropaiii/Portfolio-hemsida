// Öppna popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "block";
    dragElement(popup); // Gör popupen dragbar
}

// Stäng popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.style.display = "none";
}

// Drag-funktion
function dragElement(elmnt) {
    const header = elmnt.querySelector(".popup-header"); // Hitta header inom popupen
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (header) {
        header.onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown; // Om ingen header finns, gör hela elementet dragbart
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // Musens startposition
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Beräkna ny cursorposition
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Sätt ny position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}