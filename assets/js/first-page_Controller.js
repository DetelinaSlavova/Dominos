document.addEventListener('DOMContentLoaded', function () {

var dealTamplate = document.getElementById('deal-template').innerHTML;
var allDeals = DealStorage();

var dealPage = Handlebars.compile(dealTamplate);
document.querySelector('#conteiner-for-offer').innerHTML=dealPage({allDeals: allDeals });

});