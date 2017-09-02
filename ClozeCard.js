var BasicCard = require("./BasicCard.js");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "");

// console.log(firstPresident);

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.clozeMethod = function () {
        errorCheck();
    };

    this.partMethod = function () {
        var temp = text.replace(cloze, '...');
        console.log('*** Partial: ', temp);
    };

    this.fullTextMethod = function () {
        console.log('*** Full Text: ', text);
    };

    function errorCheck() {
        if (!cloze) {
            console.log('*** Nothing entered for cloze parameter!');
        } else {
            console.log('*** Cloze: ', cloze);
        }
    }

}

console.log('***============================***');
console.log('***   Basic Card Constructor   ***');
console.log('***============================***');
console.log('*** Front of BasicCard: ', firstPresident.front);
console.log('*** Front of BasicCard: ', firstPresident.back);

console.log('');
console.log('');

console.log('***============================***');
console.log('***   Cloze Card Constructor   ***');
console.log('***============================***');
firstPresidentCloze.clozeMethod();
firstPresidentCloze.partMethod();
firstPresidentCloze.fullTextMethod();

