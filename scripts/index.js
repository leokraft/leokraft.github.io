$(".waving-emoji").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("waving-animation hello-waving")
})
  
$(".waving-emoji").hover(function(){
    $(this).addClass("waving-animation");        
})

$(".waving-emoji").click(function(){
    $(this).addClass("waving-animation");        
})