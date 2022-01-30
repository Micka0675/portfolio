var light = document.getElementById("light");
var comBox = document.getElementById("comBox");
var envoi = document.getElementById("com");
var blocPendu = document.getElementById("blocPendu");
var blocBblio = document.getElementById("blocBblio");
var blocCv = document.getElementById("blocCv");
var blocSp = document.getElementById("blocSp");
var real = document.querySelectorAll(".real");
var pop = document.querySelectorAll(".pop");

console.log(real);
envoi.addEventListener('click', afficheInfo);

blocPendu.addEventListener('mouseover',detail);
blocPendu.addEventListener('mouseout',hide);

blocBblio.addEventListener('mouseover',detail2);
blocBblio.addEventListener('mouseout',hide2);

blocCv.addEventListener('mouseover',detail3);
blocCv.addEventListener('mouseout',hide3);

blocSp.addEventListener('mouseover',detail4);
blocSp.addEventListener('mouseout',hide4);

// for ( i = 0 ; i <= real[4] ; i++ )
//     {
//         real[i].addEventListener('onmouseover', detail);
//     }

function afficheInfo()
{
    var name = document.body.querySelectorAll(".info");
    var commentaire = document.getElementById("commentaire");

    comBox.innerHTML = "<p id=\"vae\"> Vous avez entré : </p> <ul id=\"comsList\"><li>" + name[0].value + "</li><li>" + name[1].value + "</li><li>" + name[2].value + "</li><li>" + commentaire.value + "</li></ul>"

}

light.addEventListener('click', lightMode);

function lightMode()
{
    var element = document.body;
    element.classList.toggle("lightMode");
}

function detail()
{
        {
            document.getElementById('pop1').style.visibility = "visible";
            pop[0].innerHTML = "<p>Un jeu du pendu réalisé en Javascript</p>";
        }
        
}

function detail2()
{
        {
            document.getElementById('pop2').style.visibility = "visible";
            pop[1].innerHTML = "<p>Site test realisé dans le cadre d'un ECF</p>";
        }
        
}

function detail3()
{
        {
            document.getElementById('pop3').style.visibility = "visible";
            pop[2].innerHTML = "<p>Mon Cv en ligne!</p>";
        }
        
}

function detail4()
{
        {
            document.getElementById('pop4').style.visibility = "visible";
            pop[3].innerHTML = "<p>Site test associatif</p>";
        }
        
}

function hide()
{
    document.getElementById('pop1').style.visibility = "hidden";
}

function hide2()
{
    document.getElementById('pop2').style.visibility = "hidden";
}

function hide3()
{
    document.getElementById('pop3').style.visibility = "hidden";
}

function hide4()
{
    document.getElementById('pop4').style.visibility = "hidden";
}









