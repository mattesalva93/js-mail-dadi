
//Definizione di rematch al click di gioca di nuovo


let tiro = document.querySelector(".btn");

tiro.addEventListener("click", function(){

    let tiroutente = Math.floor(Math.random()*6 +1);
    console.log(tiroutente);

    let tiropc = Math.floor(Math.random()*6 +1);
    console.log(tiropc);


//condizioni per decretare vittoria/pareggio/sconfitta
let esito = document.getElementById("esito");
if (tiroutente > tiropc){
    console.log("Hai vinto!");
    esito.innerHTML = 'TU! HAI VINTO!'
}else if (tiroutente < tiropc){
    console.log("Hai perso!");
    esito.innerHTML = 'TU! HAI PERSO!'
}else{
    console.log("Pareggio!");
    esito.innerHTML = 'PAREGGIO!'
}


//if per possibile comparse del dado dell'utente
let scatola = document.getElementById("dadoutente");
if(tiroutente == 1){
    scatola.innerHTML = '<img src="img/dice-six-faces-one.svg">';
}else if (tiroutente == 2){
    scatola.innerHTML = '<img src="img/dice-six-faces-two.svg">';
}else if (tiroutente == 3){
    scatola.innerHTML = '<img src="img/dice-six-faces-three.svg">';
}else if (tiroutente == 4){
    scatola.innerHTML = '<img src="img/dice-six-faces-four.svg">';
}else if (tiroutente == 5){
    scatola.innerHTML = '<img src="img/dice-six-faces-five.svg">';
}else{
    scatola.innerHTML = '<img src="img/dice-six-faces-six.svg">';
}

//if per possibile comparse del dado del pc
let scatola2 = document.getElementById("dadopc");
if(tiropc == 1){
    scatola2.innerHTML = '<img src="img/inverted-dice-1.svg">';
}else if (tiropc == 2){
    scatola2.innerHTML = '<img src="img/inverted-dice-2.svg">';
}else if (tiropc == 3){
    scatola2.innerHTML = '<img src="img/inverted-dice-3.svg">';
}else if (tiropc == 4){
    scatola2.innerHTML = '<img src="img/inverted-dice-4.svg">';
}else if (tiropc == 5){
    scatola2.innerHTML = '<img src="img/inverted-dice-5.svg">';
}else{
    scatola2.innerHTML = '<img src="img/inverted-dice-6.svg">';
}

})
