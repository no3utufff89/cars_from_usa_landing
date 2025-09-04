import Glide from '@glidejs/glide';
import { getPageElements } from './pageElements.js';
const { carsSliderBtnLeft, carsSliderBtnRight, resultSliderBtnLeft, resultSliderBtnRight } =
    getPageElements();
export function initCarsSlider() {
    const carsSlider = new Glide('.glide-cars', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 24,
        dragThreshold: 30,
        peek: {
            before: 0,
            after: 24,
        },

        breakpoints: {
            1024: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0,
                },
                gap: 12,
            },
            768: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0,
                },
                gap: 12,
            },
            600: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 24,
                },
                gap: 12,
            },
        },
    });

    window.addEventListener('load', () => {
        carsSlider.mount();
    });
    carsSliderBtnLeft.addEventListener('click', () => {
        carsSlider.go('<');
    });
    carsSliderBtnRight.addEventListener('click', () => {
        carsSlider.go('>');
    });
}

export function initResultsSlider() {
    const resultsSlider = new Glide('.glide-result', {
        type: 'carousel',
        startAt: 0,
        perView: 3,
        gap: 24,
        dragThreshold: 30,
        peek: {
            before: 0,
            after: 0,
        },

        breakpoints: {
            1024: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0,
                },
                gap: 12,
            },
            768: {
                perView: 2,
                peek: {
                    before: 0,
                    after: 0,
                },
                gap: 12,
            },
            600: {
                perView: 1,
                peek: {
                    before: 0,
                    after: 24,
                },
                gap: 12,
            },
        },
    });
    window.addEventListener('load', () => {
        resultsSlider.mount();
    });
    resultSliderBtnLeft.addEventListener('click', () => {
        resultsSlider.go('<');
    });
    resultSliderBtnRight.addEventListener('click', () => {
        resultsSlider.go('>');
    });
}
