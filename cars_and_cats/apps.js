// modules:
var http = require('http');
var fs = require('fs');
var static_contents = require('./static.js');
// server:
var server = http.createServer(function (request, response){
    static_contents(request, response);
});
// port:
server.listen(7077);
console.log("Running in localhost at port 7077");



// // see what URL the clients are requesting:
// console.log('client request URL: ', request.url);
// //cars page:
// if(request.url === '/cars') {
//     fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(contents);
//         response.end();
//     });
// }
// else if(request.url === '/stylesheets/cars.css'){
//     fs.readFile('./stylesheets/cars.css', 'utf8', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'text/css'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/red.jpg'){
//     fs.readFile('./images/red.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/orange.JPG'){
//     fs.readFile('./images/orange.JPG', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/yellow.jpg'){
//     fs.readFile('./images/yellow.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/green.png'){
//     fs.readFile('./images/green.png', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/blue.jpg'){
//     fs.readFile('./images/blue.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/purple.jpg'){
//     fs.readFile('./images/purple.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// //cats page:
// else if(request.url === '/cats') {
//     fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(contents);
//         response.end();
//     });
// }
// else if(request.url === '/stylesheets/cats.css'){
//     fs.readFile('./stylesheets/cats.css', 'utf8', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'text/css'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/kittens.jpg'){
//     fs.readFile('./images/kittens.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/lynx.jpg'){
//     fs.readFile('./images/lynx.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/margay.jpg'){
//     fs.readFile('./images/margay.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// else if(request.url === '/images/caracal.jpg'){
//     fs.readFile('./images/caracal.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
// }
// //form page:
// else if(request.url === '/form') {
//     fs.readFile('./views/form.html', 'utf8', function (errors, contents){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(contents);
//         response.end();
//     });
// }
// else if(request.url === '/stylesheets/form.css'){
//     fs.readFile('./stylesheets/form.css', 'utf8', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'text/css'});
//         response.write(contents);
//         response.end();
//     })
// }
// // request didn't match anything:
// else {
//     fs.readFile('./views/not_found.html', 'utf8', function (errors, contents){
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(contents);
//         response.end();
//     });
// }
