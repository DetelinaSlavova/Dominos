var loginController = function () {
    var init = function(){
        getTemplate('login-template').then(function (src) {
            var loginPage = Handlebars.compile(src);
            $("#contentd").append(loginPage({ }));
            addEvents();
        });
    }

    var addEvents = function () {
        $(document).ready(function () {
            $("#buttonReg").mouseover(function () {
                $("#buttonReg").css("opacity", " 0.9")
            });
            $("#buttonReg").mouseout(function () {
                $("#buttonReg").css("opacity", " 1")
            });

            $("#addAdress").mouseover(function () {
                $("#addAdress").css("opacity", " 0.9")
            });
            $("#addAdress").mouseout(function () {
                $("#addAdress").css("opacity", " 1")
            });

        });
        $("#buttonReg").on("click", function (event) {
            event.preventDefault();
            var ime = $("#ime").val();
            var vtoroIme = $("#vtoriIme").val();
            var email = $("#email").val();
            var pas1 = $("#pas").val();
            var pas2 = $("#pas2").val();
            if (users.addNewUser(ime, vtoroIme, email, pas1, pas2)) {
                $("#loginContainer").css("display", "none")
                $("#loginContainer2").css("display", "block")
                $("#error1").hide();
            } else {
                $("#error1").show();
            }
            var ime = $("#ime").val("");
            var vtoroIme = $("#vtoriIme").val("");
            var email = $("#email").val("");
            var pas1 = $("#pas").val("");
            var pas2 = $("#pas2").val("");
        })
        $("#addAdress").on("click", function (event) {
            event.preventDefault();
            var adres = $("#adresa").val();
            var ulica = $("#ulicata").val();
            var nomer = $("#nomer").val();
            var poshtenskiKod = $("#postKod").val();
            var grad = $("#grad").val();
            var telefon = $("#telefon").val();
            var zwunec = $("#zwunec").val();
            var etaj = $("#etaj").val();
            var blok = $("#blok").val();
            var apartament = $("#apartament").val();
            var vhod = $("#vhod").val();

            if (users.addAdress(adres, ulica, nomer, poshtenskiKod, grad, telefon, zwunec, etaj, blok, apartament, vhod)) {
                $("#loginContainer2").css("display", "none")
                $("#error2").hide();
                location.replace("#");
            } else {
                $("#ulicata").css("border-color", "red")
                $("#nomer").css("border-color", "red")
                $("#postKod").css("border-color", "red")
                $("#grad").css("border-color", "red")
                $("#telefon").css("border-color", "red")
                $("#etaj").css("border-color", "red")
                $("#error2").show()
            }


        })
        $("#loginButtonReg").on("click", function () {
            $("#loginContainer").css("display", "block")
            $("#loginFirst").css("display", "none")
        })
        $("#loginButtonIn").on("click", function () {
            var email = $("#loginEmail").val();
            var pass = $("#loginPassword").val();
            if (users.isUser(email, pass)) {
                var user = users.returnUser(email, pass);
            }
        })
    }

    return{
        init: init
    }
};