// Es.1 Somma Posizioni dispari Array - 30 Giugno 2020 JS

// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.

// Dichiarazione variabili
var array = [1,2,3,4,5,6,7,8,9,10];

console.log(sommaDispari(array));

// Definizione funzioni
function sommaDispari(array) {
  var arraySomma = 0;
  for (var i = 0; i < array.length; i+=2) {
    arraySomma += array[i];
  }
  return arraySomma;
}
