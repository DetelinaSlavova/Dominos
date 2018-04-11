var Pizza;
  var pizzaService = (function(){
    var id = 0;
        Pizza = function (url, name, description, price){
         this.url = url;
         this.name = name;
         this.description = description;
         this.price = price;
         this.dough = "";
         this.pieces=0;
         this.qnt = 1;
         this.id = id++;
     }

     function PizzaStorage (){
         this.pizzas = [];
         var margarita = new Pizza ("assets/images/pizza/margarita.png","Маргарита", "доматен сос, моцарела, ригън", 10.00);
         var mediteranio = new Pizza ("assets/images/pizza/mediterraneo.png", "Медитеранио","Доматен сос, Моцарела, Краве сирене, Пресни зелени чушки, Черни маслини, Пресни домати", 12.00);
         var alfredo = new Pizza ("assets/images/pizza/alfredo.png","Алфредо", "Сметана, Моцарела, Пиле, Бейби Спанак", 11.00);
         var karbonara = new Pizza ("assets/images/pizza/carbonara.png","КАРБОНАРА", "Сметана, Моцарела, Пушен бекон, Пресни гъби", 11.00);
         var bbgChiken =  new Pizza ("assets/images/pizza/barbecueChicken.png","ПИЛЕ БАРБЕКЮ", "барбекю сос, моцарела, бекон, крехко пиле", 12.00);
         var fishingPizza = new Pizza("assets/images/pizza/fastingPizza.png","РИБА ТОН", "доматен сос, моцарела, риба тон, пресни домати, лук", 10.00);
         var hamPizza = new Pizza("assets/images/pizza/hamClassic.png","ПИЦА ШУНКА", "доматен сос, моцарела, шунка, зелени чушки, пресни гъби", 12.00);
         var hawaii = new Pizza("assets/images/pizza/hawaii.png","ХАВАЙ", "доматен сос, моцарела, шунка, ананас", 11.00);
         var pepperoniClassic = new Pizza("assets/images/pizza/pepperoniClassic.png", "ПЕПЕРОНИ КЛАСИК","доматен сос, картофи,гъби,черни маслини,сушени домати, пресни домати * може да съдържа следи от лактоза",10.00);
         var italianClassic = new Pizza("assets/images/pizza/italianClassic.png","ИТАЛИАНСКА", "доматен сос, моцарела, шунка, ананасдоматен сос, моцарела, песто, пармезан, пресни домати, босилек", 12.00);
         var cheese = new Pizza("assets/images/pizza/4cheese.png", "ФОРМАДЖИ", "доматен сос, моцарела, чедар, краве сирене, пармезан", 9.00);
         var gardenClassic = new Pizza("assets/images/pizza/gardenClassic.png","ПОСТНА ПИЦА", "доматен сос, картофи,гъби,черни маслини,сушени домати, пресни домати * може да съдържа следи от лактоза*", 8.00);
     
     
         this.pizzas.push(margarita);
         this.pizzas.push(mediteranio);
         this.pizzas.push(alfredo);
         this.pizzas.push(karbonara);
         this.pizzas.push(bbgChiken);
         this.pizzas.push(fishingPizza);
         this.pizzas.push(hamPizza);
         this.pizzas.push(hawaii);
         this.pizzas.push(pepperoniClassic);
         this.pizzas.push(italianClassic);
         this.pizzas.push(cheese);
         this.pizzas.push(gardenClassic);
        }
     
        return  new PizzaStorage ();
     })()


   function loadPizza() {
    return new Promise(function (resolve, reject) {
        const HTTP_OK = 200;
        var xhr;

        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            
        }
        else {
            xhr = new ActiveXObject();// IE 7-
        }
        xhr.open('GET', "assets/JSON/pizza.json", true);
        
        xhr.send(null);

        xhr.addEventListener('load', function () {
            if (xhr.status >= HTTP_OK && xhr.status < 300) {
                var data = JSON.parse(xhr.responseText);
               
                resolve(data);
            } else {
                reject(xhr.statusText);
            }
        });
    }); 
    
}

  
    