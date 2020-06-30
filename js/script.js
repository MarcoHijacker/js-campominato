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
var arrayUser = [];
var numUser = 0;
var numRnd = 0;
var count = 0;
var score = 0;


// Il computer deve generare 16 numeri casuali tra 1 e 100.
do {
  numRnd = getRandomIntInclusive(1, 100);
  if(isAbsent(arrayMine, numRnd)) { // I numeri non possono essere duplicati
  arrayMine.push(numRnd);
  }
} while(arrayMine.length < 16);

console.log(arrayMine);

alert("Benvenuto a Campo Minato! Ho appena piazzato 16 mine su 16 numeri random!");

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
while(arrayUser.length < 84 && isAbsent(arrayMine, numUser)) { // Se il numero è presente nella lista dei numeri generati, la partita termina
  numUser = parseInt(prompt("Inserisci un numero da 1 a 100: "));
  if(isAbsent(arrayUser, numUser) && isAbsent(arrayMine, numUser)) {
    arrayUser.push(numUser);
    score++;
    alert("Che fortuna! Il numero " + numUser + " non era una mina. Punteggio: " + score); // , altrimenti si continua chiedendo all’utente un altro numero.
  } else if(isAbsent(arrayMine, numUser)){ // L’utente non può inserire più volte lo stesso numero.
    alert("Hai già inserito questo numero. Riprova!")
  }
}
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
if(score < 84) {
  alert("Boom! Purtroppo il numero " + numUser + " era una mina! Punteggio: " + score); // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
} else if(score == 84) {
  alert("Fantastico! Ti consiglio di andare a Las Vegas, hai evitato tutte le mine. Punteggio: 84");
}

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
// Definisco funzione speculare per motivi di sanità mentale...
function isPresent(array, number) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == number) {
      return true;
    }
  }
  return false;
}
