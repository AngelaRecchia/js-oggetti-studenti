/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

// crea oggetto studente e ne stampa le proprietà
var studente = {
    nome: "Pinco",
    cognome: "Bianchi",
    eta: 20
};

for (var key in studente){
    console.log(studente[key]);
}

// array di studenti
var studenti = [
    studente,
    {   
        nome: "Panco",
        cognome: "Rossi",
        eta: 21  
    },
    {   
        nome: "Pluto",
        cognome: "Verdi",
        eta: 22  
    },
    {   
        nome: "Pippo",
        cognome: "Viola",
        eta: 23 
    }
];

document.getElementById("text").innerHTML = nomeCognome();
document.getElementById("add").addEventListener("click", add);
document.getElementById("remove").addEventListener("click", remove);

// stampa nome e cognome di ogni studente
function nomeCognome() {
    var frase = "";
    for (var i = 0; i < studenti.length; i++) {
        frase += "Studente #" + (i+1) + ": ";
        for (var k in studenti[i]) {
            if (k != "eta")  frase += studenti[i][k] + " ";
        }
        frase += "<br>";
    }
    return frase;
}

// aggiunta studente
function add() {
        var addNome = prompt("Inserisci il nome dello studente");
        var addCognome = prompt("Inserisci il nome dello studente");
        var addEta = parseInt(prompt("Inserisci il nome dello studente"));
        studenti.push({
            nome: addNome,
            cognome: addCognome,
            eta: addEta
        });
        document.getElementById("text").innerHTML = nomeCognome();
}

// rimozione studente
function remove() {
    if (studenti.length >= 1) {
        var toRemove = parseInt(prompt("Inserisci # dello studente da eliminare"));
        while (toRemove > studenti.length + 1 || toRemove < 1) {
            toRemove = parseInt(prompt("Valore non valido: inserisci # dello studente da eliminare"));
        }
        studenti.splice((toRemove - 1), 1);
        document.getElementById("text").innerHTML = nomeCognome();
    }
}


