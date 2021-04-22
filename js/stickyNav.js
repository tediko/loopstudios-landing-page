export default class StickyNav {
    constructor() {
        if (!this.vars()) return false;
        this.setupEvents();
    }

    vars() {
        this.selectors = {
            header: 'data-header',
            sectionKv: 'data-kv',
            activeClass: 'nav-scroll'
        }

        this.header = document.querySelector(`[${this.selectors.header}]`);
        this.sectionKv = document.querySelector(`[${this.selectors.sectionKv}]`);
        if (!this.header || !this.sectionKv) return false;

        this.isInitialized = false;

        return true;
    }

    setupEvents() {
        this.navObserver(this.sectionKv);
    }

    navObserver(element) {
        this.options = {
            rootMargin: '0px',
            threshold: 0.1
        }
        
        this.animations = {
            fadeIn: [
                {
                    opacity: 0,
                    transform: 'translateY(-62px)',
                },
                {
                    opacity: 1,
                    transform: 'translateY(0)',
                }
            ],
            fadeOut: [
                {
                    transform: 'translateY(0)',
                    opacity: 1,
                },
                {
                    opacity: 0,
                    transform: 'translateY(-62px)',
                }
            ]
        };

        this.observer = new IntersectionObserver(entries => {
            if (this.isInitialized) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        this.animNavIn = this.header.animate(this.animations.fadeIn, {
                            duration: 600,
                            fill: 'forwards'
                        });

                        this.header.classList.add(`${this.selectors.activeClass}`);
                    } else {
                        this.animNavOut = this.header.animate(this.animations.fadeOut, {
                            duration: 300,
                        });

                        this.animNavOut.onfinish = () => {
                            this.header.classList.remove(`${this.selectors.activeClass}`);
                        }
                    }
                })
            }
            this.isInitialized = true;
        }, this.options)

        this.observer.observe(element);
    }
}