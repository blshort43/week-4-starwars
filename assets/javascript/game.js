$(".imgdiv").click(function() {
    // console.log(this);
    console.log('I was clicked');
});

// create objects for each character
var keanu = {
	"name": "Conspiracy Keanu",
	"healthPoints": 120,
	"attackPower": 5,
	"counterAttackPower": 10
};

var grumpy = {
	"name": "Grumpy Cat",
	"healthPoints": 100,
	"attackPower": 10,
	"counterAttackPower": 15
};

var scumbag = {
	"name": "Scumbag Steve",
	"healthPoints": 150,
	"attackPower": 15,
	"counterAttackPower": 20
};

var doge = {
	"name": "Doge",
	"healthPoints": 180,
	"attackPower": 25,
	"counterAttackPower": 30
};

// display character's health
$(".keanuP").append(keanu.healthPoints); 
$(".grumpyP").append(grumpy.healthPoints);
$(".scumbagP").append(scumbag.healthPoints);
$(".dogeP").append(doge.healthPoints);

// make character choices and move to different divs on click
$(".imgdiv").click(function() {
    $(this).removeClass("character");
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    if ($("#defenderDiv").is(":empty") && $(this).hasClass("enemy")) {
    	$(this).appendTo("#defenderDiv").removeClass("enemy").addClass("defender");
    }
});

