(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();new Swiper(".swiper",{slidesPerView:1,spaceBetween:0,rewind:!0,autoplay:!0,grabCursor:"true",pagination:{el:".swiper-pagination"}});gsap.from(".bar-up",{scrollTrigger:{trigger:".hero",start:"top -=100",end:"top -=200",toggleActions:"play none reverse none"},opacity:0,ease:"power1.inOut"});let s=document.getElementById("title_img"),c=document.getElementById("fg-right"),u=document.getElementById("fg-left"),d=document.getElementById("cloud");window.addEventListener("scroll",()=>{let r=window.scrollY;s.style.marginTop=r*2+"px",c.style.left=r*1.5+"px",u.style.left=r*-1.5+"px",d.style.top=r*-1.5+"px"});
