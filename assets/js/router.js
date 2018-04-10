document.addEventListener('DOMContentLoaded', function () {
function router(){ 
    
        var page = location.hash.slice(1);
            switch (page) {
                case "menu":
                pizzaController();
                document.querySelector("#home-page").style.display = "none";
                document.querySelector("#second-page-container").style.display = "none"
                document.querySelector("#banner").style.display = "none";
                break;
                case "pizza":
                pizzaController();
                document.querySelector("#home-page").style.display = "none";
                document.querySelector("#second-page-container").style.display = "none"
                document.querySelector("#banner").style.display = "none";
                break;
                case "pasta":
                pastaController();
                case "restoranti": firstPageContorller();
                break;
                default: firstPageContorller();
                document.querySelector("#second-page-container").style.display = "none"
                break;
                
            }
    }
     window.addEventListener('hashchange', router);
     router();
    
    }, false);
    