$(function() {
    //$(".lunbo").eq(0).show();
    var next = 0;
    //var last = 0;
    //var 1440 = document.documentElement.clientleft;
    $(".lunbo>div").css({left:1440}).eq(0).css({left: 0});
    function move(type) {
        var type = type || "right"
        if (type == "right") {
            next++;
            if (next >= $(".lunbo>div").lenght) {
               // $(".lunbo>div").css({left: 1440}).eq(0).css({left: 0});
                next = 0;
            }
            $(".lunbo>div").eq(next).animate({left: 0})
    }
        else if (type == "left") {
            next--;
            if (next <= -1) {
                next = $(".lunbo>div").length - 1
                $(".lunbo>div").css({left: 0}).eq(0).css({left: 0});
            }
            $(".lunbo>div").eq(next).animate({left: 1440})
        }

    }
    var t = setInterval(move, 2000);
})