/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const filterByLetter = (words, letter) => {
    const filteredWords = [];

    for(let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if(letter === currentWord[0]) {
            filteredWords.push(currentWord)
        }
    }

    return filteredWords;
}

// Invoca la funzione qui e stampa il risultato in console
const result = filterByLetter(names, 'A');
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]