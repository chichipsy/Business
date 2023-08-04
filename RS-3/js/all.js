$(window).scroll(function () { 
    scrolltop = $(window).scrollTop();
});

const numberOfSlides = $(".slide").length
let slidenumber = 0;
$(".next-btn").click(function () { 
    $(".slide").removeClass("active");
    slidenumber++;
    if (slidenumber > (numberOfSlides - 1)) {
      slidenumber = 0;
    }
    $(".slide").eq(slidenumber).addClass("active");
});

$(".prev-btn").click(function () { 
    $(".slide").removeClass("active");
    slidenumber--;
    if (slidenumber < 0) {
      slidenumber = numberOfSlides - 1;
    }
    $(".slide").eq(slidenumber).addClass("active");
});


var nav = 0;
$(".lines").click(function () { 
    if(nav == 0){
        nav++;
        $(".lines .line").css("background", "#fff");
        $(".lines .line:nth-child(1)").css("transform", "translate(10px,16px) rotate(45deg)");
        $(".lines .line:nth-child(2)").css("display","none")
        $(".lines .line:nth-child(3)").css("transform", "translate(8px,-20px) rotate(-45deg)");
        $(".lines").removeClass("lines_c");
        $("body").css("overflow-y", "hidden");
        $(".pop").css("right", "0");
    }else{
        nav--;
        $(".lines .line").css("background", "#fff");
        $(".lines .line:nth-child(1)").css("transform", "translate(0) rotate(0)");
        $(".lines .line:nth-child(2)").css("display","block")
        $(".lines .line:nth-child(3)").css("transform", "translate(0) rotate(0)");
        $(".lines").addClass("lines_c");
        $("body").css("overflow-y", "scroll");
        $(".pop").css("right", "-100%");
    }
});

var q = 1
function hide(){
    $(".book:nth-child("+q+")").css("z-index", "-1");
    q++;
}

$(".ts").click(function () {
    $(".b"+q+" .txt").css("transform", "rotateY(-180deg)");
    $(".b"+q+" .txt h1").text("");
    $(".b"+q+" .txt p").text("");
    $(".b"+q+" .txt form").css("display", "none");
    $(".b"+q+" .txt .btn").css("display", "none");
    setTimeout(hide,1000)
});

let count = 0
$("#te").click(function () { 
    for(let i = 1;i<=4;i++){
        if($(".q"+i+":checked").attr("id") == "real_ans"){
            count+=25;
        }
    }
    $(".b6 .txt p span").text(count);
    if(count<=25){
        $(".b6 .txt .circle_con .circle").text("高");
        $(".b6 .txt .circle_con .circle").css("border-color", "red");
    }else if(count <= 75 & count >= 50){
        $(".b6 .txt .circle_con .circle").text("中");
        $(".b6 .txt .circle_con .circle").css("border-color", "orange");
    }else{
        $(".b6 .txt .circle_con .circle").text("低");
        $(".b6 .txt .circle_con .circle").css("border-color", "green");
    }
});

$("#cellphone").click(function () { 
    window.open('index.html', 'abc', config='height=882,width=480');
});

$("#about .txt_con .timeline .container2 .text-box .btns").click(function () {
    $("#about .imgcon .detail").removeClass("aboutvis");
    $("#about .imgcon .detail:nth-child(" + $(this).attr("id").charAt(3) + ")").addClass("aboutvis");
});

$("#about .timeline").click(function (e) { 
    if(e.target === this){
        $("#about .imgcon .detail").removeClass("aboutvis");
    }
});

$("#about .txt_con").click(function (e) { 
    if(e.target === this){
        $("#about .imgcon .detail").removeClass("aboutvis");
    }
});

