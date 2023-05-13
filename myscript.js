// ? Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// ? Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//? il prezzo del biglietto è definito in base ai km (0.21 € al km)
//? va applicato uno sconto del 20% per i minorenni 
//? va applicato uno sconto del 40% per gli over 65.

//? L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).


// * numero di chilometri che vuole percorrere e l'età del passeggero.
let  userkilometers = parseInt(prompt ('Insert kilometers'));

let userAge = parseInt(prompt ('Insert your age'));


// ! calcolo prezzo biglietto
let kmPrice = Math.floor( userkilometers * 0.21);


//? Sconto del 20% per i minorenni
const underagediscount = Math.floor (kmPrice - (( 20 / 100)* kmPrice));


//TODO Sconto del 40% per chi ha più di 65 anni
const majordiscount = Math.floor (kmPrice - (( 40 / 100)* kmPrice));

if(userAge < 18){
    console.log('You are young');
    document.getElementById('ticket-price') .innerHTML = underagediscount
}else if((userAge >= 18) && (userAge < 65)){
    console.log('You are adult');
    document.getElementById('ticket-price') .innerHTML = kmPrice
}else if(userAge >=65){
    console.log('You are major');
    document.getElementById('ticket-price') .innerHTML = majordiscount
}else if (isNaN(userAge)|| isNaN(userkilometers)){
    console.log('ERROR');
}



// ? document.getElementById('ticket-price') .innerHTML = 