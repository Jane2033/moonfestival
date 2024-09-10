/*document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
});


gsap.from('.section2',{
    scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});

gsap.from('#section3',{
    scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});

gsap.from('#section4',{
    scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});

gsap.from('#section5',{
    scrollTrigger: {
        trigger: "#section5",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});
*/

gsap.from('.bar-up',{
    scrollTrigger: {
        trigger: ".hero",
        start: "top -=100",
        end: "top -=200",
        toggleActions: "play none reverse none"  
    },
    opacity: 0,
    ease: 'power1.inOut',
});
