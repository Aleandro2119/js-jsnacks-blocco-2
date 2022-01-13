console.log('OK JS!');

// ? SNACK 1

//Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let i = 0
let sum = 0

while (i < 5) {

    const number = parseInt(prompt('Inserire i numeri', '5'));

    sum = sum + number;

    console.log(number)

    i++
}

console.log(sum)