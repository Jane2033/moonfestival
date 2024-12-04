let title = document.getElementById('title_img');
let fg1 = document.getElementById('fg-right');
let fg2 = document.getElementById('fg-left');
let fg1md = document.getElementById('fg-right-md');
let fg2md = document.getElementById('fg-left-md');
let cloud = document.getElementById('cloud');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    title.style.marginTop = value * 2 + 'px';
    fg1.style.left = value * 1.5 + 'px';
    fg2.style.left = value * -1.5 + 'px';
    fg1md.style.left = value * 1.5 + 'px';
    fg2md.style.left = value * -1.5 + 'px';
    cloud.style.top = value * -1.5 + 'px';

});