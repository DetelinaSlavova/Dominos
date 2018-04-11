
     function pizzaController (){
        
             loadPizza()
             .then(function (data) {
                 var pizzaTamplate = document.getElementById('pizza-template').innerHTML;
                 var allPizza = data;
                 var pizzaPage = Handlebars.compile(pizzaTamplate);
                 document.getElementById("menu-contend").innerHTML=pizzaPage({allPizza: allPizza });
                 document.getElementById("second-page-container").style.display = "block";
                 document.querySelector("#home-page").style.display = "none";
                 document.querySelector("#banner").style.display = "none";
                 document.querySelector("#contentd").style.display = "none";
                 document.getElementById("orderPizza").style.display = "none";
                 orderPizzaController();
                 
           })
                 
             .catch(function (error) {
                 document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
             
             });

            
         }

        



    

