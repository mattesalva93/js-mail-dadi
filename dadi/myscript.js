
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
    switch(tiroutente){
        case 1:
            scatola.innerHTML = '<img src="img/dice-six-faces-one.svg">';
            break;
        case 2:
            scatola.innerHTML = '<img src="img/dice-six-faces-two.svg">';
            break;
        case 3:
            scatola.innerHTML = '<img src="img/dice-six-faces-three.svg">';
            break;
        case 4:
            scatola.innerHTML = '<img src="img/dice-six-faces-four.svg">';
            break;
        case 5:
            scatola.innerHTML = '<img src="img/dice-six-faces-five.svg">';
            break;
        case 6:
            scatola.innerHTML = '<img src="img/dice-six-faces-six.svg">';
            break;
    }

    //if per possibile comparse del dado del pc
    let scatola2 = document.getElementById("dadopc");
    scatola2.innerHTML = '<img src="img/inverted-dice-'+tiropc+'.svg">';
})
