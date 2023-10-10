// ========= PAGE 1 BG SCROLL ANIMATION =======

function myFunction(x) {
if (x.matches) { let intro = document.querySelector('.intro');

let video = document.querySelector('.video');

    let controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({
        duration:10000,
        triggerElement: intro,
        triggerHook:0
    }) 
    // .addIndicators()
    .setPin(intro)
    .addTo(controller)
    
        
        let accelamount = 0.1;
        let scrollpos = 0;
        let delay = 3;
        
        scene.on('update', e => {
            scrollpos = e.scrollPos / 1000;
            
            
        });
        
        setInterval(() => {
              delay += (scrollpos - delay) * accelamount;
            console.log(scrollpos, delay);
            
            video.currentTime = delay;
        },90.3)
}}

var x = window.matchMedia("(min-width: 850px)")
myFunction(x) 
x.addListener(myFunction)




// ======= PAGE SCROLL INTO EFFECT =======


    function scrollHome(){
    home = document.getElementById('home').scrollIntoView(); 
}

    function scrollAbout(){
    about = document.getElementById('about').scrollIntoView(); 
    
}

function scrollTechnologies(){
    technologies = document.getElementById('technologies').scrollIntoView(); 
}
function scrollProjects(){
    projects = document.getElementById('projects').scrollIntoView(); 
}
function scrollContact(){
    contact = document.getElementById('contact').scrollIntoView(); 
}

