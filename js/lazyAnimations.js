export default class LazyAnimations {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            elementsToAnim: 'data-gallery-card',
            activeClass: 'card-anim'
        }

        this.elementsToAnim = document.querySelectorAll(`[${this.selectors.elementsToAnim}]`);
        if (!this.elementsToAnim) return false;

        this.delay = 100;
        return true;
    }

    setupEvents() {
        this.elementsToAnim.forEach((element, index) => {
            this.animationObserver(element, index);
        })
    }

    animationObserver(element, index) {
        this.options = {
            rootMargin: '0px',
            threshold: 0.3
        }

        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`${this.selectors.activeClass}`);
                    entry.target.style.animationDelay = `${this.delay * index}ms`
                }
            })
        }, this.options)

        this.observer.observe(element);
    }
}