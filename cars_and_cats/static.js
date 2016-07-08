module.exports = function(request, response){
    // show: function(request.response.url === './stylesheets/form.css'){
    //     fs.readFile('./{file_path}', 'utf8', function (errors, contents){
    //         response.writeHead(200, {'Content-Type': 'text/{content_type}'});
    //         response.write(contents);
    //         response.end();
    //     });
    // }
}();
// -------------------------------------|| ---------------------------------||
// Anonymous Exports -------------------|| Anonymous Exports ---------------||
// // buz.js ---------------------------|| // doo.js -----------------------||
// var Buz = function () {}; -----------|| var Doo = function () {}; -------||
// Buz.prototype.log = function () { ---|| Doo.prototype.log = function () {||
// --- console.log('buz!'); ------------|| --- console.log('doo!'); --------||
// }; ----------------------------------|| } -------------------------------||
// module.exports = new Buz(); ---------|| module.exports = Doo; -----------||
// // app.js ---------------------------|| // app.js -----------------------||
// var buz = require('./buz.js'); ------|| var Doo = require('./doo.js'); --||
// -------------------------------------|| doo.log(); ----------------------||
// buz.log(); --------------------------|| var doo = new Doo(); ------------||
// -------------------------------------|| ---------------------------------||

// -------------------------------------||
// Named Exports -----------------------||
// // baz.js ---------------------------||
// var Baz = function () {}; -----------||
// Baz.prototype.log = function () { ---||
// --- console.log('baz!'); ------------||
// }; ----------------------------------||
// exports.Baz = new Baz(); ------------||
// // app.js ---------------------------||
// var baz = require('./baz.js').Baz; --||
// baz.log(); --------------------------||
// -------------------------------------||
