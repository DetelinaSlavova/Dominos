var users = (function () {
    function Users() {
        this.users = [];
    };
    function NewUser(name, secondName, email, pass, passAgain) {
        this.adress = null;
        this.koshnica = [];
        this.name = name;
        this.secondName = secondName;
        this.email = email;
        this.pass = pass;
        this.id = Math.floor(Math.random() * 12312312312);
        this.photo = "";
    };
    function newAdress(nameOfAdress, street, number, poshtenskiKod, grad, tel, zvunec, etaj, blok, apartament, vhod) {

        this.nameOfAdress = nameOfAdress;
        this.street = street;
        this.number = number;
        this.poshtenskiKod = poshtenskiKod;
        this.grad = grad;
        this.tel = tel;
        this.zvunec = zvunec;
        this.etaj = etaj;
        this.blok = blok;
        this.apartament = apartament;
        this.vhod = vhod;
    }
    Users.prototype.addAdress = function (nameOfAdress, street, number, poshtenskiKod, grad, tel, zvunec, etaj, blok, apartament, vhod) {
        var lastUser = this.users.length - 1;
        if ((street.trim().length > 0) && (number.trim().length > 0) && (poshtenskiKod.trim().length > 0) &&
            (grad.trim().length > 0) && (tel.trim().length > 0) && (etaj.trim().length > 0)) {
            this.users[lastUser].adress = new newAdress(nameOfAdress, street, number, poshtenskiKod, grad, tel, zvunec, etaj, blok, apartament, vhod);
            return true;
        } else {
            return false;
        }
    }
    Users.prototype.isUser = function (emaila, pass) {
        if (this.users.find(users => (users.email == emaila && users.pass == pass))) {
            return true;
        } else {
            return false;
        }
    };

    Users.prototype.addNewUser = function (name, secondName, emaila, pass, passAgain) {
        if (typeof name === "string" && typeof secondName === "string"
            && pass == passAgain && name.trim().length > 0 && secondName.trim().length > 0
            && emaila.trim().length > 0 && pass.trim().length > 0) {
            if (!this.users.find(users => (users.email == emaila && users.pass == pass))) {
                this.users.push(new NewUser(name, secondName, emaila, pass, passAgain))
                return true;
            } else {
                return false
            }
        }
    };
    Users.prototype.returnUser = function (emaila, pass) {
        if (this.users.find(users => (users.email == emaila && users.pass == pass))) {
            var user = this.users.find(users => (users.email == emaila && users.pass == pass))
            return user;
        }
    }
    return new Users();
})();
users.addNewUser("gosh", "ivan", "asdasdas", "123", "123")
console.log(users.isUser("asdasdas", "123"))
console.log(users)
console.log(users.returnUser("asdasdas", "123"))
