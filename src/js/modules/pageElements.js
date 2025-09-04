export function getPageElements() {
    const dateOutput = document.querySelector('.date');
    const burgerBtn = document.querySelector('.nav-btn');
    const overlay = document.querySelector('.overlay');
    const mobileMenuBlock = document.querySelector('.mobile-menu');
    const mobileLink = document.querySelectorAll('.mobile-menu__link');
    const mobilePhoneLink = document.querySelector('.mobile-menu__phone-link');
    const processStepElems = document.querySelectorAll('.process-step');
    const processStepBtns = document.querySelectorAll('.process-step__btn');
    const processStepBody = document.querySelectorAll('.process-step__body');
    //sliders btns
    const carsSliderBtnLeft = document.querySelector('.cars__btn_left');
    const carsSliderBtnRight = document.querySelector('.cars__btn_right');
    const resultSliderBtnLeft = document.querySelector('.results__btn_left');
    const resultSliderBtnRight = document.querySelector('.results__btn_right');
    const phoneInput = document.querySelector('.callback-form__input');

    return {
        dateOutput,
        burgerBtn,
        overlay,
        mobileMenuBlock,
        mobileLink,
        mobilePhoneLink,
        processStepElems,
        processStepBtns,
        processStepBody,
        carsSliderBtnLeft,
        carsSliderBtnRight,
        resultSliderBtnLeft,
        resultSliderBtnRight,
        phoneInput,
    };
}
