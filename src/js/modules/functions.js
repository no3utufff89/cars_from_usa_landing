import { getPageElements } from './pageElements.js';
const pageElements = getPageElements();
// Отключение действий при нажатии на кнопки
export function preventClickDefault(elem) {
    elem.on('click', function (e) {
        e.preventDefault();
    });
}

/* Проверка поддержки webp, добавление класса webp или not-webp для HTML */
export function isWebp() {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src =
            'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.body.classList.add(className);
    });
}
export function generateDateText() {
    const year = new Date().getFullYear();
    pageElements.dateOutput.textContent = `no3utufff-web 2024 - ${year}`;
}
export function enableFixedBody() {
    document.body.classList.add('no-scroll');
    setTimeout(() => {
        pageElements.overlay.classList.add('active');
    }, 10);
}
export function disableFixedBody(delay) {
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
        pageElements.overlay.classList.remove('active');
    }, delay);
}
export function mobileMenuControl() {
    const mobileBtn = pageElements.burgerBtn;
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('open');
        if (mobileBtn.classList.contains('open')) {
            enableFixedBody();
            setTimeout(() => {
                pageElements.mobileMenuBlock.classList.add('active');
            }, 200);
        } else {
            disableFixedBody(300);
            setTimeout(() => {
                pageElements.mobileMenuBlock.classList.remove('active');
            });
        }
    });
    pageElements.overlay.addEventListener('click', e => {
        const target = e.target;
        if (target === pageElements.overlay) {
            disableFixedBody(300);
            setTimeout(() => {
                pageElements.mobileMenuBlock.classList.remove('active');
            });
            mobileBtn.classList.remove('open');
        }
    });
    [...pageElements.mobileLink].forEach(link => {
        link.addEventListener('click', () => {
            disableFixedBody(0);
            setTimeout(() => {
                pageElements.mobileMenuBlock.classList.remove('active');
            }, 0);
            mobileBtn.classList.remove('open');
        });
    });
    pageElements.mobilePhoneLink.addEventListener('click', e => {
        disableFixedBody(0);
        setTimeout(() => {
            pageElements.mobileMenuBlock.classList.remove('active');
        }, 0);
        mobileBtn.classList.remove('open');
    });
}
export function acc() {
    const items = [...pageElements.processStepElems];
    const elemBtns = [...pageElements.processStepBtns];
    const faqWrapper = [...pageElements.processStepBody];
    elemBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < items.length; i += 1) {
                if (index === i) {
                    faqWrapper[i].style.height = items[i].classList.contains('active')
                        ? ''
                        : `${faqWrapper[i].scrollHeight}px`;
                    items[i].classList.toggle('active');
                } else {
                    items[i].classList.remove('active');
                    faqWrapper[i].style.height = '';
                }
            }
        });
    });
}
export function phoneMask() {
    const input = pageElements.phoneInput;
    Inputmask({ mask: '+7 999 999-99-99' }).mask(input);
}
export function insertHrefForLink() {
    const target = [...document.querySelectorAll('.colored-link')];
    target.forEach(link => {
        link.href = '#callback';
    });
}
