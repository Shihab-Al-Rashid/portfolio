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

});
