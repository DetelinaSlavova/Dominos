var basketController = function () {
    var render = function () {

        getTemplate('basket').then(function (src) {
            var basketPage = Handlebars.compile(src);
  
            $("#contentd").append(basketPage({}));
        });
    }

    return{
        render: render
    }
}
    