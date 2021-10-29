// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parolaUtente = prompt('inscerisci una parola')


console.log(parolaUtente);

let dato = Palindroma(parolaUtente)

function Palindroma (parola){
        let result = ''

    for (let i = parola.length -1 ; i >= 0; i--){
        result += parola[i];
    }
    return result
}

if (dato === parolaUtente){
    console.log('La Parola è Palindroma');
} else {
    console.log('La Parola non è palindroma');
}
