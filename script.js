/* ==========================================================================
   Small interactive touches
   ========================================================================== */

/* 1. Friendly greeting shown inline instead of a pop-up alert */
const greetBtn = document.getElementById("greet-btn");
const greetMessage = document.getElementById("greet-message");

const greetings = [
    "Thanks for stopping by — I'd love to hear from you!",
    "Hello! Feel free to reach out any time.",
    "Hi there! Always happy to talk about web design."
];

greetBtn.addEventListener("click", function () {
    const random = Math.floor(Math.random() * greetings.length);
    greetMessage.textContent = greetings[random];
    greetMessage.classList.add("visible");
});

/* 2. Highlight the navigation link for the section currently on screen */
const sections = document.querySelectorAll("main section, header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.style.color = link.getAttribute("href") === "#" + current
            ? "var(--navy)"
            : "";
    });
});
