// Typing Effect
const text = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").textContent = currentText;

        if (j === text[i].length) isDeleting = true;
        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
            if (i === text.length) i = 0;
        }
    }
    setTimeout(type, 100);
}

type();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});