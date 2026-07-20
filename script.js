// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
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

// Reveal Animation
const cards = document.querySelectorAll(".card,.project,.skills span");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.7s";

    observer.observe(card);

});

// Typing Effect
const text = "Full Stack Web Developer | AI & ML Enthusiast";

let index = 0;

const heading = document.querySelector(".hero h3");

heading.innerHTML = "";

function typing(){

    if(index < text.length){

        heading.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,60);

    }

}

typing();

// Current Year
document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Sneha Agrawal | All Rights Reserved`;
