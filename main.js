document.querySelectorAll('.upper a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // запускається один раз
        }
    });
}, { threshold: 0.2 }); // 20% елемента має бути видно

reveals.forEach(reveal => {
    observer.observe(reveal);
});

// document.body.style.overflow = "hidden";

let photos = ["images/SE1.jpg", "images/SE2.jpg", "images/SE3.jpg", "images/SE4.jpg", "images/SE5.jpg", "images/SE6.jpg", "images/SE.png"];
let index = -1;

function nextImage(){
    index = (index + 1) % photos.length;
    document.getElementById("Eclipse").src = photos[index];
}

let photos1 = ["images/LA1.jpg", "images/LA2.jpg", "images/LA3.jpg", "images/LA4.jpg", "images/LA5.jpg", "images/LA6.jpg", "images/SAL.png"];
let index1 = -1;

function nextImage1(){
    index1 = (index1 + 1) % photos1.length;
    document.getElementById("Lama").src = photos1[index1];
}

let photosPacMan = ["images/PC1.png", "images/PC2.png", "images/PC3.png", "images/PC4.png", "images/PC5.png", "images/PacMan.png"];
let indexPacMan = -1;

function nextImagePacMan(){
    indexPacMan = (indexPacMan + 1) % photosPacMan.length;
    document.getElementById("PacMan").src = photosPacMan[indexPacMan];
}

let photosBrainForge = ["images/img_2.png", "images/img_3.png", "images/img_4.png", "images/img_5.png", "images/img_6.png", "images/img_7.png", "images/img_8.png", "images/img_9.png", "images/img_10.png", "images/img_1.png"];
let indexBrainForge = -1;

function nextImageBrainForge(){
    indexBrainForge = (indexBrainForge + 1) % photosBrainForge.length;
    document.getElementById("BrainForge").src = photosBrainForge[indexBrainForge];
}

let photosTimer = ["images/timer1.png", "images/timer2.png", "images/timer3.png", "images/timer.png"];
let indexTimer = -1;

function nextImageTimer(){
    indexTimer = (indexTimer + 1) % photosTimer.length;
    document.getElementById("SmartClock").src = photosTimer[indexTimer];
}

window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
});

const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");

langToggle.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation(); // щоб клік не пішов далі на document
    if (window.getComputedStyle(langMenu).display === "none") {
        langMenu.style.display = "block";
    } else {
        langMenu.style.display = "none";
    }
});

document.addEventListener("click", function(event) {
    if (!langMenu.contains(event.target) && event.target !== langToggle) {
        langMenu.style.display = "none";
    }
});

