module.exports = function (){
    return {
        add: function(num1, num2){
            output = num1 + num2;
            console.log(output);
            return output;
        },
        multiply: function(num1, num2){
            output = num1 * num2;
            console.log(output);
            return output;
        },
        square: function(num){
            output = num;
            for(var i = 0; i < num-1; i++){
                output += num;
            }
            console.log(output);
            return output;
        },
        random: function(min, max){
            output = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(output);
            return output;
        }
    }
}();
