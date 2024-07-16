$(function(){
    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown(300);
    },
    function(){
        $(".sub, .sub_bg").stop().slideUp(300);

    })//hover

    $(".move").slick({
        autoplay:true,
        autoplayTime:1000,
        dots:true,
        arrows:false,
        adaptiveHeight:true,
    })//move slick

    $(".close").click(function(){
        $(".pop_up").hide();
    })
})//jQuery