var DealStorage = (function(){

    function Deal (url,description){
        this.url = url;
        this.description = description;
    }
    
    
    Deal.prototype.addDeal = function(deal) {
     deals.push(new Deal (url,description))
    }
    
    var deals = [];
    var deal1 = new Deal("assets/images/deals/deal1.png", "За всяка пица взета от място получавате втора на половин цена");
    var deal2 = new Deal("assets/images/deals/deal2.png", "За всяка пица взета от място получавате втора на половин цена");
    var deal3 = new Deal("assets/images/deals/deal3.png", "За всяка пица взета от място получавате втора на половин цена");
    var deal4 = new Deal("assets/images/deals/deal4.png", "За всяка пица взета от място получавате втора на половин цена");
    var deal5 = new Deal("assets/images/deals/deal4.png", "За всяка пица взета от място получавате втора на половин цена");
    
  
    
    deals.push(deal1);
    deals.push(deal2);
    deals.push(deal3);
    deals.push(deal4);
    deals.push(deal5);
  
   

   return deals

});

var d = DealStorage()
// console.log(d)

console.log(JSON.stringify(d))



