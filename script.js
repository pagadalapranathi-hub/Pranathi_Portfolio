// ================================
// Portfolio JavaScript
// ================================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});

// ================================
// Typing Animation
// ================================

const typingText = document.getElementById("typing");

const words = [
    "Python Developer",
    "Web Developer",
    "SQL Learner",
    "C Programmer",
    "Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);

}

typeEffect();


// ================================
// Dark Mode
// ================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    }
    else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    }

};


// ================================
// Mobile Menu
// ================================

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.onclick = () => {

    if(menu.style.display=="flex"){

        menu.style.display="none";

    }
    else{

        menu.style.display="flex";
        menu.style.flexDirection="column";
        menu.style.position="absolute";
        menu.style.top="70px";
        menu.style.right="20px";
        menu.style.background="#2563eb";
        menu.style.padding="20px";
        menu.style.borderRadius="10px";

    }

};


// ================================
// Scroll Top Button
// ================================

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }

};

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


// ================================
// Navbar Active Link
// ================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ================================
// Reveal Animation
// ================================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section").forEach(sec=>{

    sec.classList.add("hidden");

    observer.observe(sec);

});


// ================================
// Skill Animation
// ================================

const skills=document.querySelectorAll(".bar div");

window.addEventListener("scroll",()=>{

    const skillSection=document.getElementById("skills");

    const position=skillSection.getBoundingClientRect().top;

    const screen=window.innerHeight;

    if(position<screen-150){

        skills.forEach(skill=>{

            skill.style.animation="grow 2s forwards";

        });

    }

});


// ================================
// Button Hover Effect
// ================================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

    btn.addEventListener("mouseover",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseout",()=>{

        btn.style.transform="scale(1)";

    });

});


// ================================
// Contact Form
// ================================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});


// ================================
// Console Message
// ================================

console.log("Portfolio Loaded Successfully 🚀");
