window.onscroll = function() {myNavbar()};
var navbar = document.querySelector(".navbar");
var drop = document.querySelector(".drop-content");
var sticky = navbar.offsetTop;
function myNavbar() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        drop.classList.add("sticky2");
    } else {
        navbar.classList.remove("sticky");
        drop.classList.remove("sticky2");
    };
};
