// generatore di numeri

const tiroutente = Math.floor(Math.random()*6 +1);
console.log(tiroutente);

const tiropc = Math.floor(Math.random()*6 +1);
console.log(tiropc);

//condizioni per decretare vittoria/pareggio/sconfitta
if (tiroutente > tiropc){
    console.log("Hai vinto!");
}else if (tiroutente < tiropc){
    console.log("Hai perso!");
}else{
    console.log("Pareggio!");
}
