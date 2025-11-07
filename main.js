
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
let numeroComputer = Math.floor(Math.random() * 5)
console.log("Il computer ha scelto:", numeroComputer);

// Sommiamo i due numeri
let somma = numeroUtente + numeroComputer;
console.log("La somma dei numeri è:", somma);
