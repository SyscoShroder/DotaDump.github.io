var button = document.getElementById("Button");
var HeroFiller = document.getElementById("Hero-info");

button.addEventListener("click", function() {
var request = new XLMHttpRequest();
request.open('GET', 'https://syscoshroder.github.io/DotaDump.github.io/DotaHero.json');

request.onload = function(){
var Data = JSON.parse(request.responseText);
renderInfo(Data);
}

request.send();
});

function renderInfo(dataDump) {
    var htmlOutput = "";

    for (i=0; i < dataDump.length; i++){
        htmlOutput += "<p> <h2>" + dataDump[i].Name + "</h2><br> Starting Strength: " + 
        dataDump[i].StartStren + " <br> Strength per level: " + dataDump[i].StrenBonus
        + "<br> Starting Agility: " + dataDump[i].StartAgility + "<br> Agility per level: " + 
        dataDump[i].AgilityBonus + " <br> Starting Intelligence: " + dataDump[i].StartIntell + 
        " <br> Intelligence per level: " + dataDump[i].IntellBonus + "<br> Starting Health: " + 
        dataDump[i].StartHealth + " <br> Starting Mana: " + dataDump[i].StartMana + 
        "<br> Max Damage output from starting level: " + dataDump[i].Damage + "</p>";
    }
}
