jQuery(document).ready(($)=>{
    let page1Img=$("#page1 img").css( "height");
    let widthPage=$("body").css("width");

    $("body").css("opacity", "1");
    $("#page1").css("height", page1Img);
    $("footer input").click(()=>{
        $('html, body').animate({scrollTop: '0px'}, 500);
     });


});

$(window).scroll(()=>{
    $("header").css("background", "black");
    // if ($(window).width() <= '1024')
    //     $("#menu-li-img1").css("display", "inline");

});
$("#menu-li-img1").click(()=>{
    if($(".menu-li").eq(0).css("display")==="none")
        $(".menu-li").css("display", "block")
    else
        $(".menu-li").css("display", "none")

});