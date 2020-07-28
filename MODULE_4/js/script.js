(function() {
    var names = ["Shangar", "Jonas", "Gwen", "Ben", "Lucifer", "Noah", "Jackie Chan", "Bonnie Bennet", "Elena Gilbert", "Janson","Elijah Michaelson","Klaus Michaelson"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeAmigo.speak(names[i]);
        } else {
            helloAmigo.speak(names[i]);
        }
    }
})();