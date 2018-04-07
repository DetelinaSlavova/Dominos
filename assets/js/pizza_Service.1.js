
   
   function Pizza (url, name, description, price){
       this.url = url;
        this.name = name;
        this.description = description;
        this.price = price;
    }

    var pizzas = [];
    var margarita = new Pizza ("assets/images/pizza/margarita.png","Маргарита", "доматен сос, моцарела, ригън", 10.00);
    var mediteranio = new Pizza ("assets/images/pizza/mediterraneo.png", "Медитеранио","Доматен сос, Моцарела, Краве сирене, Пресни зелени чушки, Черни маслини, Пресни домати", 12.00);
    var alfredo = new Pizza ("assets/images/pizza/alfredo.png","Алфредо", "Сметана, Моцарела, Пиле, Бейби Спанак", 11.50);
    var karbonara = new Pizza ("assets/images/pizza/carbonara.png","КАРБОНАРА", "Сметана, Моцарела, Пушен бекон, Пресни гъби", 11.90);
    var bbgChiken =  new Pizza ("assets/images/pizza/barbecueChicken.png","ПИЛЕ БАРБЕКЮ", "барбекю сос, моцарела, бекон, крехко пиле", 11.90);
    var fishingPizza = new Pizza("assets/images/pizza/fastingPizza.png","РИБА ТОН", "доматен сос, моцарела, риба тон, пресни домати, лук");
    var hamPizza = new Pizza("assets/images/pizza/hamClassic.png","ПИЦА ШУНКА", "доматен сос, моцарела, шунка, зелени чушки, пресни гъби");
    var hawaii = new Pizza("assets/images/pizza/hawaii.png","ХАВАЙ", "доматен сос, моцарела, шунка, ананас");
    var pepperoniClassic = new Pizza("assets/images/pizza/pepperoniClassic.png", "ПЕПЕРОНИ КЛАСИК","доматен сос, картофи,гъби,черни маслини,сушени домати, пресни домати * може да съдържа следи от лактоза");
    var italianClassic = new Pizza("assets/images/pizza/italianClassic.png","ИТАЛИАНСКА", "доматен сос, моцарела, шунка, ананасдоматен сос, моцарела, песто, пармезан, пресни домати, босилек");
    var cheese = new Pizza("assets/images/pizza/4cheese.png", "ФОРМАДЖИ", "доматен сос, моцарела, чедар, краве сирене, пармезан");
    var gardenClassic = new Pizza("assets/images/pizza/gardenClassic.png","ПОСТНА ПИЦА", "доматен сос, картофи,гъби,черни маслини,сушени домати, пресни домати * може да съдържа следи от лактоза*");


   pizzas.push(margarita);
   pizzas.push(mediteranio);
   pizzas.push(alfredo);
   pizzas.push(karbonara);
   pizzas.push(bbgChiken);
   pizzas.push(fishingPizza);
   pizzas.push(hamPizza);
   pizzas.push(hawaii);
   pizzas.push(pepperoniClassic);
   pizzas.push(italianClassic);
   pizzas.push(cheese);
   pizzas.push(gardenClassic);

   console.log(JSON.stringify(pizzas))
   

   function load() {
    return new Promise(function (resolve, reject) {
        const HTTP_OK = 200;
        var xhr;

        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            console.log(xhr)
        }
        else {
            xhr = new ActiveXObject();// IE 7-
        }
        xhr.open('GET', "assets/JSON/pizza.json", true);
        
        xhr.send(null);

        xhr.addEventListener('load', function () {
            if (xhr.status >= HTTP_OK && xhr.status < 300) {
                var data = JSON.parse(xhr.responseText);
                console.log(data)
                resolve(data);
            } else {
                reject(xhr.statusText);
            }
        });
    }); 
    
}

  
    