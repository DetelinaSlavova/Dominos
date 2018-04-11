function router() {

    $("#contentd").empty();

    var page = location.hash.slice(1);
    switch (page) {
        case "menu":
            pizzaController().loadPizza();
        case "pizza":
            pizzaController();
            break;
        case "pasta":
            pastaController();
            break;
        case "salads":
            saladsController();
            break;
        case "sandwich":
            sandwichController();
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
            break;

    }
}

$(function () {
    window.addEventListener('hashchange', router);
    router();
    logoListener();
})
