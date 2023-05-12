// ? Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// ? Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//? il prezzo del biglietto è definito in base ai km (0.21 € al km)
//? va applicato uno sconto del 20% per i minorenni 
//? va applicato uno sconto del 40% per gli over 65.

//? L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).


// * numero di chilometri che vuole percorrere e l'età del passeggero.
let  userkilometers = parseInt(prompt ('Insert kilometers'));

let userAge = parseInt(prompt ('Insert your age'));

const adult = 18;

const major = 65;

// ! calcolo prezzo biglietto
let kmPrice = Math.floor( userkilometers * 0.21);
console.log(kmPrice);




// ? const underagediscount = 20%

//? const majordiscount = 40%




if(userAge >= adult){
    console.log('You are adult');
}else if(userAge < adult){
    console.log('You are not adult');
}
if ((userAge >= 18) && (userAge < 65)){
    console.log('You are not major');
}else if ((userAge >= 65) && (userAge > 65)){
    console.log('You are major');
}else if (isNaN(userAge)|| isNaN(userkilometers)){
    console.log('ERROR');
}





// ? let UserInfo =;

// ? document.getElementById('ticket-price') .innerHTML = UserInfo;
