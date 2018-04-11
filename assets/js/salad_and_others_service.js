function Salad (url, name, description, price){
    this.url = url;
     this.name = name;
     this.description = description;
     this.price = price;
 }

 var salads = [];
 
  var ceasarsBacon = new Salad ("assets/images/salads/caesarsBacon.png", "ЦЕЗАР С БЕКОН", "Айсберг, бекон, царевица, крутони, пармезан, цезар сос", 8,50);
  var ceasersChicken = new Salad ("assets/images/salads/caesarsChicken.png", "ЦЕЗАР С ПИЛЕ", "Айсберг, пиле, царевица, крутони, пармезан, цезар сос", 7,40);
  var rocked = new Salad ("assets/images/salads/rockedSalad.png", "РОКА", "Айсберг,рукола,пресни домати,пармезан,зехтин, италянски сос" , 7,80);
  var tuna = new Salad ("assets/images/salads/tunaSalad.png", "САЛАТА С РИБА ТОН", "айсберг, риба тон, царевица, маслини, лимон и зехтин", 9,00);
  
  salads.push(ceasarsBacon);
  salads.push(ceasersChicken);
  salads.push(rocked)
  salads.push(tuna)
  localStorage.setItem("salads",JSON.stringify(salads))

  function Sandwich (url, name, description, price){
    this.url = url;
     this.name = name;
     this.description = description;
     this.price = price;
 }

 var sandwiches = [];
 
  var bbqChickenSandwich = new Sandwich ("assets/images/sandwich/bbqChickenSandwich.png", "САНДВИЧ БАРБЕКЮ ПИЛЕ", "дом. сос, ементал, сирене Филаделфия, пеперони", 4,50);
  var mediterraneoSandwich = new Sandwich ("assets/images/sandwich/mediterraneoSandwich.png", "САНВДВИЧ МЕДИТЕРАНЕО", "ранч сос, ементал, бяло сирене, домати, маслини, зелени чушки", 4,20);
  var pepperoniSandwich = new Sandwich ("assets/images/sandwich/pepperoniSandwich.png", "САНДВИЧ ПИПЕРОНЕ", "дом. сос, ементал, сирене Филаделфия, пеперони" , 4,50);
  
  
  sandwiches.push(bbqChickenSandwich);
  sandwiches.push(mediterraneoSandwich);
  sandwiches.push(pepperoniSandwich)
  
  localStorage.setItem("sandwiches",JSON.stringify(sandwiches))
