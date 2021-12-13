//creare un array che definisca un elenco di mail
const utenti = ["tizioincognito@segreto.it", "tiziosospetto@segreto.it", "tiziosegreto@segreto.it", "tizionascosto@segreto.it", "tizioocculto@segreto.it", "tiziomalandrino@segreto.it"];


//creare ciclo che definisca in caso di esito positivo o negativo messaggio
let emailcheck = document.querySelector(".btn");

emailcheck.addEventListener("click", function(){
    
    //richiede all'utente di inserire la propria mail
    let emailinput = document.getElementById("emailinput").value;
    console.log(emailinput);
    
    for (let i = 0; i < utenti.length; i++) {
        if (utenti[i] != emailinput) {
            console.log("Email errata");
            scatola.innerHTML = '<div class="col- m-1 text-center"> Non c\'è nulla da vedere qui, circolare </div>';

        }else{
            console.log("Email corretta");
            scatola.innerHTML = '<div class="col- m-1 text-center">' + 'Benvenuto '  + emailinput + '</div>';
            break
        }
    }

})