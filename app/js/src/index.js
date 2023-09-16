
(function () {

    var navLinks = document.querySelectorAll(".header__nav-link");
    var header__buttonOrder = document.querySelector('.header__button--order');

    var about = document.querySelector('.about');
    var service = document.querySelector('.service');
    var advantage = document.querySelector('.advantage');
    var accommodation = document.querySelector('.accommodation');
    var blog = document.querySelector('.footer');
    var contact = document.querySelector('.contact');
    var order = document.querySelector('.order');


    const info = { block: "start", behavior: "smooth" };

    navLinks[0].addEventListener('click', () => {
        about.scrollIntoView(info);
    });
    navLinks[1].addEventListener('click', () => {
        service.scrollIntoView(info);
    });
    navLinks[2].addEventListener('click', () => {
        advantage.scrollIntoView(info);
    });
    navLinks[3].addEventListener('click', () => {
        accommodation.scrollIntoView(info);
    });
    navLinks[4].addEventListener('click', () => {
        blog.scrollIntoView(info);
    });
    navLinks[5].addEventListener('click', () => {
        contact.scrollIntoView(info);
    });

    header__buttonOrder.addEventListener('click', () => {
        order.scrollIntoView(info);
    });
}())