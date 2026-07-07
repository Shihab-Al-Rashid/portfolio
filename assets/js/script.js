/*====================================
Shihab-Al-Rashid Portfolio
Version : V1
====================================*/

"use strict";

/*====================================
DOM Ready
====================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
    Sticky Header
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });




    /*==============================
    Smooth Scroll
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });




    /*==============================
    Active Menu
    ==============================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });
/*==============================
Typing Animation
==============================*/

const typingElement = document.querySelector(".hero h2");

if (typingElement) {

    const words = [

        "Electrical & Electronic Engineer",

        "Assistant Engineer",

        "PLC & SCADA Engineer",

        "AutoCAD Electrical Designer",

        "Power System Engineer",

        "Research Enthusiast"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent = currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent = currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 90);

    }

    typeEffect();

}



/*==============================
Back To Top Button
==============================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

topButton.className = "back-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/*==============================
Hero Image Animation
==============================*/

const heroImage = document.querySelector(".hero-right img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", function () {

        heroImage.style.transform = "scale(1.05)";

    });

    heroImage.addEventListener("mouseleave", function () {

        heroImage.style.transform = "scale(1)";

    });

}
/*==============================
Scroll Reveal Animation
==============================*/

const revealElements = document.querySelectorAll(

".section-title, .about-wrapper, .timeline-item, .edu-card, .skill-item, .tool-card, .project-card, .research-card, .training-card, .certificate-card, .contact-card"

);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(el=>{

el.classList.add("hidden");

revealObserver.observe(el);

});



/*==============================
Progress Bar Animation
==============================*/

const progressBars=document.querySelectorAll(".progress-bar");

const progressObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar=entry.target;

const width=bar.style.width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

},300);

}

});

},

{

threshold:0.5

}

);

progressBars.forEach(bar=>{

progressObserver.observe(bar);

});



/*==============================
Counter Animation
==============================*/

const counters=document.querySelectorAll(".counter-box h2");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText);

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

}

});

},

{

threshold:0.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});



/*==============================
Navbar Background
==============================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#08111f";

}

else{

header.style.background="rgba(8,17,31,.95)";

}

});



/*==============================
Console Message
==============================*/

console.log(

"%cPortfolio Loaded Successfully",

"color:#3b82f6;font-size:16px;font-weight:bold;"

);    
});
