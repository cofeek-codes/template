"use strict"
// BURGER

// BURGER


// OS CHECK



const isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};


// OS CHECK



if (isMobile.any()) {
    document.body.classList.add('__mobile');
}else {
    document.body.classList.add('__pc');
    
}


//  ADD

(function () {
    const start = document.querySelector('.sub-menu');
    start = addEventListener('hover', () => {
        classList.add('sub-menu__active')
    })
}());





//  ADD