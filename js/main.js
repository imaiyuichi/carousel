'use strict';
{
    const next = document.querySelector('.js-next');
    const prev = document.querySelector('.js-prev');
    const list = document.querySelector('.js-list');
    const dots = [];
    const slides = list.children;
    let currentIndex = 0;

    function updateButtons() {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');
        if (currentIndex === 0) {
            prev.classList.add('hidden');
        }
        if (currentIndex === slides.length -1) {
            next.classList.add('hidden');
        }
    }

    function onload() {
        const element = document.querySelector('#wrapper');
        const element02 = document.querySelector('#js-list');
        const prevHidden = document.querySelector('.js-prev');
        const nextHidden = document.querySelector('.js-next');
        if (element.classList.contains('cvx-edit') !== true) {
            element.classList.add('carousel__wrap');
            element02.classList.add('carousel__wrapList');
            // prevHidden.style.display = 'none';
            // nextHidden.style.display = 'none';
        };
    }

    function setupDots() {
        for( let i = 0; i < slides.length; i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => {
                currentIndex = i;
                updateDots();
                updateButtons();
                moveSlide();
            })
            dots.push(button);
            document.querySelector('nav').appendChild(button);
        }
        dots[0].classList.add('active');
    }

    onload();
    updateButtons();
    setupDots();

    function updateDots() {
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[currentIndex].classList.add('active');
    }

    function moveSlide() {
        // getBoundingClientRect : 要素の寸法と、そのビューポートに対する相対位置に関する情報を返す。
        const slideWidth = slides[0].getBoundingClientRect().width;
        list.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    }

    next.addEventListener('click', () => {
        currentIndex++;
        updateButtons();
        updateDots();
        moveSlide();
    });

    prev.addEventListener('click', () => {
        currentIndex--;
        updateButtons();
        updateDots();
        moveSlide();
    });

    // window.addEventListener('resize', () => {
    //     moveSlide();
    // })
}