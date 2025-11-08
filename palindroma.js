// 1. Chiediamo all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola:");

// 2. Creiamo una funzione che controlla se la parola è palindroma
function controllaPalindroma(string) {
  
 string = string.toLowerCase();

  // Invertiamo la parola
  let testoInvertito = string.split("").reverse().join("");

  // Verifichiamo che il testo è Palindromo
  if (string === testoInvertito) {
    console.log("La parola è palindroma!");
  } else {
    console.log("La parola non è palindroma.");
  }
}

// 3. Chiamiamo la funzione passando la parola inserita
controllaPalindroma(parolaUtente);