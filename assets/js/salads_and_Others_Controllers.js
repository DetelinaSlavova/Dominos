var saladsController = function (){
    var render = function (data) {
        getTemplate('salad-template').then(function (src) {
            var allSalads = data;
            var saladPage = Handlebars.compile(src);
            $("#contentd").append(saladPage({ allSalad: allSalads }));
        });
    }

    var loadSalads = function(){
        getJson("salads")
            .done(function (data) {
                render(data);
            })
            .fail(function (error) {
                console.log('fail');
                document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
            });
    }

    return{
        loadSalads:loadSalads
    }   
} 


var sandwichController = function (){
    var render = function (data) {
        getTemplate('sandwich-template').then(function (src) {
            var allSandwich = data;
            var sandwichPage = Handlebars.compile(src);
            $("#contentd").append(sandwichPage({ allSandwich: allSandwich }));
        });
    }

    var loadSandwich = function(){
        getJson("sandwiches")
            .done(function (data) {
                render(data);
            })
            .fail(function (error) {
                console.log('fail');
                document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
            });
    }

    return{
        loadSandwich :loadSandwich 
    }   
} 
