/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const hello = (name) => {
    const now = new Date();
    const currentHour = now.getHours();
    let message = "";

    if(currentHour <= 4) {
        message = "Buona notte";
    } else if(currentHour <= 13) {
        message = "Buongiorno";
    } else if(currentHour <= 17) {
        message = "Buon pomeriggio";
    } else {
        message = "Buona sera";
    }

    message = `${message} ${name}`;

    return message;
}


// Invoca la funzione qui e stampa il risultato in console
const result = hello(name);
console.log(result);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.