$(function () {
    
    var dealTamplate = $('#deal-template')
    var allDeals = DealStorage();
    
    var dealPage = Handlebars.compile(dealTamplate);
    $('#conteiner-for-offer').append=dealPage({allDeals });
    
    });
    
    