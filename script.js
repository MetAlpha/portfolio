const starsBg = document.getElementById("stars-bg");

if (starsBg) {
    for (let i = 0; i < 110; i++) {
        const star = document.createElement("div");
        star.className = "bg-star";

        const size = Math.random() * 2.2 + 1;
        const duration = Math.random() * 70 + 45;
        const delay = -(Math.random() * duration);

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.top = "105%";
        star.style.left = Math.random() * 100 + "%";
        star.style.opacity = (Math.random() * 0.7 + 0.2).toFixed(2);
        star.style.animationDuration = duration + "s";
        star.style.animationDelay = delay + "s";

        starsBg.appendChild(star);
    }
}

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

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
        role: "I designed the night-sky Leo constellation layout, wrote all the content in professional English, and coded the multi-page structure, project filters, animated starfield, and detail modals.",
        org: "Individual project deployed on the IUT OVH server.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: ""
    }
};

const filterBtns = document.querySelectorAll(".filter-btn");
const constellationNodes = document.querySelectorAll(".constellation-node");

if (filterBtns.length > 0 && constellationNodes.length > 0) {
    for (let i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener("click", function () {
            for (let j = 0; j < filterBtns.length; j++) {
                filterBtns[j].classList.remove("active");
            }
            this.classList.add("active");

            const selectedFilter = this.getAttribute("data-filter");

            for (let k = 0; k < constellationNodes.length; k++) {
                const nodeTech = constellationNodes[k].getAttribute("data-tech");
                if (selectedFilter === "all" || nodeTech.indexOf(selectedFilter) !== -1) {
                    constellationNodes[k].style.display = "flex";
                } else {
                    constellationNodes[k].style.display = "none";
                }
            }
        });
    }
}

const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal");
const openModalBtns = document.querySelectorAll(".open-modal-btn");

if (modal && openModalBtns.length > 0) {
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
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
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
}