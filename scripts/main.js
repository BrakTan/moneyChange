var reste = 0;
var valeurInitiale;
var restant = document.getElementById('reste');
var boite = document.getElementById('boite');
//resteARendre()
var test = document.getElementById('test');
/*var titre = document.getElementById('titre');
titre.addEventListener('mouseover', function(ev){
    ev.innerHTML = 'zobi';
})*/

function clique(event){
    reste *= 100;
    reste -= parseInt(event.target.getAttribute('value'), 10);
    reste = Math.round(reste) / 100;
    /*if(reste == 0){
        restant.innerHTML = "Parfait ! Tu as bien rendu la monnaie!" 
    }
    else if(reste < 0){
        restant.innerHTML = "Tu as rendu trop de monnaie"
    }
    else{
        resteARendre();
    }*/
    var image = event.target.getAttribute("src");
    var valeur = event.target.getAttribute("value");
    var data = event.target.getAttribute('class');
    var elmt = document.createElement('img');
    boite.appendChild(elmt);
    elmt.setAttribute('value', valeur);
    elmt.setAttribute('src', image);
    elmt.setAttribute('class', data);
    elmt.setAttribute('onclick', 'efface(event)');
    //resteARendre();
    
}

function efface(event){
    reste*=100;
    reste += parseInt(event.target.getAttribute('value', 10));
    reste /= 100;
    event.target.remove();
    //resteARendre();
}

function resultat(event){
    if(reste == 0){
        boite.style.backgroundColor = "#9aff8f";
        restant.innerHTML = "Parfait ! Tu as bien rendu la monnaie";
    }
    else if(reste > 0 && reste < valeurInitiale){
        boite.style.backgroundColor = "#ff6161";
        restant.innerHTML = "Tu n'as pas rendu assez de monnaie";
    }
    else if(reste < 0){
        boite.style.backgroundColor = "#ff6161";
        restant.innerHTML = "Tu as rendu trop de monnaie"
    }
    else if(reste == valeurInitiale){
        boite.style.backgroundColor = "#e6e3cf";
        restant.innerHTML = "";
    }
}

function montant(event){
    var valeur = parseInt(event.target.getAttribute("value"),10);
    var montant;
    var payement;
    restant.innerHTML = ""
    //Supprime les billets et pièces présente dans la boite pour une nouvelle partie.
    while(boite.hasChildNodes()){
        boite.removeChild(boite.lastChild);
    }
    boite.style.backgroundColor = "#e6e3cf";
    switch(valeur){
        case 1:
            do{
                montant = Math.floor(Math.random()*100);   
            }while(montant == 0);
            do{
                payement = Math.floor(Math.random()*100+1);
            }while(payement <= montant);
            reste = payement - montant;
            valeurInitiale = reste;
            afficheSommes(montant, payement);
            break;
        case 2:
            montant = Math.floor(Math.random()*10000);
            montant = Math.round(montant)/100;
            do{
                payement = Math.floor(Math.random()*10000);
                payement = Math.round(Math.round(payement)/100+1);
            }while(payement <= montant);
            reste = payement*100 - montant*100;
            reste = Math.round(reste) / 100;
            valeurInitiale = reste;
            afficheSommes(montant, payement);
            break;
        case 3:
            do{
                montant = Math.floor(Math.random()*100000);
                montant = Math.round(montant)/100;
            }while(montant < 100);
            do{
                payement = Math.floor(Math.random()*100000);
                payement = Math.round(Math.round(payement)/100+1);
            }while(payement <= montant);
            reste = payement*100 - montant*100;
            reste = Math.round(reste) / 100;
            valeurInitiale = reste;
            afficheSommes(montant, payement);
            break;
    }
    //resteARendre();
}

function afficheSommes(montant, payement){
    document.getElementById("sommes").innerHTML = "Le client a un caddie de "+montant+
    "€. <br>Il donne "+payement+"€.";
}

/*function resteARendre(){
    restant.innerHTML = 'Reste à rendre : '+reste;
}*/
