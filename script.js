let fields = [
    'circle',
    'circle',
    'circle',
    null,
    null,
    'cross',
    'cross',
    null,
    null
];

function init(){
    render();
}
// Die Funktion zum Rendern des Spielfeldes
function render() {
    let html = '<table>';
    
    // Durchlaufen des 3x3 Arrays und Generieren der Zellen
    for (let i = 0; i < 3; i++) {
        html += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const field = fields[index];
            let symbol = '';
            
            // Überprüfen, ob ein Feld einen Kreis oder Kreuz enthält
            if (field === 'circle') {
                symbol = '<span class="circle">O</span>';
            } else if (field === 'cross') {
                symbol = '<span class="cross">X</span>';
            }

            // Eine anklickbare Zelle erstellen
            html += `<td onclick="handleClick(${index})">${symbol}</td>`;
        }
        html += '</tr>';
    }
    html += '</table>';
    
    // Das generierte HTML in den Container einfügen
    document.getElementById('container').innerHTML = html;
}

// Event-Handler für Klicks auf die Zellen
function handleClick(index) {
    if (!fields[index]) {  // Nur leere Felder sind anklickbar
        fields[index] = 'cross'; // Du könntest dies ändern, um abwechselnd 'circle' und 'cross' zu setzen
        render(); // Neu rendern, um den aktuellen Zustand zu zeigen
    }
}
