var pastaService = (function () {
    function Pasta(url, name, description, price) {
        this.url = url;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    function PastaStorage() {
        var pasta = [];

        var carbonara = new Pasta("assets/images/pasta/carbonaraPasta.png", "ПАСТА КАРБОНАРА", "паста, сметана, гъби, бекон, пармезан", 6, 50);
        var napolitana = new Pasta("assets/images/pasta/napoliten.png", "НАПОЛИТАНА", "паста, доматен сос, песто, пaрмезан", 6, 00);
        var peperoni = new Pasta("assets/images/pasta/pastaPepperoni.png", "ПАСТА ПЕПЕРОНИ", "паста, доматен сос, сметана, пеперони, пармезан", 7, 00);

        pasta.push(carbonara);
        pasta.push(napolitana);
        pasta.push(peperoni)

    }
    return new PastaStorage()

})()
