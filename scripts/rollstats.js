var Dice = require('./diceroller.js');
var dice = new Dice();

function Rollstats() {

}

Rollstats.prototype.stats = function(){
    var rolls = [];
    var retValue = '\n';

    //executes 4d6 * 6 dice rolls 7 times
    for(var j = 0; j <= 6; j++) {
        for(var i = 0; i <=5; i++){
          rolls.push(dice.roll('4d6').toString());
          }
          retValue = retValue + 'Roll ' + (j + 1) + ') '+ rolls + '\n';
          rolls.length = 0;
    }
    return (retValue);
};

module.exports = Rollstats;
