



$("#img1" && ".imgdiv").click(function(){
	$("#img2, #img3, #img4").appendTo("#fightContainer").removeClass("imgdiv").addClass("enemydiv");
});

$("#img2" && "imgdiv").click(function() {
	$("#img1, #img3, #img4").appendTo("#fightContainer").addClass("enemyBackground");
});

$("#img" && "imgdiv").click(function() {
	$("#img1, #img2, #img4").appendTo("#fightContainer").addClass("enemyBackground");
});

$("#img" && "imgdiv").click(function() {
	$("#img1, #img2, #img3").appendTo("#fightContainer").addClass("enemyBackground");

});

