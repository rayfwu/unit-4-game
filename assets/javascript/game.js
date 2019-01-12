// Step 1
// Make all the characters selectable

// var student = {                 // object name
//     firstName:"Jane",           // list of properties and values
//     lastName:"Doe",
//     age:18,
//     height:170,
//     fullName : function() {     // object function
//        return this.firstName + " " + this.lastName;
//     }
// }; 

$(document).ready(function(){

    function Character(pChar, pColor, pHP, hitPoints, attackPower, counterAttackPower) {
        // pointers to access html elements
        this.pChar       = pChar,
        this.pColor      = pColor,
        this.pHP         = pHP,
        this.pID         = pChar.attr('id'),

        // variables for each character's attributes
        this.hitPoints          = hitPoints,
        this.attackPower        = attackPower,
        this.counterAttackPower = counterAttackPower,

        this.updateHP = function() {
            this.pHP.text(this.hitPoints);
        }

        this.updateHP();

        // functions to move character to other locations
        this.enemySelect = function() {
            pChar.appendTo("#enemy-area");
            pColor.removeClass("bg-white");
            pColor.addClass("bg-danger");
        }
    }

    var kenobi    = new Character($("#btn-kenobi"), $("#btn-kenobi-back"), $("#kenobi-hp"), 120, 6, 15);
    var skywalker = new Character($("#btn-skywalker"), $("#btn-skywalker-back"), $("#skywalker-hp"), 100, 5, 10);
    var sidious   = new Character($("#btn-sidious"), $("#btn-sidious-back"), $("#sidious-hp"), 150, 8, 20);
    var maul      = new Character($("#btn-maul"), $("#btn-maul-back"), $("#maul-hp"), 180, 9, 25);

    // put all the characters into an array to quickly access all of them in one statement
    var players = [kenobi, skywalker, sidious, maul];

    for (let i = 0; i < players.length; i++) {
        console.log(players[i].pID);
        players[i].pChar.click(function() {
            for (let j = 0; j < players.length; j++) {
                if (players[j] != players[i]) {
                    players[j].enemySelect();
                }
            }
        })
    }

    /*

    //make an array of objects for the buttons and enemies
    var players = [$("#btn-kenobi"), $("#btn-skywalker"), $("#btn-sidious"), $("#btn-maul")];
    var enemies = [$("#enemy-kenobi-back"), $("#enemy-skywalker-back"), $("#enemy-sidious-back"), $("#enemy-maul-back")];

    $("#btn-kenobi").click(function(){
        for (var i = 0; i < players.length; i++) {
            if (players[i].attr('id') != "btn-kenobi") {
                //players[i].hide();
                players[i].appendTo("#enemy-area")
            }
        }

        // for (var i = 0; i < enemies.length; i++) {
        //     if (enemies[i].attr('id') != "enemy-kenobi-back") {
        //         enemies[i].show();
        //     }
        // }
    });

    $("#btn-skywalker").click(function(){
        for (var i = 0; i < players.length; i++) {
            if (players[i].attr('id') != "btn-skywalker") {
                //players[i].hide();
                players[i].appendTo("#enemy-area")
            }
        }

        // for (var i = 0; i < enemies.length; i++) {
        //     if (enemies[i].attr('id') != "enemy-skywalker-back") {
        //         enemies[i].show();
        //     }
        // }
    });

    $("#btn-sidious").click(function(){
        for (var i = 0; i < players.length; i++) {
            if (players[i].attr('id') != "btn-sidious") {
                //players[i].hide();
                players[i].appendTo("#enemy-area")
            }
        }

        // for (var i = 0; i < enemies.length; i++) {
        //     if (enemies[i].attr('id') != "enemy-sidious-back") {
        //         enemies[i].show();
        //     }
        // }
    });

    $("#btn-maul").click(function(){
        for (var i = 0; i < players.length; i++) {
            if (players[i].attr('id') != "btn-maul") {
                //players[i].hide();
                players[i].appendTo("#enemy-area")
            }
        }

        // for (var i = 0; i < enemies.length; i++) {
        //     if (enemies[i].attr('id') != "enemy-maul-back") {
        //         enemies[i].show();
        //     }
        // }
    });

    */

});

/*  
    Step 2
    Move the selected character's portrait into the "Your Character" section
*/