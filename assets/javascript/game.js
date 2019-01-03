// This is a 

// Step 1
// Make all the characters selectable

$("#btn-kenobi").click(function(){
    $("#btn-kenobi-back").removeClass("bg-white").addClass("bg-success");
    alert("You've selected Kenobi.");
});

$("#btn-skywalker").click(function(){
    alert("You've selected Skywalker.");
});

$("#btn-sidious").click(function(){
    alert("You've selected Sidious.");
});

$("#btn-maul").click(function(){
    alert("You've selected Maul.");
});

/*  
    Step 2
    Move the selected character's portrait into the "Your Character" section
*/