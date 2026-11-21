const header = document.getElementById("header");
const adClose = document.querySelector(".xclose");

adClose.addEventListener("click", () => {
    header.style.display = "none";
});

const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("nav_menu");

menu.onclick = function(){
    nav.classList.add("active");

    menu.classList.remove("active");
    close.classList.add("active");
}

close.onclick = function(){
    nav.classList.remove("active");

    close.classList.remove("active");
    menu.classList.add("active");
}


const product = document.querySelectorAll(".product_hold .product_a");

product.forEach((tab) => {
    tab.addEventListener("click", () => {
        product.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});


const pause_play = document.getElementById("pause-play");
const h_video = document.querySelector(".h_video");

pause_play.addEventListener("click", () => {
    if (h_video.paused) {
        h_video.play();
        pause_play.src = "Image/pause-svgrepo-com.svg";
    } else {
        h_video.pause();
        pause_play.src = "Image/play-svgrepo-com.svg";
    }
});

// const animationButton = getElementById("toggle");
// const slideshowHolder = getElementById("slideshow_holder");

// const pauseSlide = getElementById("pause_btn");
// const playSlide = getElementById("play_btn")

// animationButton.addEventListener("click", () => {
//     animationButton.classList.toggle("running");

//     if (animationButton.classList.contains("running")) {
//         pauseSlide.style.display = "block";
//         playSlide.style.display = "none";
//     } else {
//         pauseSlide.style.display = "none";
//         playSlide.style.display = "blocked";
//     }
// });



const transform = document.querySelectorAll(".transform_bttn .transform_link");

transform.forEach((tab) => {
    tab.addEventListener("click", () => {
        transform.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
    });
});


const slide = document.getElementById("slide");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.3
});

observer.observe(slide);



const move = document.querySelector(".fueled_track");

next.addEventListener("click", () => {
    move.scrollBy({
        left: move.clientWidth,
        behavior: "smooth"
    });
});

previous.addEventListener("click", () => {
    move.scrollBy({
        left: -move.clientWidth,
        behavior: "smooth"
    });
});




const slider = document.querySelector(".logo_slider_wrap");

forwardx.addEventListener("click", () => {
    slider.scrollBy({
        left: slider.clientWidth,
        behavior: "smooth"
    });
});

back.addEventListener("click", () => {
    slider.scrollBy({
        left: -slider.clientWidth,
        behavior: "smooth"
    });
});


const logo = document.getElementById("logo_slide");

const guide = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("shower");
        }

    });

}, {
    threshold: 0.3
});

guide.observe(logo);