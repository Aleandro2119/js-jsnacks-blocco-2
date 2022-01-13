// ? SNACK 5

// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

const firstArray = ['3', '34', '57', '90', '12'];
const secondArray = ['7', '34', '65'];

console.log(firstArray);
console.log(secondArray);

while (firstArray.length !== secondArray.length) {

    const number = Math.floor(Math.random() * 100) + 1;

    if (firstArray.length > secondArray.length) {

        secondArray.push(number);
    } else {
        firstArray.push(number);
    }
}