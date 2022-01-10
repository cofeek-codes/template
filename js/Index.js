"use strict"
// BURGER

// BURGER


// OS CHECK



const isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};


// OS CHECK



if (isMobile.any()) {
    document.body.classList.add('_mobile');

    let menuarrows = document.querySelectorAll('.link-arrow');
    if (menuarrows.length>0) {
        for (let index = 0; index < menuarrows.length; index++) {
            const menuarrow = menuarrows[index];
            menuarrow.addEventListener('click', () => {
                menuarrow.parentElement.classList.toggle('__active');
            })
            
        }
    }

}else {
    document.body.classList.add('_pc');
    
}


