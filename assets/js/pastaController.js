
var pastaController = function() {



    var render = function (data) {
        getTemplate('pasta-template').then(function (src) {
            var allPasta = data;
            var pastaPage = Handlebars.compile(src);
            $("#contentd").append(pastaPage({ allPasta: allPasta }));
            orderPastaController();
        });
    }

    var loadPasta = function () {
        getJson("pasta")
            .done(function (data) {
                console.log('done');
                render(data);
            })
            .fail(function (error) {
                console.log('fail');
                document.getElementById('contentd').innerHTML = "<p style='color:red'> Sorry, the following error ocurred : " + error + " </p>";
            });
    }

    return {
        loadPasta: loadPasta
    }
}







