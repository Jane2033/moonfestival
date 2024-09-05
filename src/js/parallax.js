let title = document.getElementById('title_img');
let fg1 = document.getElementById('fg-right');
let fg2 = document.getElementById('fg-left');
let cloud = document.getElementById('cloud');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    title.style.marginTop = value * 2 + 'px';
    fg1.style.left = value * 1.5 + 'px';
    fg2.style.left = value * -1.5 + 'px';
    cloud.style.top = value * -1.5 + 'px';

});