export default class ToggleMenu {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            body: 'data-body',
            hamburger: 'data-hamburger',
            nav: 'data-nav',
        };

        this.body = document.querySelector(`[${this.selectors.body}]`);
        this.hamburger = document.querySelector(`[${this.selectors.hamburger}]`);
        this.nav = document.querySelector(`[${this.selectors.nav}]`);

        if (!this.body || !this.hamburger || !this.nav) return false;

        this.expanded = this.hamburger.getAttribute('aria-expanded') === 'false' ? false : true;
        this.open = false;
        return true;
    }

    // Hamburger event listener
    setupEvents() {
        this.hamburger.addEventListener('click', () => this.toggle());
    }

    // Toggle hamburger menu
    toggle() {
        !this.open ? this.show() : this.hide();
    }

    // Animation while hamburger is open
    show() {
        this.hamburger.style.pointerEvents = "none";

        this.body.classList.add('overflow-hidden');
        this.nav.classList.add('hamburger--active');
        this.nav.classList.add('nav--open');

        this.expanded = !this.expanded;
        this.hamburger.setAttribute('aria-expanded', this.expanded);
        this.open = true;

        this.nav.addEventListener('animationend', () => {
            this.hamburger.style.pointerEvents = "all";
        })
    }

    // Animation while hamburger is closed
    hide() {
        this.hamburger.style.pointerEvents = "none";

        this.body.classList.remove('overflow-hidden');
        this.nav.classList.add('nav--close');
        this.nav.classList.remove('hamburger--active');

        this.expanded = !this.expanded;
        this.hamburger.setAttribute('aria-expanded', this.expanded);
        this.open = false;
        
        setTimeout(() => {
            this.nav.classList.remove('nav--open');
            this.nav.classList.remove('nav--close');
            this.hamburger.style.pointerEvents = "all";
        }, 600)
    }
}