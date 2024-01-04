
// ======= PAGE SCROLL INTO EFFECT =======
// ======= NAV DIRECTORY(WHEN CLICKING NAV LINK, TRIGGERS THE AUTOMATIC SCROLL TO SPECIFIC SECTION (DIV)) ========


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


// ============================================================

// ======================== ABOUT LANGUAGE SELECTION FUNCTION ====================
const about_p1 = document.getElementById("about_first_paragraph");
const about_p2 = document.getElementById("about_second_paragraph");
const hello_selection_btn = document.querySelector(".en_language_selection");
const hola_selection_btn = document.querySelector(".es_language_selection");
const thingsIlikeToDo = document.querySelector(".things_I_like_to_do");
const more_info_title = document.querySelector(".more_info_title");
const goals_title = document.getElementById("goals_title");
const more_info_goals = document.querySelector(".more_info_goals");
const extra_info_title = document.getElementById("extra_info_title");
const en_level = document.querySelector(".en_level");
const es_level = document.querySelector(".es_level");
const it_jp_level = document.querySelector(".it_jp_level");
const stress_relievers = document.getElementById("stress_relievers");
const stress_list = document.getElementById("stress_list");
const home_btn = document.getElementById("home_btn");
const about_btn = document.getElementById("about_btn");
const technologies_btn = document.getElementById("technologies_btn");
const projects_btn = document.getElementById("projects_btn");
const contact_btn = document.getElementById("contact_btn");
const about_btn_laptopView = document.getElementById("about_btn_laptop_view");
const projects_btn_laptopView = document.getElementById("project_btn_laptop_view");
const technologies_btn_laptopView = document.getElementById("technologies_btn_laptop_view");
const contact_btn_laptopView = document.getElementById("contact_btn_laptop_view");
const welcome = document.querySelector(".name_logo");
const tech_title = document.querySelector(".technologies_title");
const projects_title = document.querySelector(".projects_title");
const projects_title2 = document.querySelector(".projects_title2");
const contact_title = document.querySelector(".contact_title");
const coming_soon_msg = document.querySelector(".coming_soon_msg");


function esLanguage(){
// ======================  PARAGRAPH 1 OF ABOUT SECTION =======================================
    about_p1.innerText = " Soy un Desarrollador de Software que quiere hacer la diferencia ayudando clientes a evolucionar en la industria digital. Existe algo en tener el poder de crear productos para ayudarme a mi mismo y a otros que se ha convertido en un 'ESTILO DE VIDA' para mi.";

    // ======================  THINGS I LIKE TO DO - TITLE =======================================
    thingsIlikeToDo.innerText = "Cosas que me gustan hacer";

    // ======================  PARAGRAPH 2 OF ABOUT SECTION =======================================
    about_p2.innerText = " Me apasiona el baloncesto, surfing, gimnasio, aprender cosas que sean dificiles y que me reten al 'infinito y el mas alla'(Esa frase me parece muy familiar!). Pero volviendo al tema, me puedes encontrar corriendo longboard junto a mi hija, jugando Roblox con mi hijo mayor y cantando, bailando junto a mi esposa y a nuestro hijo recien nacido. 'Ohana significa familia'(Otra frase familiar!)";
// ============================== MORE INFO SECTION ===========================
    more_info_title.innerText = "Mas informacion...";
    goals_title.innerText = "Metas";
    more_info_goals.innerText = " Ayudar a una comunidad evolucionar mientras ambas partes crecemos y progresamos como equipo. Contribuir como Desarrollador FrontEnd, Desarrollador BackEnd o como Desarrollador Full Stack. Amor por la experiencia fuera de la zona de confort. Siempre estoy abierto y disponible a aprender nuevos lenguajes, habilidades y tecnologias para satisfacer las necesidades de un espacio de trabajo, cultura o entorno.";
    extra_info_title.innerText = "Info Extra";
    en_level.innerText = "Ingles - Fluido";
    es_level.innerText = "Espanol - Nativo";
    it_jp_level.innerText = "Italiano / Japones - Principiante";
    stress_relievers.innerText =  "Calmantes de estres: ";
    stress_list.innerText = "Gimnasio | Lofi Girl Radio | Matcha | El Oceano | Montanas | Lluvia";

// ===================== MOBILE NAV LINKS =================================
    home_btn.innerText = "Inicio";
    about_btn.innerText = "Acerca de mi";
    technologies_btn.innerText = "Tecnologias";
    projects_btn.innerText = "Proyectos";
    contact_btn.innerText = "Contacto";

    welcome.innerText = "Bienvenidos";

// ===================== LAPTOPVIEW NAV LINKS =================================
    about_btn_laptopView.innerText = "Acerca de mi";
    technologies_btn_laptopView.innerText = "Tecnologias";
    projects_btn_laptopView.innerText = "Proyectos";
    contact_btn_laptopView.innerText = "Contacto";

// ========= TITLES BY SECTIONS ==================================
    tech_title.innerText = "Tecnologias";
    projects_title.innerText = "Proyectos";
    projects_title2.innerText = "Proyectos";
    contact_title.innerText = "Contacto";

    // ================ BTN SELECTION COLOR ==========================
    hola_selection_btn.classList.add("btn_selected");
    hello_selection_btn.classList.remove("btn_selected");
    // hello_selection_btn.style.color = "rgb(246, 243, 237)";
    //  hola_selection_btn.style.color ="rgba(175, 214, 118, .990)";
    // hello_selection_btn.style.border = "none";
    // hola_selection_btn.style.borderTop = "6px solid rgba(175, 214, 118, .990)";

    /// ======================  COMING SOON MSG - PROJECTS SECTION =======================================
    coming_soon_msg.innerText = "Pronto";
}
    
