const persoana = { nume: "Ana", varsta: 25 };
const job = { functie: "Developer", locatie: "Chisinau" };

const peopleInformation = {...persoana,...job}

const {nume, functie, locatie} = peopleInformation;
console.log(`Nume: ${nume}`)
console.log(`Functia: ${functie}`)
console.log(`Locatia: ${locatie}`)

// 1. Combină cele două obiecte într-un singur obiect numit profil
// 2. Folosind destructurarea, extrage numele, funcția și locația și afișează-le