const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress-fill");
const buttons = document.querySelectorAll("button");

let currentstep = 1;

const update = (e) => {
    currentstep = e.target.id === "next" ? ++currentstep : --currentstep;

    if (currentstep < 1) currentstep = 1;
    if (currentstep > circles.length) currentstep = circles.length;

    circles.forEach((circle, index) => {
        const icon = circle.querySelector("i");

        if (index < currentstep) {
            circle.classList.add("active");
            icon.classList.remove("bi-x-circle-fill");
            icon.classList.add("bi-check-circle-fill");
        } else {
            circle.classList.remove("active");
            icon.classList.remove("bi-check-circle-fill");
            icon.classList.add("bi-x-circle-fill");
        }
    });

    progress.style.width = `${((currentstep - 1) / (circles.length - 1)) * 100}%`;
};


buttons.forEach((btn) => {
    btn.addEventListener("click", update);
});