function enLanguage(){


        // ================ BTN SELECTION COLOR ==============
        hello_selection_btn.classList.add("btn_selected");
        hola_selection_btn.classList.remove("btn_selected");
        // hola_selection_btn.style.borderTop = "none";
        // hola_selection_btn.style.color = "rbga(255,255,0.246)";
        // hello_selection_btn.style.borderTop= "6px solid rgba(255, 255, 255, 0.246)";
    
    about_p1.innerText = "I am a Software Developer that wants to make a difference helping customers evolve in the digital industry. There's something about having the power of creating and building things to help myself and others that has become a 'WAY OF LIFE' for me. ";

    thingsIlikeToDo.innerText = "Things I like to do";


    about_p2.innerText = "I love basketball, surfing, gym, learning things that are difficult and challenging myself 'to infinity and beyond' (That quote sounds familiar!). Anyhow... you can find me cruising on my longboard along side my daughter, playing Roblox with my older son and singing, dancing with my wife holding our newborn baby boy. 'Ohana means family'(Another one!).";

    more_info_title.innerText = "More info...";

    goals_title.innerText = "Goals";

    more_info_goals.innerText = "Helping a community evolve while both parts grow and improve as a team. Working as a Front End Developer, Back End Developer or Full Stack Developer. Love for the experience out of the comfort zone. I'm always open to learn new languages, skills and technologies to fit the needs of a workspace, culture or environment.";
    extra_info_title.innerText = "Extra Info";
    en_level.innerText = "English - Fluent";
    es_level.innerText = "Spanish - Native";
    it_jp_level.innerText = "Italian / Japanese - Beginner";
    stress_relievers.innerText =  "Stress Relievers: ";
    stress_list.innerText = "Gym | Lofi Girl Radio | Matcha | The Ocean | Mountains | Rain";

// ===================== MOBILE NAV LINKS =================================
    home_btn.innerText = "Home";
    about_btn.innerText = "About";
    technologies_btn.innerText = "Technologies";
    projects_btn.innerText = "Projects";
    contact_btn.innerText = "Contact";

    welcome.innerText = "Welcome";

// ===================== LAPTOPVIEW NAV LINKS =================================
    about_btn_laptopView.innerText = "About";
    technologies_btn_laptopView.innerText = "Technologies";
    projects_btn_laptopView.innerText = "Projects";
    contact_btn_laptopView.innerText = "Contact";

// ========= TITLES BY SECTIONS ==================================
    tech_title.innerText = "Technologies";
    projects_title.innerText = "Projects";
    projects_title2.innerText = "Projects";
    contact_title.innerText = "Contact";

    // // ================ BTN SELECTION COLOR ==========================

    /// ======================  COMING SOON MSG - PROJECTS SECTION =======================================
    coming_soon_msg.innerText = "Coming Soon";






}

// ===============================================================================


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
