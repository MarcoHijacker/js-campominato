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


// Riempio un array con 16 numeri, da 1 a 100, casuali e diversi fra loro sfruttando isAbsent, da me definita in basso
do {
  numRnd = getRandomIntInclusive(1, 100);
  if(isAbsent(arrayMine, numRnd)) {
  arrayMine.push(numRnd);
  }
} while(arrayMine.length < 16);

console.log(arrayMine); // Stampo in console l'array con le mine, sperando che l'utente non sia uno sviluppatore web...

alert("Benvenuto a Campo Minato! Ho appena piazzato 16 mine su 16 numeri random (Da 1 a 100)!");

// Definisco un array con i numeri inseriti dall'utente, se il numero non è nell'array con i numeri 'minati', prendo in input il numero.
while(arrayUser.length < 84 && isAbsent(arrayMine, numUser)) { // Anche l'improbabile caso di vittoria arresterebbe il while
  numUser = parseInt(prompt("Inserisci un numero da 1 a 100: "));
  if(numUser < 1 || numUser > 100) { // Controllo di fair play!
    alert("Cosa non ti è chiaro di \'numero DA 1 A 100\'?");
  } else if(isAbsent(arrayUser, numUser) && isAbsent(arrayMine, numUser)) { // Condizione (la più stringente) di vittoria
    arrayUser.push(numUser);
    score++;
    alert("Che fortuna! Il numero " + numUser + " non era una mina. Punteggio: " + score); // Stampo messaggio di vittoria e riavvio una nuova iterazione
  } else if(isPresent(arrayUser, numUser)){ // Se il numero è già stato inserito dall'utente, mostro un alert e avvio nuova iterazione col prompt
    alert("Hai già inserito questo numero. Riprova!")
  }
}
// I 2 possibili scenari in cui ci troviamo, dopo il blocco di codice 32-42, sono: ho fatto 84 punti e quindi ho vinto oppure ho beccato una bomba ed interrompo il ciclo (seconda cond del while falsa)
if(score < 84) {
  alert("Boom! Purtroppo il numero " + numUser + " era una mina! Punteggio: " + score); // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
} else if(score == 84) {
  alert("Fantastico! Ti consiglio di andare a Las Vegas, hai evitato tutte le mine. Punteggio: 84");
  }

// Definizione funzioni

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
// Definisco funzione speculare per motivi di praticità.
function isPresent(array, number) {
  for (var i = 0; i < array.length; i++) {
    if(array[i] == number) {
      return true;
    }
  }
  return false;
}
