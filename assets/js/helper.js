function getTemplate(name) {
    return $.get('assets/templates/'+name+'.hbs');
}

function getJson(name) {
    return $.get('assets/JSON/'+name+'.json');
}

function logoListener(){
    $("#logo").click(function(){
        location.replace("")
    })
}