document.addEventListener('DOMContentLoaded', function () {

    
    function firstPageContorller (){
        var homePage = document.getElementById("home-page").innerHTML;
        document.getElementById("contentd").innerHTML = homePage;
        var dealTamplate = document.getElementById('deal-template').innerHTML;
        var allDeals = DealStorage();
        var dealPage = Handlebars.compile(dealTamplate);
        document.querySelector('#conteiner-for-offer').innerHTML=dealPage({allDeals: allDeals });
       
    }
   
    window.addEventListener("scroll", scroll, false)
    
    function scroll() {
        var navigation = document.getElementsByClassName("navbar")[0];
        if (location.hash.slice(1) == "") {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navigation.style.background ='rgb(255, 254, 254)';
                document.querySelectorAll(".navbar-nav a").forEach(a => a.style.color = "grey")
                } else {
                    navigation.style.background ='none';
                    document.querySelectorAll(".navbar-nav a").forEach(a => a.style.color = "white")  
            }
        } else {
            document.querySelectorAll(".navbar-nav a").forEach(a => a.style.color = "grey");
            document.getElementsByClassName("navbar")[0].style.background = "'rgb(255, 254, 254)'"
            document.getElementsByClassName("navbar")[0].style.position = "fixed"

        }
    }
    

    document.getElementById("logo").addEventListener("click", function(){
        location.replace("")
        
    }, false)
   
function router(){ 

    var page = location.hash.slice(1);
        switch (page) {
            case "menu":
            pizzaController();
            document.querySelector("#home-page").style.display = "none";
            document.querySelector("#second-page-container").style.display = "none"
            document.querySelector("#banner").style.display = "none";
            break;
            case "restoranti": firstPageContorller();
            break;
            default: firstPageContorller();
            document.querySelector("#second-page-container").style.display = "none"
            break;
            
        }
}
 window.addEventListener('hashchange', router);
 router();

});

