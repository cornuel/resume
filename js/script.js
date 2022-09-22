// Enable navbar

const nav = document.querySelector(".navbar_container");
let button_exp = document.querySelector(".exp").addEventListener("click", navbar_clicked)
let button_edu = document.querySelector(".education").addEventListener("click", navbar_clicked)
let button_skills = document.querySelector(".stack").addEventListener("click", navbar_clicked)
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.replace("navbar_container", "navbar--hidden");
    }
    else{
        nav.classList.replace("navbar--hidden", "navbar_container");
    }

    lastScrollY = window.scrollY
});



function navbar_clicked() {
    nav.classList.replace("navbar_container", "navbar--hidden");
}