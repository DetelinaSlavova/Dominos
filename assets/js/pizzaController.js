var pizzaController = function () {
    var render = function (data) {
        getTemplate('pizza-template').then(function (src) {
            var allPizza = data;
            var pizzaPage = Handlebars.compile(src);
            $("#contentd").append(pizzaPage({ allPizza: allPizza }));
            orderPizzaController();
        });
    }

    var loadPizza = function(){
        getJson("pizza")
            .done(function (data) {

                render(data);
            })
            .fail(function (error) {

                document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
            });
    }

    return{
        loadPizza:loadPizza
    }


}







