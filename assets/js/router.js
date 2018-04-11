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
            firstPageContorller();
            break;
        case "desserts":
            firstPageController();
            break;
        case "restoranti":
            firstPageController();
            break;
        case "basket":
            basketController();
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
