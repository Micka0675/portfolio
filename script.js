var light = document.getElementById("light");
var comBox = document.getElementById("comBox");
var envoi = document.getElementById("com");
var blocPendu = document.getElementById("blocPendu");
var blocBblio = document.getElementById("blocBblio");
var blocCv = document.getElementById("blocCv");
var blocSp = document.getElementById("blocSp");
var real = document.querySelectorAll(".real");
var pop = document.querySelectorAll(".pop");
var choix1 = document.getElementById("choix1");
var choix2 = document.getElementById("choix2");
var choix3 = document.getElementById("choix3");
var opts = document.querySelectorAll(".opts");
var txtMaq = document.getElementById("txtMaq");


console.log(choix1);
console.log(opts);
console.log(txtMaq);


choix1.addEventListener('change', popDiv);


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
function popDiv()
{
    var txtIntS = document.getElementById('txtIntS');
    var txtIntW = document.getElementById('txtIntW');
    var txtGest = document.getElementById('txtGest');
    var txtBack = document.getElementById('txtBack');
    var txtBase = document.getElementById('txtBase');
    var txtSecu = document.getElementById('txtSecu');
// for (j = 0 ; j < choix.length ; j++)
    // {
        // for (k = 0 ; k < opts.length ; k++)
        // {
    console.log(opts[1].value);
    console.log(opts[2].value);
    console.log(opts[3].value);
    console.log(opts[4].value);
    console.log(opts[5].value);
    console.log(opts[6].value);
    console.log(opts[7].value);


    if (opts[0].selected == true)
    {
        txtMaq.style.display = "none";
        txtIntS.style.display = "none";
        txtIntW.style.display = "none";
        txtGest.style.display = "none";
        txtBack.style.display = "none";
        txtBase.style.display = "none";
        txtSecu.style.display = "none";
    }
    if (opts[1].selected == true)
    {
        txtMaq.style.display = "block";
        txtIntS.style.display = "none";
        txtIntW.style.display = "none";
        txtGest.style.display = "none";
        txtBack.style.display = "none";
        txtBase.style.display = "none";
        txtSecu.style.display = "none";
    }
    else
    {
        txtMaq.style.display = "none";
    }
    if (opts[2].selected == true)
    {
        choix2.style.display ="block";
        choix2.addEventListener('change' , popDiv2);
        
        function popDiv2()
        {
            
        
            if (opts[5].selected == true)
            {
                txtIntS.style.display = "block";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtIntS.style.display = "none";
            }
            if (opts[6].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "block";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtIntW.style.display = "none";
            }
            if (opts[7].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "block";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtGest.style.display = "none";
            }
        }
    }
    else
    {
        choix2.style.display = "none";
    }
    if (opts[3].selected == true)
    {
        choix3.style.display ="block";
        choix3.addEventListener('change' , popDiv3);
        
        function popDiv3()
        {
            
        
            if (opts[9].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "block";
                txtBase.style.display = "none";
                txtSecu.style.display = "none";
            }
            else
            {
                txtBack.style.display = "none";
            }
            if (opts[10].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "block";
                txtSecu.style.display = "none";
            }
            else
            {
                txtBase.style.display = "none";
            }
            if (opts[11].selected == true)
            {
                txtIntS.style.display = "none";
                txtIntW.style.display = "none";
                txtGest.style.display = "none";
                txtBack.style.display = "none";
                txtBase.style.display = "none";
                txtSecu.style.display = "block";
            }
            else
            {
                txtSecu.style.display = "none";
            }
        }
    }
    else
    {
        choix3.style.display = "none";
    }
}

function afficheInfo()
{
    var name = document.body.querySelectorAll(".info");
    var commentaire = document.getElementById("commentaire");

    comBox.innerHTML = "<p id=\"vae\"> Vous avez entr?? : </p> <ul id=\"comsList\"><li>" + name[0].value + "</li><li>" + name[1].value + "</li><li>" + name[2].value + "</li><li>" + commentaire.value + "</li></ul>"

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
            pop[0].innerHTML = "<p>Un jeu du pendu r??alis?? en Javascript</p>";
        }
        
}

function detail2()
{
        {
            document.getElementById('pop2').style.visibility = "visible";
            pop[1].innerHTML = "<p>Site test realis?? dans le cadre d'un ECF</p>";
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
            pop[3].innerHTML = "<p>Un motus mobile en responsive</p>";
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


    







