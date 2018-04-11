
function pastaController (){

        loadPasta()
        .then(function (data) {
            var pastaTamplate = document.getElementById('pasta-template').innerHTML;
            var allPasta = data;
            var pastaPage = Handlebars.compile(pastaTamplate);
            document.getElementById("menu-contend").innerHTML=" ";
            document.getElementById("menu-contend").innerHTML=pastaPage ({allPasta: allPasta });
            document.getElementById("second-page-container").style.display = "block";
            document.querySelector("#home-page").style.display = "none";
            document.querySelector("#banner").style.display = "none";
            document.querySelector("#contentd").style.display = "none";
            orderPastaController();

        })
        .catch(function (error) {
            document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
        
        });
    } 
    




    

