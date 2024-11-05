//3 - people.js*
//Importa la tua funzione da names.js
//Importa la tua funzione da hobbies.js
//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies.
//All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const createFullName=require('./names')
const createHobbies=require('./hobbies')

function individual(){

    const fullname = createFullName('Alice', 'Felipe');
    const hobbies = createHobbies('talking', 'lsleeping', 'driving');
}