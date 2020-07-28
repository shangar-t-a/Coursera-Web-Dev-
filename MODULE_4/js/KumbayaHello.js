(function(window) {
    var helloAmigo = new Object();
    var Greet = "Hello";
    helloAmigo.speak = function(name) {
        console.log(Greet + " " + name);
    };
    window.helloAmigo = helloAmigo;
})(window);