const translations = {
    en: {
        upper_1: "About me",
        upper_2: "Skills",
        upper_3: "Projects",
        upper_4: "Contacts",
        about_title: "Hello, I'm Yevhenii 👋",
        about_text: "Welcome to my personal website. I am a 3rd-year student at TUKE in Košice, Slovakia, passionate about programming and backend development. I enjoy writing code in Java and building applications using Spring Boot. I also have experience designing efficient databases with PostgreSQL and integrating them into projects.",
        about_text1: "My goal is to become a professional developer and work on innovative projects. Feel free to explore my portfolio and get in touch if you are interested in collaboration!",
        skills_title: "My Skills",
        skills_intro: "Over the past years, I have gained experience with different programming languages and technologies. \n" +
            "    My main focus is on Java, where I enjoy building applications and exploring backend development. \n" +
            "    I also worked with C, which helps me better understand low-level programming and problem solving. \n" +
            "    For web applications, I use Spring Boot together with PostgreSQL to create efficient and scalable backend systems. \n" +
            "    On the frontend side, I am confident with HTML5, CSS3, and JavaScript to build responsive and modern user interfaces.",
        projects_title: "Projects",
        project_text_1: "\"Alien Fighter\" is a 2D adventure where the player controls Ellen Ripley from the Alien movie series, exploring and progressing through an abandoned space station infested with aliens. The game features a combat system, a resource collection system, and gradual usage of resources. The main goal is to survive while eliminating as many aliens as possible along the way.",
        project_text_2: "\"Slide-a-Lama\" is a dynamic arcade puzzle where players combine tiles to score as many points as possible. Simple mechanics and fast-paced gameplay make it engaging and competitive. With each new level, additional challenges and strategic opportunities appear.",
        project_text_3: "\"Solar Eclipse\" is a logic game with a Sun and Moon theme. Players must turn light tiles on and off to achieve complete harmony between light and shadow. As levels progress, tasks become more challenging, requiring focus and strategic thinking.",
        project_text_4: "\"Pac-Man\" is a classic arcade game where the player controls a character that collects all dots on the level while avoiding ghosts. The goal is to clear the maze and score as many points as possible using strategy and quick reflexes. As levels advance, speed and difficulty increase, making the game more engaging.",
        project_text_5: "\"BrainForge\" is an interactive educational web platform designed to teach programming through practical tasks and code analysis. Users solve problems of varying difficulty, write their own solutions, and receive immediate feedback. The platform helps develop logical thinking, analytical skills, and a structured approach to problem-solving.",
        project_text_6: "\"Simple Timer\" is a simple desktop application that allows users to set a timer for a specified time interval. The application features an intuitive user interface and is suitable for time tracking during study, work, and everyday tasks.",
        tec: "Technologies used: Java, Spring Boot, PostgreSQL, Docker, ChatGPT API, Thymleaf, HTML, CSS, JavaScript.",
        tec1: "Technologies used: Java.",
        contact_title: "Contact",
        contact_email: "Email: yourname@example.com",
        contact_github: "GitHub: github.com/yourname",
        tecGame: "Technologies used: C++ and Unity.",
        project_text_7: "An atmospheric first-person horror adventure in which the player explores an isolated area, collects key items (a wheel, tools, a hammer), interacts with objects in the environment, and gradually regains the ability to escape while evading pursuers and reacting nervously to audio cues, with multiple endings depending on the player’s actions."
    },


    ua: {
        tecGame: "Використані технології: C++ та Unity.",
        project_text_7: "Атмосферна хоррор-пригода від першої особи, в якій гравець досліджує віддалену місцевість, збирає ключові предмети (колесо, інструменти, молоток), взаємодіє з об’єктами в оточенні та поступово відновлює здатність до втечі, уникаючи переслідувачів і нервово реагуючи на звукові сигнали; гра пропонує кілька варіантів фіналу залежно від дій гравця.",
        upper_1: "Про мене",
        upper_2: "Навички",
        upper_3: "Проєкти",
        upper_4: "Контактна інформація",
        about_title: "Привіт, я Євгеній 👋",
        about_text: "Ласкаво прошу на мій особистий веб-сайт. Я студент 3-го курсу ТУКЕ в Кошице, Словаччина, захоплююся програмуванням та розробкою бекенду. Мені подобається писати код на Java та створювати додатки за допомогою Spring Boot. Також маю досвід роботи з проектуванням ефективних баз даних за допомогою PostgreSQL та підключенням їх до проєкту.",
        about_text1: "Моя мета — стати професійним розробником і працювати над інноваційними проєктами. Запрошую вас ознайомитися з моїм портфоліо та зв’язатися зі мною, якщо ви зацікавлені у співпраці!",
        skills_title: "Мої навички",
        skills_intro: "За останні роки я набув досвіду роботи з різними мовами програмування та технологіями. Мій основний напрямок — Java, де я із задоволенням створюю застосунки та досліджую бекенд-розробку. Також я працював із C, що допомагає краще розуміти низькорівневе програмування та розв’язання задач. Для вебзастосунків я використовую Spring Boot разом із PostgreSQL, щоб створювати ефективні й масштабовані бекенд-системи. На фронтенді я впевнено працюю з HTML5, CSS3 та JavaScript для розробки адаптивних і сучасних інтерфейсів.",
        projects_title: "Проєкти",
        project_text_1: "\"Alien Fighter\" - це 2D пригода, де гравець керує персонажем Ellen Ripley з серії фільмів \"Чужий\", досліджуючи та просуваючись вглиб занедбаної космічної станції що кишить прибульцями. Гра містить бойову систему, систему збору ресурсів та поступового їх використання. Основна ціль - врятуватись, паралельно вбивши якомога більше прибульців на шляху.  ",
        project_text_2: "\"Slide-a-Lama\" — це динамічна аркадна головоломка, де потрібно поєднувати плитки та набирати максимальну кількість балів. Прості механіки та швидкий темп роблять гру захопливою і змагальною. З кожним новим рівнем з’являються додаткові виклики та можливості для стратегії.",
        project_text_3: "\"Solar Eclipse\" — це логічна гра за тематикою Сонця та Місяця. Гравцеві потрібно вимикати й вмикати світлі плитки, щоб досягти повної гармонії між світлом і тінню. З кожним рівнем завдання стають складнішими, вимагаючи уважності та стратегічного мислення.",
        project_text_4: "\"Pac-Man\" — класична аркадна гра, де гравець керує персонажем, який збирає всі точки на рівні, уникаючи привидів. Мета — очистити лабіринт і набрати максимальну кількість балів, використовуючи стратегію та швидку реакцію. Зі зростанням рівнів швидкість і складність збільшуються, роблячи гру більш захопливою.",
        project_text_5: "\"BrainForge\" — це інтерактивна навчальна вебплатформа для вивчення програмування через практичні завдання та аналіз помилок у коді. Користувачі розв’язують задачі різного рівня складності, пишуть власні рішення та одразу отримують результат. Платформа сприяє розвитку логічного мислення, аналітичних навичок і системного підходу до розв’язання задач.",
        project_text_6: "\"Simple Timer\" — це простий десктопний застосунок, який дозволяє користувачеві встановлювати таймер на заданий проміжок часу. Програма має інтуїтивний інтерфейс і підходить для відліку часу під час навчання, роботи та повсякденних завдань.",
        tec: "Технології що були використані: Java, Spring Boot, PostgreSQL, Docker, ChatGPT API, Thymleaf, HTML, CSS, JavaScript.",
        tec1: "Технології що були використані: Java.",
        contact_title: "Контакти",
        contact_email: "Ел. пошта: yourname@example.com",
        contact_github: "GitHub: github.com/yourname"
    },
    sk: {
        tecGame: "Použité technológie: C++ a Unity.",
        project_text_7: "Atmosférická hororová adventúra z pohľadu prvej osoby, v ktorej hráč preskúmava odľahlú oblasť, zbiera kľúčové predmety (koleso, náradie, kladivo), interaguje s objektmi v prostredí a postupne znovu získava schopnosť uniknúť, pričom sa vyhýba prenasledovateľom a nervózne reaguje na zvukové signály; hra ponúka viacero zakončení v závislosti od hráčových činov.",
        upper_1: "O mne",
        upper_2: "Schopnosti",
        upper_3: "Projekty",
        upper_4: "Kontakty",
        about_title: "Ahoj, som Yevhenii 👋",
        about_text: "Vitajte na mojej osobnej webovej stránke. Som študent 3. ročníka na TUKE v Košiciach, Slovensko, a zaujímam sa o programovanie a vývoj backendu. Rád píšem kód v Java a vytváram aplikácie pomocou Spring Boot. Mám tiež skúsenosti s návrhom efektívnych databáz v PostgreSQL a ich integráciou do projektov.",
        about_text1: "Mojím cieľom je stať sa profesionálnym vývojárom a pracovať na inovatívnych projektoch. Pozývam vás, aby ste si prezreli moje portfólio a kontaktovali ma, ak máte záujem o spoluprácu!",
        skills_title: "Moje zručnosti",
        skills_intro: "Počas uplynulých rokov som získal skúsenosti s rôznymi programovacími jazykmi a technológiami. Mojím hlavným zameraním je Java, kde rád vytváram aplikácie a skúmam vývoj backendu. Pracoval som aj s jazykom C, čo mi pomáha lepšie porozumieť nízkoúrovňovému programovaniu a riešeniu problémov. Pri webových aplikáciách používam Spring Boot spolu s PostgreSQL na tvorbu efektívnych a škálovateľných backend systémov. Na frontende sebavedomo pracujem s HTML5, CSS3 a JavaScriptom na tvorbu responzívnych a moderných používateľských rozhraní.",
        projects_title: "Projekty",
        project_text_1: "\"Alien Fighter\" je 2D dobrodružná hra, kde hráč ovláda Ellen Ripley zo série filmov Alien, preskúmava a postupuje v opustenej vesmírnej stanici plnej mimozemšťanov. Hra obsahuje bojový systém, systém zbierania zdrojov a ich postupné využívanie. Hlavným cieľom je prežiť a zároveň eliminovať čo najviac mimozemšťanov po ceste.",
        project_text_2: "\"Slide-a-Lama\" je dynamická arkádová logická hra, kde hráči kombinujú dlaždice, aby získali čo najviac bodov. Jednoduché mechaniky a rýchle tempo robia hru pútavou a súťažnou. S každou novou úrovňou sa objavujú ďalšie výzvy a strategické možnosti.",
        project_text_3: "\"Solar Eclipse\" je logická hra s témou Slnka a Mesiaca. Hráči musia zapínať a vypínať svetelné dlaždice, aby dosiahli úplnú harmóniu medzi svetlom a tieňom. S postupom úrovní sa úlohy stávajú náročnejšími, vyžadujúcimi sústredenie a strategické myslenie.",
        project_text_4: "\"Pac-Man\" je klasická arkádová hra, kde hráč ovláda postavu, ktorá zbiera všetky bodky na úrovni a vyhýba sa duchom. Cieľom je vyčistiť bludisko a získať čo najviac bodov pomocou stratégie a rýchlych reflexov. S postupom úrovní sa zvyšuje rýchlosť a náročnosť, čo robí hru ešte zábavnejšou.",        contact_title: "Kontakty",
        project_text_5: "\"BrainForge\" je interaktívna vzdelávacia webová platforma zameraná na výučbu programovania prostredníctvom praktických úloh a analýzy kódu. Používatelia riešia úlohy rôznej obtiažnosti, vytvárajú vlastné riešenia a získavajú okamžitú spätnú väzbu. Platforma podporuje rozvoj logického myslenia, analytických schopností a systematického riešenia problémov.",
        project_text_6: "\"Simple Timer\" je jednoduchá desktopová aplikácia, ktorá umožňuje používateľovi nastaviť časovač na zvolený časový interval. Aplikácia má intuitívne používateľské rozhranie a je vhodná na meranie času pri štúdiu, práci a každodenných úlohách.",
        tec: "Použité technológie: Java, Spring Boot, PostgreSQL, Docker, ChatGPT API, Thymleaf, HTML, CSS, JavaScript.",
        tec1: "Použité technológie: Java.",
        contact_email: "Email: yourname@example.com",
        contact_github: "GitHub: github.com/yourname"
    }
};

document.getElementById("ukraine").addEventListener("click", function(e){
    e.preventDefault();
    setLanguage("ua");
});
document.getElementById("america").addEventListener("click", function(e){
    e.preventDefault();
    setLanguage("en");
});
document.getElementById("slovakia").addEventListener("click", function(e){
    e.preventDefault();
    setLanguage("sk");
});

window.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLanguage(savedLang);
});

const langToggleImage = document.querySelector("#lang-toggle img");

function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    if(lang === "ua"){
        langToggleImage.src = "images/Flag_of_Ukraine.svg";
        langToggleImage.alt = "UA";
    }else if(lang === "en"){
        langToggleImage.src = "images/Flag_of_the_U.S..svg.png";
        langToggleImage.alt = "US";
    }else if(lang === "sk"){
        langToggleImage.src = "images/Flag_of_Slovakia.svg.png";
        langToggleImage.alt = "SK";
    }

    localStorage.setItem("lang", lang);
}

function showDate() {
    const now = new Date();
    const formatted = now.toLocaleDateString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    document.getElementById("current-date").textContent = formatted;
}
window.addEventListener("DOMContentLoaded", showDate);
