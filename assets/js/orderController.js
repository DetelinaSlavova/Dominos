
function orderPizzaController () {
    var menuContend = document.getElementById("menu-contend");
    menuContend.style.display = "block";
    var btns = menuContend.getElementsByClassName("order");
    var pizzas = [];
    
        function showOrderContainer (){
            document.getElementById("orderPizza").style.display = "block";
            document.getElementById("menu-contend").style.display = "none"; 
        }
        
        for (var i=0; i < btns.length; i++){
        btns[i].setAttribute("id", i);
        btns[i].addEventListener("click", showOrderContainer);

        btns[i].addEventListener('click', function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement
            var index = target.id
            location.hash = "#order"
            var img = document.getElementById("orderPizza").firstElementChild;
            var name = pizzaService.pizzas[index].name;
            var url = pizzaService.pizzas[index].url;
            var description = pizzaService.pizzas[index].description;
            var elem = document.getElementById("size");
            document.getElementById("orderPizza").children[1].innerText = name;
            img.src = url; 
            document.getElementById("product_of_pizza").innerHTML = " ";
            document.getElementById("product_of_pizza").innerHTML += description;
            
            function calculetePrice(){
                var selectedPieces= elem.options[elem.selectedIndex].value;
                if (selectedPieces == "half") {
                    price = (pizzaService.pizzas[index].price/2).toFixed(2)
                    } else {
                        if (selectedPieces == "12pieces") {
                        price = (pizzaService.pizzas[index].price*1.40).toFixed(2);
                        } else {
                        price = pizzaService.pizzas[index].price.toFixed(2)
                        }
                    } 
                    var qnt  = +document.getElementsByClassName("form-control")[0].innerText;
                    document.getElementById("price").innerText = price*qnt;
                   
            }
                elem.addEventListener('change', calculetePrice);

                document.getElementsByClassName("minus-button")[0].addEventListener("click", calculetePrice)
                document.getElementsByClassName("plus-button")[0].addEventListener("click", calculetePrice)

            function orderPizza (){
                var newPizza = new Pizza(url, name, description );
                newPizza.dough = document.getElementById("typeOfDougt").options[typeOfDougt.selectedIndex].value;
                newPizza.pieces = document.getElementById("size").options[typeOfDougt.selectedIndex].value;
                newPizza.qnt = document.getElementsByClassName("form-control")[0].innerText;
                newPizza.price = document.getElementById("price").innerText;
                localStorage.setItem("ordered", JSON.stringify(newPizza))
            }
           
        
            
            var addButton = document.getElementsByClassName("added")[0];
            addButton.addEventListener('click', orderPizza, basketController);  
            addButton.addEventListener('click', pizzaController);
            
        });
    }
}
              

$(document).ready( () => {
    $('.minus-button').click( (e) => {
      
      // change this to whatever minimum you'd like
      const minValue = 1;
  
      const currentInput = $(e.currentTarget).parent().prev()[0];
  
      let minusInputValue = $(currentInput).html();
  
      if (minusInputValue > minValue) {
        minusInputValue --;
        $($(e.currentTarget).next()).removeAttr('disabled');
        $(currentInput).html(minusInputValue);
  
        if (minusInputValue <= minValue) {
          $(e.currentTarget).attr('disabled', 'disabled');
        }
      }
    });

    $('.plus-button').click( (e) => {
      
        const maxValue = 10
    
        const currentInput = $(e.currentTarget).parent().prev()[0];
    
        let plusInputValue = $(currentInput).html();
    
        if (plusInputValue < maxValue) {
          plusInputValue ++;
          $($(e.currentTarget).prev()[0]).removeAttr('disabled');
          $(currentInput).html(plusInputValue);
    
          if (plusInputValue >= maxValue) {
            $(e.currentTarget).attr('disabled', 'disabled');
          }
        }
      });
    });