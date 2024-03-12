gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
// gsap code here!
    gsap.from('.about .title', {
        duration: 1.5, 
        y: '100%', 
        ease: 'smooth', 
        opacity: 0,
        scrollTrigger: {
            trigger: ".about .title",
            toggleActions: "restart reverse play reset"
        }
    })
    gsap.from('.about .content', {
        duration: 1.5, 
        x: '100%', 
        ease: 'smooth',
        opacity: 0,
        scrollTrigger: {
            trigger: ".about .content",
            toggleActions: "restart reverse play reset"
        }
        })
    gsap.from('#pic', {
        duration: 1.5, 
        x: '-100%', 
        ease: 'smooth',
        scrollTrigger: {
            trigger: "#pic",
            scrub: 4,
            toggleActions: "restart none none none"
        }
    })
 });

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let pic = document.getElementById("pic")

window.addEventListener('scroll', function(){
    var value = this.window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    pic.style.left = value * 0.0 + 'px';
})
