let cont = document.querySelector('.beer__text-animation')
const trigger = document.querySelector('.beer__ai__question')
const but = document.querySelector('.beer__button')
let text = 'Ну, в конце концов, кто сказал, что веселье должно ждать пятницы? В четверг можно снять напряжение рабочей недели и подготовиться к выходным, без лишней суеты. 🥳 Четверг для того, чтобы сделать переход к концу недели более плавным и приятным. Ну и, конечно, хорошее аниме и пиво — это всегда беспроигрышный вариант для поднятия настроения!'
let p = 0;

function printSmbl() {
    setInterval(() => {
        if (p < text.length)
            cont.innerHTML = cont.innerHTML + text[p];
        p++;
    }, 40)
}


const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            printSmbl()
        }
    })
}

const options = {

    threshold: 0.8,
}

const observer = new IntersectionObserver(callback, options)

observer.observe(trigger)

const faq = [...document.querySelectorAll('.beer__faq__item__container')]
const answ = [...document.querySelectorAll('.beer__faq__item__wrapper')]

faq.forEach((e, i) => {
    e.onclick = () => {
        answ[i].classList.toggle('beer__faq__item__wrapper_opened')
        e.classList.toggle('beer__faq__item__container_opened')
    }
})