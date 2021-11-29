const wavingElem = document.querySelector('.waving-emoji')
const statusContainer = document.querySelector('.status')

const helloWavingClass = "hello-waving"
const wavingClass = "waving-animation"

const animationReset = function(e){
    e.target.classList.remove(wavingClass, helloWavingClass)
}

wavingElem.addEventListener("webkitAnimationEnd", animationReset)
wavingElem.addEventListener("mozAnimationEnd", animationReset)
wavingElem.addEventListener("animationend", animationReset)

const waving = function(){
    
    if (!wavingElem.classList.contains(helloWavingClass)) {
        wavingElem.classList.add(wavingClass);
    }
}
  
statusContainer.addEventListener("mouseenter", waving)
statusContainer.addEventListener("click", waving)