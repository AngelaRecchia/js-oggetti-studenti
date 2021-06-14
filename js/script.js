/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

// crea oggetto studente e ne stampa le proprietà
var studente = {
    nome: "Pinco",
    cognome: "Bianchi",
    eta: "20"
};

for (var key in studente){
    console.log(studente[key]);
}

var studenti = [
    studente,
    {   
        nome: "Panco",
        cognome: "Rossi",
        eta: "21"   
    },
    {   
        nome: "Pluto",
        cognome: "Verdi",
        eta: "22"   
    },
    {   
        nome: "Pippo",
        cognome: "Viola",
        eta: "23"   
    }
] 

console.log(studenti);
