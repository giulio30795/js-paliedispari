// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let sceltaUtente = prompt('pari o dispari')

while(sceltaUtente != 'pari' && sceltaUtente != 'dispari'){
    sceltaUtente = prompt('pari o dispari')
}

let numUtente  = prompt('inserisci un numero da 1 a 5')

while(numUtente < 1 || numUtente > 5 || isNaN(numUtente)){
    numUtente  = prompt('inserisci un numero da 1 a 5')
}

let randomComputer = randomNumber(1, 5)
let risultato = ''
let verifica = oddEven(numUtente, randomComputer)

if (verifica === sceltaUtente){
    console.log('Utente Vince');
} else {
    console.log('computer vince');
}

// Funzioni

function oddEven(num1, num2){
    let somma = num1 + num2 

    if (somma %  2 == 0){
    risultato = 'pari'
     } else {
        risultato = 'dispari'
     }
     return risultato
}
function randomNumber(min, max){
    let numComputer = Math.floor(Math.random() * max) + min
    return numComputer
}
