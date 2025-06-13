document.addEventListener("DOMContentLoaded", function() {

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
