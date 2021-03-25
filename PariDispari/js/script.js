// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//  Dichiariamo chi ha vinto.

// L'utente deve scegliere tra Pari e Dispari
var sceltaUtente = prompt('Scegli tra Pari e Dispari');

// L'utente inserisce un numero da 1 a 5
var numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

// Generiamo un numero random tra 1 e 5 per il computer (funzione)
function randomComputer () {
    var numeroRandom = Math.floor(Math.random() * 5 ) + 1;
    return numeroRandom;
}

// Sommiamo i due numeri 
var sommaNumeri = randomComputer() + numeroUtente;

// Scrivo una funzione che stabilisce se la somma dei numeri è pari o dispari
function pariODispari (miaSomma) {
    if ( miaSomma % 2 == 0 ) {
        return "pari";
    } else if ( miaSomma % 2 != 0 ) {
        return "dispari";
    }
}

// Dichiaro il vincitore
var risultato = pariODispari(sommaNumeri);

if ( sceltaUtente == risultato ) {
    alert("Hai vinto!");
} else if ( sceltaUtente != risultato ) {
    alert("Hai perso!");
}







