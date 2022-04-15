function car(license, driver){
    this.id;
    this.license = license;
    this.driver = driver;
    this.numPasajeros;
}

car.prototype.printDataCar = function(){
    console.log(this.driver)
    console.log(this.driver.name)
    console.log(this.driver.license)
}