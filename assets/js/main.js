const videos = document.querySelectorAll('.project-card video');

videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

const categories = document.querySelectorAll(".project-category");

categories.forEach(category => {

    const slider = category.querySelector(".projects-slider");
    const next = category.querySelector(".next");
    const prev = category.querySelector(".prev");

    if (!slider || !next || !prev) return;

    next.addEventListener("click", () => {
        slider.scrollBy({
            left: 400,
            behavior: "smooth"
        });
    });

    prev.addEventListener("click", () => {
        slider.scrollBy({
            left: -400,
            behavior: "smooth"
        });
    });

});