const translations = {

    en: {

        nav_services: "What We Do",
        nav_work: "Work",
        nav_contact: "Contact",

        hero_subtitle: "Content / Graphics Creation",
        hero_title: "High-end 3D & AI Motion Graphics",
        hero_title2: "for Games, Shows<br>and Digital Media",
        hero_desc: "We create real-time experiences, cinematics, VFX and interactive content for museums, exhibitions, LED installations and immersive media.",
        hero_button: "View Work",

        services_title: "What We Do",
        services_desc: "We create high-end visual content for brands, museums, exhibitions, games and digital media.",

        card1_title: "3D Cinematics & Trailers",
        card1_desc: "Story-driven cinematics, trailers and promotional films.",

        card2_title: "Motion Design",
        card2_desc: "Motion design for advertising, presentations and digital media.",

        card3_title: "Museums & Exhibitions",
        card3_desc: "Digital exhibits and immersive storytelling for public spaces.",

        card4_title: "LED Content",
        card4_desc: "Large-scale visuals for LED walls, concerts and events.",

        card5_title: "Game Art Production",
        card5_desc: "Complete game art pipeline: characters, environments and props optimized for Unreal Engine and real-time rendering.",

        portfolio_title: "Selected Work",
        portfolio_desc: "A selection of our latest projects across cinematics, interactive experiences and digital installations.",

        cat_cinematics: "Cinematics",
        cat_led: "LED / Event / Cinema Visuals",
        cat_artists: "Music Artists",

        about_title: "About",
        about_desc: "We are a creative studio focused on real-time graphics, cinematics, VFX, interactive experiences and high-end visual production. Our team combines game development expertise with modern AI tools to deliver content for brands, museums, exhibitions, entertainment and digital media."

    },

    ru: {

        nav_services: "Услуги",
        nav_work: "Работы",
        nav_contact: "Контакты",

        hero_subtitle: "Создание графики и контента",
        hero_title: "Премиальная 3D и AI-графика",
        hero_title2: "для игр, шоу<br>и цифровых проектов",
        hero_desc: "Мы создаем синематики, VFX, интерактивный контент, музейные инсталляции, LED-графику и визуальные решения в реальном времени.",
        hero_button: "Наши работы",

        services_title: "Что мы создаем",
        services_desc: "Мы создаем визуальный контент высокого уровня для брендов, музеев, выставок, игровой индустрии и цифровых проектов.",

        card1_title: "3D-синематики и трейлеры",
        card1_desc: "Постановочные синематики, трейлеры и проморолики.",

        card2_title: "Моушн-дизайн",
        card2_desc: "Анимационная графика для рекламы, презентаций и цифровых медиа.",

        card3_title: "Музеи и выставки",
        card3_desc: "Интерактивные экспозиции и цифровые выставочные решения.",

        card4_title: "LED-контент",
        card4_desc: "Контент для LED-экранов, концертов, шоу и мероприятий.",

        card5_title: "Разработка игрового арта",
        card5_desc: "Полный цикл создания игрового арта: окружение, персонажи и пропсы, оптимизированные для Unreal Engine и других игровых движков.",

        portfolio_title: "Избранные проекты",
        portfolio_desc: "Подборка наших работ в области синематиков, интерактивных проектов и визуальных инсталляций.",

        cat_cinematics: "Синематики",
        cat_led: "LED / Шоу / Кино",
        cat_artists: "Музыкальные артисты",

        about_title: "О студии",
        about_desc: "Мы — студия, специализирующаяся на графике реального времени, синематиках, VFX, интерактивных проектах и визуальном производстве. Объединяем опыт разработки игр и современные AI-инструменты для создания контента для брендов, музеев, выставок, шоу и цифровых медиа."

    }

};


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

const modal = document.querySelector(".video-modal");
const modalVideo = modal.querySelector("video");
const closeBtn = document.querySelector(".close-video");

document.querySelectorAll(".project-card video").forEach(video => {

    video.addEventListener("mouseenter", () => {

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();
        video.currentTime = 0;

    });

});

document.querySelectorAll(".project-card video").forEach(video => {

    video.addEventListener("click", () => {

        modal.classList.add("active");

        modalVideo.src = video.querySelector("source").src;

        modalVideo.play();

    });

});

closeBtn.addEventListener("click", () => {

    modalVideo.pause();
    modalVideo.currentTime = 0;

    modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modalVideo.pause();
        modalVideo.currentTime = 0;

        modal.classList.remove("active");

    }

});

/* ==========================
BACKGROUND SLIDER
========================== */

const backgrounds = [

    "assets/images/Location_Screen/1.png",
    "assets/images/Location_Screen/2.png",
    "assets/images/Location_Screen/3.png",
    "assets/images/Location_Screen/4.png",
    "assets/images/Location_Screen/5.png",
    "assets/images/Location_Screen/6.png",
    "assets/images/Location_Screen/7.png",
    "assets/images/Location_Screen/8.png",
    "assets/images/Location_Screen/9.png",
    "assets/images/Location_Screen/10.png",
    "assets/images/Location_Screen/11.png"

];

const slides = document.querySelectorAll(".bg-slide");

let currentImage = 0;
let currentSlide = 0;

slides[0].style.backgroundImage = `url(${backgrounds[0]})`;

setInterval(() => {

    const nextSlide = (currentSlide + 1) % 2;

    currentImage = (currentImage + 1) % backgrounds.length;

    slides[nextSlide].style.backgroundImage =
        `url(${backgrounds[currentImage]})`;

    slides[nextSlide].classList.add("active");
    slides[currentSlide].classList.remove("active");

    currentSlide = nextSlide;

}, 5000);


const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(language) {

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[language][key]) {

            element.innerHTML = translations[language][key];

        }

    });

    langButtons.forEach(btn => btn.classList.remove("active"));

    document
        .querySelector(`[data-language="${language}"]`)
        .classList.add("active");

    localStorage.setItem("language", language);

}

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        setLanguage(button.dataset.language);

    });

});

const savedLanguage = localStorage.getItem("language") || "en";

setLanguage(savedLanguage);