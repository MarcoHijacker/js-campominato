// Esercizio Campo Minato JS

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Dichiarazione variabili
var arrayMine = [];
var numRnd = 0;
var count = 0;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
do {
  numRnd = getRandomIntInclusive(1, 100);
  if(isAbsent(arrayMine, numRnd)) {
  arrayMine.push(numRnd);
  }
} while(arrayMine.length < 16);

console.log(arrayMine);

// Definizione funzioni

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}
// Definisco una funzione che restituisce true se un numero è presente nell'array e false viceversa.
function isAbsent(array, number) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == number) {
      return false;
    }
  }
  return true;
}
