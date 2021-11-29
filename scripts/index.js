let wavingElem = $(".waving-emoji")
let statusContainer = $(".status")

wavingElem.bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
    $(this).removeClass("waving-animation hello-waving")
})

let waving = function(){
    
    if (!wavingElem.hasClass("hello-waving")) {
        wavingElem.addClass("waving-animation");  
    }
}
  
statusContainer.hover(waving)
statusContainer.click(waving)