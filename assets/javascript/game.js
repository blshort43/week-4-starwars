
$(".imgdiv").click(function() {
	console.log(this);
    console.log('I was clicked');

});







$("#img1").click(function() {
	$(this).removeClass("character");
	$(".character").appendTo("#fightContainer").addClass("enemy");
});

$("#img2").click(function(){
	$(this).removeClass("character");
	$(".character").appendTo("#fightContainer").addClass("enemy");
});

$("#img3").click(function(){
	$(this).removeClass("character");
	$(".character").appendTo("#fightContainer").addClass("enemy");
});

$("#img4").click(function(){
	$(this).removeClass("character");
	$(".character").appendTo("#fightContainer").addClass("enemy");
});




// $(".character").click(function() {
// 	$("#img2").removeClass("character");
// 	$("#img1, #img3, #img4").appendTo("#fightContainer").removeClass("character").addClass("enemy");

// });

// $(".character").click(function() {
// 	$("#img1, #img2, #img4").appendTo("#fightContainer").removeClass("character").addClass("enemy");
// });

// $(".character").click(function() {
// 	$("#img1, #img2, #img3").appendTo("#fightContainer").removeClass("character").addClass("enemy");

// });
