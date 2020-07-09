    var modalLeftCall = document.querySelector('.footer-menu__button-left');
    var buttonOpenMenu = document.querySelector('.nav__button-call');
    var modalLeft = document.querySelector('.wrap-call');
    var buttonCloseMenu = document.querySelector('.close-button');
    var menu = document.querySelector('.wrap-call__menu');
    var heightBody = document.querySelector('.wrapp-body');


    var closeMenu = function(className) {
        modalLeft.style.display = 'none';
    }

    buttonOpenMenu.onclick = function() {
        modalLeft.style.display = "flex";
        heightBody.classList.add('wrapp-body-height');
        modalLeft.classList.remove('closed-menu');
    }
    modalLeftCall.onclick = function() {
        modalLeft.style.display = "flex";
        heightBody.classList.add('wrapp-body-height');
        modalLeft.classList.remove('closed-menu');
    }


    buttonCloseMenu.onclick = function() {
        heightBody.classList.remove('wrapp-body-height');
        modalLeft.classList.add('closed-menu');
        setTimeout(closeMenu, 300);
    }
    modalLeft.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !buttonCloseMenu.contains(e.target)) {
            heightBody.classList.remove('wrapp-body-height');
            modalLeft.classList.add('closed-menu');
            setTimeout(closeMenu, 300);
        }
    });


