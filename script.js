// ========= PAGE 1 BG SCROLL ANIMATION =======
// ========= WHEN SCROLL ON PAGE 1 VIDEO PLAYS BY SECTIONS =========

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
        let delay = 5;
        
        scene.on('update', e => {
            scrollpos = e.scrollPos / 1000;
            
            
        });
        
        setInterval(() => {
              delay += (scrollpos - delay) * accelamount;
            
            video.currentTime = delay;
        },50.5)
}}

var x = window.matchMedia("(min-width: 850px)")
myFunction(x) 
x.addListener(myFunction)






// ======= PAGE SCROLL INTO EFFECT =======
// ======= NAV DIRECTORY(WHEN CLICKING NAV LINK, TRIGGERS THE AUTOMATIC SCROLL TO THAT SPECIFIC SECTION (OR DIV)) ========


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

