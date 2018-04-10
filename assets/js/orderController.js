
function orderController () {
    var menuContend = document.getElementById("menu-contend")
    menuContend.style.display = "block"
    var btns = menuContend.getElementsByClassName("order")
        function showOrderContainer (){
            event.preventDefault();
            document.getElementById("orderPizza").style.display = "block";
            document.getElementById("menu-contend").style.display = "none"; 
           
        }
        
        for (var i=0; i < btns.length; i++){
        btns[i].setAttribute("id", i);
        btns[i].addEventListener("click", showOrderContainer)
        }

        document.addEventListener('click', function(e) {
            e = e || window.event;
            var target = e.target || e.srcElement
            var index = target.id
            location.hash = "#order"
            var img = document.getElementById("orderPizza").firstElementChild;
            document.getElementById("orderPizza").children[1].innerText = pizzaService.pizzas[index].name;
            img.src = pizzaService.pizzas[index].url; 
            document.getElementById("product_of_pizza").innerHTML = " "
            document.getElementById("product_of_pizza").innerHTML += pizzaService.pizzas[index].description
        }, false);

    
}
