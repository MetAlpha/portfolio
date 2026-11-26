const projectsData = {
    "laravel-sae": {
        type: "BUT 2 Case Study - University Team Project",
        title: "Full-Stack Web Application (SAÉ 3.01)",
        date: "October 2026 - Ongoing",
        image: "images/projet-laravel.png",
        context: "As part of my second year of BUT Informatique at IUT Annecy, our team was tasked with designing and building a complete dynamic web application following strict client specifications and legal constraints.",
        role: "I participated in UML modeling, designed and implemented the PostgreSQL relational database, developed features using Laravel, JavaScript, and HTML/CSS, and worked on implementing GDPR compliance.",
        org: "Team project organized with regular sprint reviews, shared Git repository, and task tracking following Agile principles.",
        tech: ["Laravel", "PHP", "JavaScript", "HTML/CSS", "PostgreSQL", "UML", "GDPR"],
        link: "https://github.com/"
    },
    "wpf-redesign": {
        type: "University Team Project",
        title: "Desktop Application Redesign",
        date: "May - June 2026",
        image: "images/projet-wpf.png",
        context: "First-year university project focused on modernizing and redesigning an existing software application with a cleaner interface and a structured database backend.",
        role: "I designed the database schema and developed both the user interface and application features using C# and WPF.",
        org: "Collaborative student team project with milestone deadlines and technical specifications.",
        tech: ["C#", "WPF", "SQL", "PostgreSQL"],
        link: "https://github.com/"
    },
    "video-game": {
        type: "University Project",
        title: "Video Game Development",
        date: "December 2025",
        image: "images/projet-jeu.png",
        context: "University project aimed at creating a complete playable video game from scratch while applying object-oriented programming concepts.",
        role: "I programmed core gameplay features and created custom textures and visual assets for the game.",
        org: "Structured around short development iterations and functional testing.",
        tech: ["C#", "WPF", "Game Design", "Textures"],
        link: "https://github.com/"
    },
    "portfolio-site": {
        type: "University - Individual Project",
        title: "Personal Portfolio Website",
        date: "November 2026",
        image: "images/projet-portfolio.png",
        context: "Developed for the Professional English course (R3.12) at IUT Annecy to present my resume, skills, and IT projects online to recruiters without using any CMS or backend framework.",
        role: "I designed the layout, wrote all the content in professional English, and coded the responsive structure, project filters, and detail pop-up modals.",
        org: "Individual project deployed on the IUT OVH server.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: ""
    }
};

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

const navAnchors = navLinks.querySelectorAll("a");
for (let i = 0; i < navAnchors.length; i++) {
    navAnchors[i].addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
}

const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
        for (let j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove("active");
        }
        this.classList.add("active");

        const selectedFilter = this.getAttribute("data-filter");

        for (let k = 0; k < projectCards.length; k++) {
            const cardTech = projectCards[k].getAttribute("data-tech");
            if (selectedFilter === "all" || cardTech.indexOf(selectedFilter) !== -1) {
                projectCards[k].style.display = "flex";
            } else {
                projectCards[k].style.display = "none";
            }
        }
    });
}

const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const openModalBtns = document.querySelectorAll(".open-modal-btn");

const modalType = document.getElementById("modal-type");
const modalTitle = document.getElementById("modal-title");
const modalDate = document.getElementById("modal-date");
const modalImg = document.getElementById("modal-img");
const modalContext = document.getElementById("modal-context");
const modalRole = document.getElementById("modal-role");
const modalOrg = document.getElementById("modal-org");
const modalTech = document.getElementById("modal-tech");
const modalLinkWrap = document.getElementById("modal-link-wrap");
const modalLink = document.getElementById("modal-link");

for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener("click", function () {
        const projectId = this.getAttribute("data-project");
        const data = projectsData[projectId];

        if (!data) {
            return;
        }

        modalType.textContent = data.type;
        modalTitle.textContent = data.title;
        modalDate.textContent = data.date;
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalContext.textContent = data.context;
        modalRole.textContent = data.role;
        modalOrg.textContent = data.org;

        modalTech.innerHTML = "";
        for (let j = 0; j < data.tech.length; j++) {
            const tag = document.createElement("span");
            tag.textContent = data.tech[j];
            modalTech.appendChild(tag);
        }

        if (data.link && data.link !== "") {
            modalLink.href = data.link;
            modalLinkWrap.style.display = "block";
        } else {
            modalLinkWrap.style.display = "none";
        }

        modal.classList.add("open");
    });
}

closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("open");
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("open");
    }
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
    window.location.href = "mailto:adrien.metral-boffod@etu.univ-smb.fr?subject=" + subject + "&body=" + body;

    formStatus.textContent = "Your email client has been opened to send your message.";
    contactForm.reset();
});