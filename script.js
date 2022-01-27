var light = document.getElementById("light");

light.addEventListener('click', lightMode);

function lightMode()
{
    var element = document.body;
    element.classList.toggle("lightMode");
}