var pastaService = (function() {
   function Pasta (url, name, description, price){
        this.url = url;
         this.name = name;
         this.description = description;
         this.price = price;
     }
    
     function PastaStorage (){
        var pasta = [];
    
        var carbonara = new Pasta ("assets/images/pasta/carbonaraPasta.png", "ПАСТА КАРБОНАРА", "паста, сметана, гъби, бекон, пармезан", 6,50);
        var napolitana = new Pasta ("assets/images/pasta/napoliten.png", "НАПОЛИТАНА", "паста, доматен сос, песто, пaрмезан", 6,00);
        var peperoni = new Pasta ("assets/images/pasta/pastaPepperoni.png", "ПАСТА ПЕПЕРОНИ", "паста, доматен сос, сметана, пеперони, пармезан", 7,00);
        
        pasta.push(carbonara);
        pasta.push(napolitana);
        pasta.push(peperoni)
       
     }
     return new PastaStorage()

})()
    
    





 function loadPasta() {
    return new Promise(function (resolve, reject) {
        const HTTP_OK = 200;
        var xhr;

        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
          
        }
        else {
            xhr = new ActiveXObject();// IE 7-
        }
        xhr.open('GET', "assets/JSON/pasta.json", true);
        
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
