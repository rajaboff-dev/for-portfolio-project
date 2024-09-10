
let bar = document.querySelector('.bar');
let barActive = document.querySelector('.bar-active');


bar.addEventListener('click', () => {
    bar.classList.toggle('bar-active')
    document.querySelector('.nav-links').classList.toggle('nav-active')
})


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable, InertiaPlugin, TextPlugin);

    Draggable.create(".draggable", {
        bounds: document.getElementById('home'),
        inertia: true,
    });
    gsap.to(".main-text", {
        duration: 1,
        text: "Rajaboff",
        ease: "none",
    });
    gsap.config({trialWarn: false})
});

if(window.scrollY > 3){
    document.querySelector('header').style.boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
}else{
    document.querySelector('header').style.boxShadow = 'none';
}

document.getElementById('home').addEventListener('mousemove', (event) => {
    let home = document.getElementById('home');
    if(event.clientX < 300){
        home.style.transform = 'translateX(10px)';
    }else if(event.clientX > 1200){
        home.style.transform = 'translateX(-10px)';
    }else if(event.clientY < 300){
        home.style.transform = 'translateY(10px)';
    }else if(event.clientY > 600){
        home.style.transform = 'translateY(-10px)';
    }else{
        home.style.transform = 'translate(0px, 0px)';
    }
    
    
})