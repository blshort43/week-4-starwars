$(".imgdiv").click(function() {
    // console.log(this);
    console.log('I was clicked');
});

// create attributes for each character
var keanu = $("#img1");
keanu.attr("healthPoints", 120);
keanu.attr("attackPower", 5);
keanu.attr("counterAttackPower", 10);

var grumpy = $("#img2");
grumpy.attr("healthPoints", 100);
grumpy.attr("attackPower", 10);
grumpy.attr("counterAttackPower", 15);

var scumbag = $("#img3")
scumbag.attr("healthPoints", 150);
scumbag.attr("attackPower", 15);
scumbag.attr("counterAttackPower", 20);

var doge = $("#img4")
doge.attr("healthPoints", 180);
doge.attr("attackPower", 20);
doge.attr("counterAttackPower", 25);


// display character's health
// $("#img1").append(keanu.attr('healthPoints'));
// $("#img2").append(grumpy.attr('healthPoints'));
// $("#img3").append(scumbag.attr('healthPoints'));
// $("#img4").append(doge.attr('healthPoints'));

// make character choices and move to different divs on click
$(".imgdiv").click(function() {
    $(this).removeClass("character").addClass("champ");
    $(".title").remove();
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    if ($("#defenderDiv").is(":empty") && $(this).hasClass("enemy")) {
    	$(this).appendTo("#defenderDiv").removeClass("champ").addClass("defender");
    }
});


$(".btn").click(function(){
//decrease defender's health when champ attacks
var defenderHealthLoss = parseInt($(".defender").attr('healthPoints')) - parseInt($(".champ").attr('attackPower'));
$(".defender").attr("healthPoints", defenderHealthLoss);
var updateNumber = (defenderHealthLoss);
$(".defender p").html(updateNumber);

//decrease champ's health when defender counter attacks
var counterAttack = parseInt($(".champ").attr('healthPoints')) - parseInt($(".defender").attr('counterAttackPower'));
$(".champ").attr("healthPoints", counterAttack);
var updateNumber = (counterAttack);
$(".champ p").html(updateNumber);

})

