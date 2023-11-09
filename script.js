
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

// ===============================================================================
// ======================== ABOUT LANGUAGE SELECTION FUNCTION ====================
const about_p1 = document.getElementById("about_first_paragraph");
const about_p2 = document.getElementById("about_second_paragraph")
const hello_selection_btn = document.querySelector(".en_language_selection");
const hola_selection_btn = document.getElementById("es_language_selection");
const thingsIlikeToDo = document.querySelector(".things_I_like_to_do")
const more_info_title = document.querySelector(".more_info_title");

function esLanguage(){

    about_p1.innerText = " Soy un Software Developer que quiere hacer la diferencia ayudando clientes a evolucionar en la industria digital. Existe algo en tener el poder de crear productos para ayudarme a mi mismo y a otros que se ha convertido en un 'ESTILO DE VIDA' para mi.";

    thingsIlikeToDo.innerText = "Cosas que me gustan hacer";


    about_p2.innerText = " Me apasiona el baloncesto, surfing, gimnasio, aprender cosas que sean dificiles y que me reten al 'infinito y el mas alla'(Esa frase me parece muy familiar!). Pero volviendo al tema, me puedes encontrar corriendo longboard junto a mi hija, jugando Roblox con mi hijo mayor y cantando, bailando junto a mi esposa y a nuestro hijo recien nacido. 'Ohana significa familia'(Otra frase familiar!)";

    more_info_title.innerText = "Mas informacion";



    // ================ BTN SELECTION COLOR ==============
    hola_selection_btn.classList.add("hola_btn_selected");
    hello_selection_btn.classList.remove("hello_btn_selected");
    hello_selection_btn.style.color = "rgb(246, 243, 237)";
    hello_selection_btn.style.border = "none";
    

}

function enLanguage(){
    about_p1.innerText = "I am a Software Developer that wants to make a difference helping customers evolve in the digital industry. There's something about having the power of creating and building things to help myself and others that has become a 'WAY OF LIFE' for me. ";



    // ================ BTN SELECTION COLOR ==============
    hello_selection_btn.classList.add("hello_btn_selected");
    hola_selection_btn.classList.remove("hola_btn_selected");
    hello_selection_btn.style.color = "rgba(175, 214, 118, .990)";
    hello_selection_btn.style.borderTop= "4px solid rgba(255, 255, 255, 0.44)";

}

// ===============================================================================




// =========== MOBILE LOGO ONCLICK ANIM =======================
const logoImg = document.querySelector("#personal_logo_mobile");
function logoAnim(element){
    element.classList.add('logoAnim');
    logoImg.src = "./imgs/profile_pic/2.png";
}



// ============================================================




// ==================  SCROLL REVEAL ANIM BY SECTIONS =================

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
