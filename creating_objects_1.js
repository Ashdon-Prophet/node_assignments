function VehicleConstructor(name, wheelNumber, passNumber){
    // private variables
    var name = name;
    var wheelNumber = wheelNumber;
    var passNumber = passNumber;
    var vehicle = {};
    // public properties
    vehicle._name = name;
    vehicle._wheelNumber = wheelNumber;
    vehicle.passNumber = passNumber;
    // public methods
        /*none*/
    //private methods :
    vehicle.makeNoise = function makeNoise(){
        console.log('(*loud vehicle noise*)');
    }

    return vehicle;
}

var Bike = VehicleConstructor("Bike", 2, 1);
Bike.makeNoise()
Bike.makeNoise = function(){
    console.log('ring ring!');
}
Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 3);
Sedan.makeNoise();
Sedan.makeNoise = function(){
    console.log('Honk Honk!');
}
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 8, 9);
Bus.pickUpPassengers = function(passPicked){
    this.passNumber += passPicked;
}
console.log(Bus.passNumber);
Bus.pickUpPassengers(5);
console.log('Bus picked up 5 passangers');
console.log(Bus.passNumber);
