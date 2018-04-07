function saladsController (){
    
    loadSalads()
    .then(function (data) {
        var saladTamplate = document.getElementById('salad-template').innerHTML;
        var allSalads = data;
        var saladPage = Handlebars.compile(saladTamplate);
        document.getElementById("menu-contend").innerHTML=" ";
        document.getElementById("menu-contend").innerHTML=saladPage ({allSalad: allSalads });
        document.getElementById("second-page-container").style.display = "block";
        document.querySelector("#home-page").style.display = "none";
        document.querySelector("#banner").style.display = "none";
        document.querySelector("#contentd").style.display = "none";

    })
    .catch(function (error) {
        document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
    
    });
} 

function sandwichController (){
    
    loadSandwich()
    .then(function (data) {
        var sandwichTamplate = document.getElementById("sandwich-template").innerHTML;
        var allSandwich = data;
        var sandwichPage = Handlebars.compile(sandwichTamplate);
        document.getElementById("menu-contend").innerHTML=" ";
        document.getElementById("menu-contend").innerHTML=sandwichPage ({allSandwich: allSandwich });
        document.getElementById("second-page-container").style.display = "block";
        document.querySelector("#home-page").style.display = "none";
        document.querySelector("#banner").style.display = "none";
        document.querySelector("#contentd").style.display = "none";

    })
    .catch(function (error) {
        document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
    
    });
} 