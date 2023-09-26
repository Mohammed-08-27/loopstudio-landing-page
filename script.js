const navToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');
let state = true;
function mobileNav() {
    if (state) {
        navToggle.setAttribute('aria-expanded', true);
        nav.setAttribute('data-visible', true);
        state = false
    } else {
        navToggle.setAttribute('aria-expanded', false);
        nav.setAttribute('data-visible', false);
        state = true
    }
}
navToggle.onclick = mobileNav;