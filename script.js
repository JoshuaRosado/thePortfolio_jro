
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


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });
})

const revealAnimElements1 = document.querySelectorAll('.reveal_anim1')
const revealAnimElements2 = document.querySelectorAll('.reveal_anim2');
const revealAnimElements3 = document.querySelectorAll('.reveal_anim3')
const revealAnimElements4 = document.querySelectorAll('.reveal_anim4')
revealAnimElements1.forEach((el) => observer.observe(el));
revealAnimElements2.forEach((el) => observer.observe(el));
revealAnimElements3.forEach((el) => observer.observe(el));
revealAnimElements4.forEach((el) => observer.observe(el));
