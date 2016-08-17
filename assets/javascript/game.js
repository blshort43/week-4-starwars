$(".imgdiv").click(function() {
    // console.log(this);
    console.log('I was clicked');
});

$("#img1").click(function() {
    $(this).removeClass("character");
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    $("#img2").addClass("enemy2");
    $("#img3").addClass("enemy3");
    $("#img4").addClass("enemy4");
});

$("#img2").click(function() {
    $(this).removeClass("character");
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    $("#img1").addClass("enemy1");
    $("#img3").addClass("enemy3");
    $("#img4").addClass("enemy4");
});

$("#img3").click(function() {
    $(this).removeClass("character");
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    $("#img1").addClass("enemy1");
    $("#img2").addClass("enemy2");
    $("#img4").addClass("enemy4");
});

$("#img4").click(function() {
    $(this).removeClass("character");
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    $("#img1").addClass("enemy1");
    $("#img2").addClass("enemy2");
    $("#img3").addClass("enemy3");
});

$("#img1").click(function() {
    if ($("#defender").is(":empty") && $(this).hasClass("enemy1")) {
        $(this).appendTo("#defender").removeClass("enemy").addClass("defender");
    }
});

$("#img2").click(function() {
    if ($("#defender").is(":empty") && $(this).hasClass("enemy2")) {
        $(this).appendTo("#defender").removeClass("enemy").addClass("defender");
    }
});

$("#img3").click(function() {
    if ($("#defender").is(":empty") && $(this).hasClass("enemy3")) {
        $(this).appendTo("#defender").removeClass("enemy").addClass("defender");
    }
});

$("#img4").click(function() {
    if ($("#defender").is(":empty") && $(this).hasClass("enemy4")) {
        $(this).appendTo("#defender").removeClass("enemy").addClass("defender");
    }
});

// $(".enemy3").click(function(){
//  	if($("#defender").is(':empty')){
//  		$(".enemy3").appendTo("#defender").addClass("defender");
//  	}
// });

// $(".enemy4").click(function(){
//  	if($("#defender").is(':empty')){
//  		$(".enemy4").appendTo("#defender").addClass("defender");
//  	}
// });

// if ($("#defender") === " ")function(){
// 	$(".enemy").click(function(){
// 		$(this).removeClass("enemy");
// 		$(".enemy").appendTo("#defender").addClass("defender");
// 	})



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
