document.addEventListener("DOMContentLoaded", function() {
    $('nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
    });

    const moBtn = document.querySelector(".mo-btn-open");
    const nav = document.getElementById("nav-icon1");
    const moNav = document.querySelector(".mo-navbar-container");

    moBtn.addEventListener("click", function() {
        if (!nav.classList.contains('open')) {
            moNav.style.transition = 'margin-left 0.7s';
            moNav.style.marginLeft = '100%';
            this.classList.toggle('open');
        } else {
            moNav.style.transition = 'margin-left 0.7s';
            moNav.style.marginLeft = '0%';
            this.classList.remove('open');
        }
    });
});
