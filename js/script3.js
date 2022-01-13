// ? SNACK 3 

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const userName = ['Aleandro', 'Matteo', 'Giulia', 'Francesco'];
const userSurname = ['Basilico', 'Rossi', 'Verdi', 'Bianchi'];

let nameMixed = [];

while (nameMixed.length < 3) {

    const firstName = Math.floor(Math.random() * userName.length);
    const secondName = Math.floor(Math.random() * userSurname.length);

    const name = userName[firstName];
    const surname = userSurname[secondName];

    const mixedPeople = `${name} ${surname}`;

    console.log(mixedPeople);

    if (!nameMixed.includes(mixedPeople)) {
        nameMixed.push(mixedPeople);
    }
}

console.log(nameMixed);
