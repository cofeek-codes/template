// burger menu
//! OPENING

(function () {
    const burgeritem = document.querySelector ('.burger');
    const menu = document.querySelector ('.header__nav');
    const menulinks = document.querySelectorAll ('.header__header-link');
    //! CLOSING
    const menuclose = document.querySelector ('.header__nav-close');
    //!
    burgeritem.addEventListener('click', () => {
       menu.classList.add('header__nav-active');
    });
    //! CLOSING
    menuclose.addEventListener('click', () => {
        menu.classList.remove ('header__nav-active');
    });
    // close on click-on-link 
if (window.innerWidth < 768) {
    for (let i = 0; i < menulinks.length; i += 1) {
        menulinks[i].addEventListener('click', () => {
            menu.classList.remove ('header__nav-active');
        });
    }
}
}());


// header background

(function () {
    let start = document.querySelector('.header');
   window.onscroll = () => {
       if (window.scrollY > 50) {
           start.classList.add ('header__active');
       } else {
           start.classList.remove ('header__active');
       }
   };
}());

// nav scroll 

(function () {

    const smoothScroll = function (targetEl, duration) {
        //! change to your header class name
        const headerElHeight =  document.querySelector('.header').clientHeight;
         //! change to your header class name
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        //! take this class selector for each link button 
        const links = document.querySelectorAll('.js-scroll');
        //! take this class selector for each link button
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

