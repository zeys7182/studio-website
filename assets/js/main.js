const translations = {

    en: {

        nav_services: "What We Do",
        nav_work: "Work",
        nav_contact: "Contact",

        hero_subtitle: "Creative Studio",
        hero_title: "High-end 3D & AI Motion Graphics",
        hero_title2: "for Games, Shows<br>and Digital Media",
        hero_desc: "We create cinematics, real-time experiences, VFX and interactive content for games, museums, exhibitions, LED installations and digital media.",
        hero_button: "View Work",

        services_title: "What We Do",
        services_desc: "From concept to final delivery, we produce cinematic-quality visuals, interactive experiences and real-time content for entertainment, culture and technology.",

        card1_title: "Cinematics & Trailers",
        card1_desc: "High-end cinematics, trailers and storytelling powered by Unreal Engine.",

        card2_title: "Motion Design",
        card2_desc: "Motion graphics for advertising, presentations, events and digital campaigns.",

        card3_title: "Museums & Interactive Experiences",
        card3_desc: "Immersive installations, museums and exhibition experiences with real-time technologies.",

        card4_title: "LED & Event Visuals",
        card4_desc: "Visual content for LED screens, concerts, shows and large-scale digital events.",

        card5_title: "Game Art Production",
        card5_desc: "Environment art, props, optimization and complete real-time production pipelines for Unreal Engine.",

        portfolio_title: "Selected Work",
        portfolio_desc: "A selection of our latest projects across cinematics, interactive experiences and digital productions.",

        cat_cinematics: "Cinematics",
        cat_led: "LED / Events / Cinema",
        cat_artists: "Music Artists",

        about_title: "About",
        about_desc: "We are a creative studio specializing in real-time graphics, cinematics, VFX and interactive experiences. Combining Unreal Engine expertise with modern AI tools, we create premium visual content for games, museums, exhibitions, brands and digital media.",

        about_heading: "We build cinematic-quality visuals that transform ideas into immersive digital experiences.",

        about_projects: "Projects",
        about_experience: "Years Experience",
        about_production: "Real-time Production",
        about_remote: "Worldwide Collaboration"

    },

    ru: {

        nav_services: "Услуги",
        nav_work: "Работы",
        nav_contact: "Контакты",

        hero_subtitle: "Креативная студия",
        hero_title: "Премиальная 3D и AI-графика",
        hero_title2: "для игр, шоу<br>и цифровых проектов",
        hero_desc: "Мы создаем синематики, VFX, интерактивные проекты и визуальный контент для игр, музеев, выставок, LED-экранов и цифровых медиа.",
        hero_button: "Наши работы",

        services_title: "Что мы создаем",
        services_desc: "От идеи до финального результата мы создаем кинематографичный визуальный контент, интерактивные проекты и решения в реальном времени для индустрии развлечений, культуры и технологий.",

        card1_title: "Синематики и трейлеры",
        card1_desc: "Кинематографичные ролики, игровые трейлеры и постановочные сцены на Unreal Engine.",

        card2_title: "Моушн-дизайн",
        card2_desc: "Анимационная графика для рекламы, презентаций, мероприятий и цифровых кампаний.",

        card3_title: "Музеи и интерактивные проекты",
        card3_desc: "Иммерсивные инсталляции, музейные экспозиции и выставочные пространства с использованием технологий реального времени.",

        card4_title: "LED и шоу-контент",
        card4_desc: "Визуальный контент для LED-экранов, концертов, шоу и масштабных мероприятий.",

        card5_title: "Game Art Production",
        card5_desc: "Создание окружения, пропсов, оптимизация и полный цикл производства контента для Unreal Engine.",

        portfolio_title: "Избранные проекты",
        portfolio_desc: "Подборка наших работ в области синематиков, интерактивных проектов и цифрового визуального производства.",

        cat_cinematics: "Синематики",
        cat_led: "LED / Шоу / Кино",
        cat_artists: "Музыкальные проекты",

        about_title: "О студии",
        about_desc: "Мы — креативная студия, специализирующаяся на графике реального времени, синематиках, VFX и интерактивных проектах. Объединяя экспертизу Unreal Engine и современные AI-инструменты, мы создаем визуальный контент премиального уровня для игр, музеев, выставок, брендов и цифровых медиа.",

        about_heading: "Мы превращаем идеи в кинематографичный визуальный опыт, объединяя технологии, искусство и интерактивность.",

        about_projects: "Проектов",
        about_experience: "Лет опыта",
        about_production: "Производство в реальном времени",
        about_remote: "Международное сотрудничество"

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