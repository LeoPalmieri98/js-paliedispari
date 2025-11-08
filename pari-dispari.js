
// Chiediamo al visitatore di scegliere tra "pari" o "dispari"
let sceltaUtente = prompt("Scegli: pari o dispari?").toLowerCase();

// Chiediamo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Controlliamo che il numero sia valido
if (isNaN(numeroUtente)) {
    alert("Non è un numero!");
} else if (numeroUtente < 1 || numeroUtente > 5) {
    alert("Devi inserire un numero valido da 1 a 5!");
}

// Generiamo numero casuale del computer
let numeroComputer = Math.floor(Math.random() * 4 ) + 1
console.log("Il computer ha scelto:", numeroComputer);

// Sommiamo i due numeri
let somma = numeroUtente + numeroComputer;
console.log("La somma dei numeri è:", somma);

// Determiniamo se la somma è pari o dispari
function pariODispari(numero) {
    if (numero % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

let risultato = pariODispari(somma);
console.log("La somma è:", risultato);

// Dichiariamo chi ha vinto
if (sceltaUtente === risultato) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}
