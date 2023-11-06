$(document).ready(function () {

    const toggleNavbar = $('#toggleNavbar');
    const navbar = $('#navbar');

    toggleNavbar.click(function () {

        navbar.toggle(100, function () {
            toggleNavbar.text(
                this.style.display === 'none' ? 'show' : 'hide'
            )
        })
    });

});