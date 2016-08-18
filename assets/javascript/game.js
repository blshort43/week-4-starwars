$(".imgdiv").click(function() {
    // console.log(this);
    console.log('I was clicked');
});

$(".imgdiv").click(function() {
    $(this).removeClass("character");
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    if ($("#defenderDiv").is(":empty") && $(this).hasClass("enemy")) {
    	$(this).appendTo("#defenderDiv").removeClass("enemy").addClass("defender");
    }
});

