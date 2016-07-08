//underscore js: reduce
function reduce(list, iteratee, memo){
    if(!(memo)){
        var memo = list[0];
        for(var i = 1; i < list.length; i++){
            memo = iteratee(memo, list[i]);
        }
        return memo;
    }else {
        for(var i = 0; i < list.length; i++){
            memo = iteratee(memo, list[i]);
        }
        return memo;
    }
}

//test case w/ memo
var sum = reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("w/ memo: ");
console.log(sum);
//test case w/out memo
var sum = reduce([0, 1, 2, 3], function(memo, num){ return memo + num; });
console.log("w/ memo: ");
console.log(sum);
