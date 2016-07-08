//contructor
function Vehicle(name, wheelNumber, passNumber, speed){
    this._name = name;
    this._wheelNumber = wheelNumber;
    this.passNumber = passNumber;
    this.speed = speed;
    this.distance_traveled = 0;
    this.vin = newVin();
    function newVin(){
        var temp = "";
        for(var i = 0; i < 10; i++){
            var num = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
            temp += String.fromCharCode(num);
            temp += "-"
        }
        var num = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
        temp += String.fromCharCode(num);
        for(var i = 0; i < 8; i++){
            var num = Math.floor(Math.random() * (0 - 9 + 1)) + 0;
            temp += num;
        }
        return temp;
    }
}
//instance methods
Vehicle.prototype.updateDistanceTraveled = function updateDistanceTraveled() {
    this.distance_traveled += this.speed;
    return this;
};
Vehicle.prototype.makeNoise = function() {
    console.log('(*vehicle noise*)');
};
Vehicle.prototype.move = function() {
    this.updateDistanceTraveled();
    this.makeNoise();
    return this;
};
Vehicle.prototype.checkMiles = function() {
    console.log('miles on vehicle: '+this.distance_traveled);
};
Vehicle.prototype.showVIN = function() {
    console.log('vin: '+this.vin);
};

// instances/objects
Sedan = new Vehicle('Sedan', 4, 2, 65);
Sedan.showVIN();
Sedan.checkMiles();
Sedan.move();
Sedan.checkMiles();
