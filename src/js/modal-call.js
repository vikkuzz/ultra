    var modalCall = document.querySelector('.footer-menu__button-left');
    var buttonOpenMenu = document.querySelector('.nav__button-call');
    var modal = document.querySelector('.wrap-call');
    var buttonCloseMenu = document.querySelector('.close-button');
    var menu = document.querySelector('.wrap-call__menu');
    var heightBody = document.querySelector('.wrapp-body');
    var modalLeft = document.querySelector('.left-side-menu');

    var closeMenu = function(className) {
        modal.style.display = 'none';
    }

    buttonOpenMenu.onclick = function() {
        modal.style.display = "flex";
        heightBody.classList.add('wrapp-body-height');
        modal.classList.remove('closed-menu');
    }
    modalCall.onclick = function() {
        modal.style.display = "flex";
        heightBody.classList.add('wrapp-body-height');
        modal.classList.remove('closed-menu');
        modalLeft.classList.add('left-side-menu-hide');
        modalLeft.classList.remove('left-side-menu-open');

    }


    buttonCloseMenu.onclick = function() {
        heightBody.classList.remove('wrapp-body-height');
        modal.classList.add('closed-menu');
        setTimeout(closeMenu, 300);
    }
    modal.addEventListener('click', function (e) {
        if (!menu.contains(e.target) && !buttonCloseMenu.contains(e.target)) {
            heightBody.classList.remove('wrapp-body-height');
            modal.classList.add('closed-menu');
            setTimeout(closeMenu, 300);
        }
    });


