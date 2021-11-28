$(".waving-emoji").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("waving-animation hello-waving")
})
  
$(".status").hover(function(){
    $(".waving-emoji").addClass("waving-animation");        
})

$(".status").click(function(){
    $(".waving-emoji").addClass("waving-animation");        
})