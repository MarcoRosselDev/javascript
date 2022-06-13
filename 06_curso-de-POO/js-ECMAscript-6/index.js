var car = new Car("AB324", new Account("Marco Rossel", "GJ767"))
car.passenger = 4;
car.printDataCar();

// para utilizar una de las clases y crear un objet, por ejemplo uberx,
// no olvidar declarar la clase en el archivo idex.html


var uberX = new UberX("BB344", new Account("Juan Soto", "HH900"), "Chevrolet", "Spark")
uberX.passenger = 4;
uberX.printDataCar();

var user = new User ("Luis", new Account("Lushito", "HH777"),"RTD114", "ASF111", "andresmarcorosselQgmail.com")
user.printDataAccount();