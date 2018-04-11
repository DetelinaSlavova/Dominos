var firstPageController =  function () {

    var render = function (data) {
        console.log('here');
        getTemplate('home-page').then(function (src) {
            var homePage = Handlebars.compile(src);
            $("#contentd").append(homePage());
            getTemplate('deal-template').then(function (srcInner) {
                var dealPage = Handlebars.compile(srcInner);
                var allDeals = DealStorage();
                $("#conteiner-for-offer").append(dealPage({ allDeals: allDeals }));
            });
        });
    }

    return {
        render : render
    };
}

window.addEventListener("scroll", scroll, false)

function scroll() {
    var navigation = document.getElementsByClassName("navbar")[0];
    if (location.hash.slice(1) == "") {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navigation.style.background = 'rgb(255, 254, 254)';
            document.querySelectorAll(".navbar-nav a").forEach(a => a.style.color = "grey")
        } else {
            navigation.style.background = 'none';
            document.querySelectorAll(".navbar-nav a").forEach(a => a.style.color = "white")
        }
    } else {
        document.querySelectorAll(".navbar-nav a").forEach(a => a.style.color = "grey");
        document.getElementsByClassName("navbar")[0].style.background = "'rgb(255, 254, 254)'"
        document.getElementsByClassName("navbar")[0].style.position = "fixed"

    }
}


