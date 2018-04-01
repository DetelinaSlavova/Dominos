


     function pizzaController (){
        
             load()
             .then(function (data) {
                 var pizzaTamplate = document.getElementById('pizza-template').innerHTML;
                 var allPizza = data;
                 var pizzaPage = Handlebars.compile(pizzaTamplate);
                 document.getElementById("second-page-container").innerHTML=pizzaPage({allPizza: allPizza });
                 var secondPage = document.getElementById("second-page-container").innerHTML;
                 document.getElementById("contentd").innerHTML = secondPage;

             })
             .catch(function (error) {
                 document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
             
             });
         } 
         




    

