
function basketController() {
    var orders = [];
    document.getElementById("basket").style.display = "block";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("orderPizza").style.display = "none";
    document.getElementById("menu-contend").style.display = "none";
    if (localStorage.getItem("ordered") !=null){
        var productInBasket = 0;
        var products = ++productInBasket;
        document.getElementById("productInBasket").innerHTML=products;
        var order = JSON.parse(localStorage.getItem("ordered"))
        orders.push(order);
        var tr = document.createElement("tr");
        var html = "<td><img src = " + order.url + " width = '60px' height = '60px'/></td><td>" + 
        order.name + "</td><td >" +order.qnt + " </td><td >" +order.price + "</td>"
        tr.innerHTML =html;
        document.getElementById("nameOfProduct").appendChild(tr);
        
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("confirm").addEventListener("click", pizzaController )
})

    
    