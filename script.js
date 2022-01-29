var light = document.getElementById("light");
var comBox = document.getElementById("comBox");
var envoi = document.getElementById("com");

envoi.addEventListener('click', afficheInfo);

function afficheInfo()
{
    var name = document.body.querySelectorAll(".info");
    var commentaire = document.getElementById("commentaire");

    console.log(name[0].value);
    console.log(name[1].value);
    console.log(name[2].value);
    console.log(commentaire.value);
    comBox.innerHTML = "<p id=\"vae\"> Vous avez entré : </p> <ul id=\"comsList\"><li>" + name[0].value + "</li><li>" + name[1].value + "</li><li>" + name[2].value + "</li><li>" + commentaire.value + "</li></ul>"


}




light.addEventListener('click', lightMode);

function lightMode()
{
    var element = document.body;
    element.classList.toggle("lightMode");
}

