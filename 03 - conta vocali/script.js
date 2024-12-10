/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */
const word = 'javascript';



// Dichiara la funzione qui.
const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counterVowels = 0;
    let flag;
    for(let i = 0; i < word.length; i++) {
        const currentLetter = word[i];
        flag = false;
        console.log("Lettera su cui stiamo ciclando", currentLetter)

        for(let j = 0; j < vowels.length && flag === false; j++) {
            const currentVowel = vowels[j];
            if(currentLetter === currentVowel) {
                counterVowels++;
                flag = true;
            }
            console.log(currentVowel);
        }
    }

    return counterVowels;

}

// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log(result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)