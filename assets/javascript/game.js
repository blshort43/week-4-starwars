// create attributes for each character
var keanu = $("#img1");
keanu.attr("name", "Conspiracy Keanu");
keanu.attr("healthPoints", 120);
keanu.attr("baseAttack", 5);
keanu.attr("attackPower", 5);
keanu.attr("counterAttackPower", 10);


var grumpy = $("#img2");
grumpy.attr("name", "Grumpy Cat");
grumpy.attr("healthPoints", 100);
grumpy.attr("baseAttack", 10);
grumpy.attr("attackPower", 10);
grumpy.attr("counterAttackPower", 15);


var scumbag = $("#img3")
scumbag.attr("name", "Scumbag Steve");
scumbag.attr("healthPoints", 150);
scumbag.attr("baseAttack", 15);
scumbag.attr("attackPower", 15);
scumbag.attr("counterAttackPower", 20);


var doge = $("#img4")
doge.attr("name", "Doge");
doge.attr("healthPoints", 180);
doge.attr("baseAttack", 20);
doge.attr("attackPower", 20);
doge.attr("counterAttackPower", 25);


// make character choices and move to different divs on click
$(".imgdiv").click(function() {
    $(this).removeClass("character").addClass("champ");
    $(".title").remove();
    $("br").remove();
    $("#charh2").insertBefore("#charContainer");
    $(".character").appendTo("#enemies").removeClass("character").addClass("enemy");
    if ($("#defenderDiv").is(":empty") && $(this).hasClass("enemy")) {
        $(this).appendTo("#defenderDiv").removeClass("champ").addClass("defender");
        $(".info").empty();
    }
});

var winCounter = 0;

$(".btn").click(function() {

    if ($("#defenderDiv").is(":empty")) {
        alert("You're missing a champ or an enemy, choose one!");

    } else {
        //decrease defender's health when champ attacks
        $(".attackDamage").html("You attacked " + $(".defender").attr("name") + " " + "for " + parseInt($(".champ").attr('attackPower')) + " damage!");
        var defenderHealthLoss = parseInt($(".defender").attr("healthPoints")) - parseInt($(".champ").attr('attackPower'));
        $(".defender").attr("healthPoints", defenderHealthLoss);
        $(".defender p").html(defenderHealthLoss);
        var attackIncrease = parseInt($(".champ").attr('attackPower')) + parseInt($(".champ").attr('baseAttack'));
        $(".champ").attr("attackPower", attackIncrease);
        console.log($(".champ").attr("baseAttack"));

        //decrease champ's health when defender counter attacks
        var counterAttack = parseInt($(".champ").attr('healthPoints')) - parseInt($(".defender").attr('counterAttackPower'));
        $(".champ").attr("healthPoints", counterAttack);
        $(".champ p").html(counterAttack);
        $(".counterAttack").html($(".defender").attr("name") + " " + "counter attacked you for " + parseInt($(".defender").attr('attackPower')) + " damage!");

        if (($(".champ").attr('healthPoints')) <= 0) {
            $("#enemyh2, #charh2").empty();
            $("#enemies").empty();
            $("#charContainer").empty();
            $("#enemies").append("<img id='win' src='assets/images/fail.jpg' />");
            $(".attackBtn").remove();
            $(".counterAttack").empty();
            $(".attackDamage").html($(".defender").attr("name") + " " + "defeated you!"); 
            $("#fightSection").append("<button type='button' class='btn btn-success'>Reload</button>");
            $(".btn-success").click(function(){
                location.reload(true);
            });
        }

        if (defenderHealthLoss <= 0) {
            $("#fightInfo").empty();
            $(".counterAttack").html("You have defeated " + $(".defender").attr("name") + "!");
            $("#defenderDiv").empty();
            winCounter++;
            if (winCounter === 3) {
                $("#enemyh2, #charh2").empty();
                $("#charContainer").empty();
                $("#enemies").append("<img id='win' src='assets/images/win.jpg' />")
                $(".attackBtn").remove();
                $(".attackDamage").empty();
                $("#fightSection").append("<button type='button' class='btn btn-success'>Reload</button>")
            } else if ($("#defenderDiv").is(":empty") && winCounter < 3) {
                $(".info").html("Pick a new enemy!");
            }

            $(".btn-success").click(function(){
                location.reload(true);
            });

        };

    };
});
