$(window).scroll(function(){
    let secondsection=$("#about").offset().top;
    console.log(secondsection)
    let scrollvalue=$(window).scrollTop();
 if(scrollvalue>=secondsection){
     $(".navbar").removeClass("bg-transparent");
     $(".navbar").addClass("navbg");
     $(".forUp").fadeIn(500);
 }
 else{
    $(".navbar").addClass("bg-transparent");
    $(".navbar").removeClass("navbg");
    $(".forUp").fadeOut(500);
}

})

$(document).ready(function(){
    $(".loadingscreen").fadeOut(1000)
    $(".forUp").fadeOut(500);
}
)

$(".forUp").click(function(){
    $("html , body").animate({scrollTop :"0"},1000)
})

$(function(){

    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:'0',
      });
});