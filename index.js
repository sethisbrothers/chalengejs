function Envoyer() {
    //Déclaration des variables du formulaire
    let name = document.querySelector("#name");
    let mail = document.querySelector("#mail");
    let number = document.querySelector("#number");
    let choice = document.querySelector("#choice");
    let commenter = document.querySelector("#commenter");

    // Déclaration des variables pour l'affichage
    let mes = document.querySelector("#message1");
    let mess = document.querySelector("#message2");
    let messa = document.querySelector("#message3");
    let messag = document.querySelector("#message4");
    let message = document.querySelector("#message5");

    //Attribution des valeurs à afficher par les variables d'affichage
    mes.innerHTML = name.value;
    mess.innerHTML = mail.value;
    messa.innerHTML = number.value;
    messag.innerHTML = choice.value;
    message.innerHTML = commenter.value;
}
