function VehicleConstructor(name, wheelNumber, passNumber, speed){
    // private variables
    var name = name;
    var wheelNumber = wheelNumber;
    var passNumber = passNumber;
    var speed = speed;
    var vehicle = {};
    // public properties
    this._name = name;
    this._wheelNumber = wheelNumber;
    this.passNumber = passNumber;
    this.speed = speed;
    this.distance_travelled = 0;
    // public methods
    this.move = function(){
        this.updateDistanceTravelled();
        this.makeNoise();
    }
    this.checkMiles = function(){
        console.log(this.distance_travelled);
    }
    //private methods :
    this.makeNoise = function makeNoise(){
        console.log('(*vehicle noise*)');
    }
    this.updateDistanceTravelled = function updateDistanceTravelled(){
        this.distance_travelled += speed;
    }

    return this;
}

var Bike = VehicleConstructor("Bike", 2, 1, 15);
Bike.makeNoise()
Bike.makeNoise = function(){
    console.log('ring ring!');
}
Bike.makeNoise();
Bike.checkMiles();
Bike.move();
Bike.checkMiles();
