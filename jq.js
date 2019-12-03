$(document).ready(function() {


    $(".selectors-card").hide();



    $(".left").trigger("click");




    $(".left").click(function() {
        $(".initial").show();
        $(".picker").hide();
        $(".selection").css("border", "none");
        $(".one").css("border", "1px solid white");
        $(".btn1 img, .image1").attr("src", "images/xmas-wreath-1.jpg");
        $(".btn2 img, .image2").attr("src", "images/xmas-wreath-2.jpg");
        $(".btn3 img, .image3").attr("src", "images/xmas-wreath-3.jpg");
        $(".btn4 img, .image4").attr("src", "images/xmas-wreath-4.jpg");
        $(".left").css("border", "1px solid white");
        $(".right").css("border", "none");
        $(".selectors-wreath").show();
        $(".selectors-card").hide();
        $(".one").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".one").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/xmas-wreath-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/xmas-wreath-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/xmas-wreath-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/xmas-wreath-4.jpg");
        });
        $(".two").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".two").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/wed-wreath-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/wed-wreath-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/wed-wreath-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/wed-wreath-4.jpg");
        });
        $(".three").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".three").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/birth-wreath-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/birth-wreath-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/birth-wreath-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/birth-wreath-4.jpg");
        });
        $(".four").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".four").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/baby-wreath-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/baby-wreath-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/baby-wreath-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/baby-wreath-4.jpg");
        });

    });


    $(".right").click(function() {
        $(".initial").show();
        $(".picker").hide();
        $(".selection").css("border", "none");
        $(".one").css("border", "1px solid white");
        $(".btn1 img, .image1").attr("src", "images/xmas-card-1.jpg");
        $(".btn2 img, .image2").attr("src", "images/xmas-card-2.jpg");
        $(".btn3 img, .image3").attr("src", "images/xmas-card-3.jpg");
        $(".btn4 img, .image4").attr("src", "images/xmas-card-4.jpg");
        $(".right").css("border", "1px solid white");
        $(".left").css("border", "none");
        $(".selectors-wreath").hide();
        $(".selectors-card").show();
        $(".one").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".one").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/xmas-card-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/xmas-card-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/xmas-card-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/xmas-card-4.jpg");
        });
        $(".two").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".two").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/wed-card-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/wed-card-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/wed-card-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/wed-card-4.jpg");
        });
        $(".three").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".three").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/birth-card-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/birth-card-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/birth-card-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/birth-card-4.jpg");
        });
        $(".four").click(function() {
            $(".initial").show();
            $(".selection").css("border", "none");
            $(".four").css("border", "1px solid white");
            $(".btn1 img, .image1").attr("src", "images/baby-card-1.jpg");
            $(".btn2 img, .image2").attr("src", "images/baby-card-2.jpg");
            $(".btn3 img, .image3").attr("src", "images/baby-card-3.jpg");
            $(".btn4 img, .image4").attr("src", "images/baby-card-4.jpg");
        });
    });














    $(".btn1").click(function() {
        $(".initial").hide();
        $(".picker").hide();
        $(".image1").show();

    });


    $(".btn2").click(function() {
        $(".initial").hide();
        $(".picker").hide();
        $(".image2").show();

    });


    $(".btn3").click(function() {
        $(".initial").hide();
        $(".picker").hide();
        $(".image3").show();

    });


    $(".btn4").click(function() {
        $(".initial").hide();
        $(".picker").hide();
        $(".image4").show();

    });
});