function router() {

    $("#contentd").empty();
    $("#banner").hide();
    $("#menu-contend").show();
    var page = location.hash.slice(1);
    switch (page) {
        case "menu":
            pizzaController().loadPizza();
        case "pizza":
            pizzaController().loadPizza();
            break;
        case "pasta":
            pastaController().loadPasta();
            break;
        case "salads":
            saladsController().loadSalads();
            break;
        case "sandwich":
            sandwichController().loadSandwich();
            break;
        case "dips":
            firstPageContorller().render();
            break;
        case "desserts":
            firstPageController().render();
            break;
        case "restoranti":
            firstPageController().render();
            break;
        case "basket":
            $("#menu-contend").hide();
            basketController().render();
            break;
        case "login":
            $("#menu-contend").css("visibility","hidden");
            loginController().init();
            break;
        default: 
            firstPageController().render();
            $("#banner").show();
            $("#menu-contend").hide();
            break;

    }
}

$(function () {
    window.addEventListener('hashchange', router);
    router();
    logoListener();
})
