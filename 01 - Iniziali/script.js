/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const firstLetter = (words) => {
    const letters = [];
    for(let i = 0; i < words.length; i++) {
        letters.push(words[i][0])
    }
    return letters;
}

// Invoca la funzione qui e stampa il risultato in console
const result = firstLetter(names);
console.log(result);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]