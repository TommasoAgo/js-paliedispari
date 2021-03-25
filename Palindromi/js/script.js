// Palindroma

// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
var parolaUtente = prompt('Inserisci una parola che comincia con una lettera minuscola e ti dirò se è un palindromo');
parolaUtente = parolaUtente.toUpperCase();

// Creo la funzione

// La funzione deve:
// 
// 
// Analizzare la parola inserita dall'utente
// Se la parola è uguale a sé stessa letta al contrario --> return -> la tua parola è un palindromo
function trovaPalindromo (paroladaEsaminare) {
    var parolaAlContrario = "";
    for ( var i = paroladaEsaminare.length - 1; i >= 0; i-- ) {
        parolaAlContrario += paroladaEsaminare.charAt(i);
    }

    if (paroladaEsaminare == parolaAlContrario) {
        alert("La parola inserita è un palindromo!");
    } else {
        alert("La parola inserita non è un palindromo!");
    }
}

trovaPalindromo(parolaUtente);