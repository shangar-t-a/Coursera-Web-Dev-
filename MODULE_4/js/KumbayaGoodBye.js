(function(window) {
    var byeAmigo = new Object();
    var Greet = "Good Bye";
    byeAmigo.speak = function speak(name) {
        console.log(Greet + " " + name);
    };
    window.byeAmigo = byeAmigo;
})(window);