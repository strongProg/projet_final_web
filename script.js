document.forms["enregistrer"].addEventListener("submit", function(e) {
    
    var erreur;

    var inputs = this.getElementByTagName("input");

    for (var i = 0; i < this.inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
             erreur = "Veuillez rentrer une valeur pour tous les champs"
            break;
            }   
    }
    

    if (erreur) {

        document.getElementById("erreur").innerHTML = erreur;
        return false
    } else {
        alert('Billet réservé !');

    }
    
    

});
