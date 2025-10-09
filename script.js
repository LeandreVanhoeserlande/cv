console.log("Script chargé ✅");

/* ----------------- Petite animation skills d'origine ----------------- */
document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener(
    "mouseenter",
    () => (skill.style.transform = "scale(1.05)")
  );
  skill.addEventListener(
    "mouseleave",
    () => (skill.style.transform = "scale(1)")
  );
}); 

/* ----------------- Modal projet / timeline ----------------- */
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");
if (modalClose) modalClose.addEventListener("click", closeModal);
if (modal)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

function openModal(html) {
  if (!modal) return;
  modalBody.innerHTML = html;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  if (!modal) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

/* Timeline: ouvrir contenu détaillé selon data-id */
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.dataset.id;
    // contenu minimal — personnalise si tu veux images réelles
    const content = getProjectContent(id);
    openModal(content);
  });
});

function getProjectContent(id) {
  const projects = {
    p1: {
      title: "Site Frontend — HTML/CSS (2022)",
      date: "2022",
      desc: "Création d'un site frontend simple en HTML/CSS dans le cadre du lycée (terminal).",
      imgs: ["img/project-site-2022-1.jpg"],
    },
    p2: {
      title: "Site Frontend — HTML/CSS/JS (2023)",
      date: "2023",
      desc: "Site plus complet avec interactions JS : formulaire, animations, responsive.",
      imgs: ["img/project-site-2023-1.jpg", "img/project-site-2023-2.jpg"],
    },
    p3: {
      title: "Small Enterprise Network (Packet Tracer)",
      date: "2023",
      desc: "Conception et simulation d'un réseau d'entreprise (VLANs, routage, sécurité).",
      imgs: ["img/packettracer1.png"],
    },
    p4: {
      title: "Mini HTTP server en C",
      date: "2023",
      desc: "Mini-serveur HTTP écris en C pour comprendre sockets et protocole.",
      imgs: [],
    },
    p5: {
      title: "Détection MITM & règle IDS",
      date: "2024",
      desc: "Expérience en détection d'attaque MITM et mise en place de règles IDS.",
      imgs: [],
    },
    p6: {
      title: "Gestionnaire de tâches (Python GUI)",
      date: "2024",
      desc: "Application desktop en Python avec interface graphique pour gérer tâches.",
      imgs: ["img/python-app.png"],
    },
  };
  const p = projects[id];
  if (!p) return "<p>Projet non trouvé.</p>";
  let html = `<h2>${p.title}</h2><p><strong>${p.date}</strong></p><p>${p.desc}</p>`;
  if (p.imgs && p.imgs.length) {
    html +=
      `<div class="project-images">` +
      p.imgs
        .map(
          (src) =>
            `<img src="${src}" alt="${p.title}" style="max-width:100%;margin-top:8px;border-radius:6px">`
        )
        .join("") +
      `</div>`;
  }
  return html;
}

/* ----------------- Skills panel (clic sur compétence) ----------------- */
const skillPanel = document.getElementById("skill-panel");
const panelTitle = document.getElementById("skill-panel-title");
const panelDesc = document.getElementById("skill-panel-desc");
const panelProjects = document.getElementById("skill-panel-projects");

document.querySelectorAll(".skill[data-lang]").forEach((s) => {
  s.addEventListener("click", () => {
    const title = s.dataset.lang || "Compétence";
    const desc = s.dataset.desc || "Description non définie.";
    const projects = JSON.parse(s.dataset.projects || "[]");
    if (panelTitle) panelTitle.textContent = title;
    if (panelDesc) panelDesc.textContent = desc;
    if (panelProjects) {
      panelProjects.innerHTML = "";
      if (projects.length === 0)
        panelProjects.innerHTML = "<li>Aucun projet lié pour l'instant.</li>";
      else
        projects.forEach((pr) => {
          const li = document.createElement("li");
          li.textContent = pr;
          panelProjects.appendChild(li);
        });
    }
    if (skillPanel) skillPanel.classList.remove("hidden");
  });
});

/* ----------------- Chart compétences (index/informatique) ----------------- */
function createSkillChart() {
  const ctx = document.getElementById("skillChart");
  if (!ctx) return;
  const labels = ["Python", "HTML/CSS", "JavaScript", "C", "SQL", "Réseau"];
  const data = [85, 80, 60, 55, 45, 60];
  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Niveau (%)",
          data,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 100 },
      },
      plugins: { legend: { display: false } },
    },
  });
}
createSkillChart();

/* ----------------- Carte : points cliquables + popup ----------------- */
document.querySelectorAll(".map-point").forEach((pt) => {
  pt.addEventListener("click", (e) => {
    const title = pt.dataset.title || "Lieu";
    const date = pt.dataset.date || "";
    const img = pt.dataset.img || "img/placeholder-travel.jpg";
    const popup = document.getElementById("map-popup");
    if (!popup) return;
    document.getElementById("map-popup-title").textContent = title;
    document.getElementById("map-popup-date").textContent = date;
    document.getElementById("map-popup-img").src = img;
    popup.classList.remove("hidden");
    popup.style.left = e.clientX + 10 + "px";
    popup.style.top = e.clientY - 40 + "px";
    popup.setAttribute("aria-hidden", "false");
  });
});
const mapClose = document.getElementById("map-popup-close");
if (mapClose)
  mapClose.addEventListener("click", () => {
    const popup = document.getElementById("map-popup");
    if (popup) {
      popup.classList.add("hidden");
      popup.setAttribute("aria-hidden", "true");
    }
  });

/* ----------------- Carousel Sport simple ----------------- */
const prevBtn = document.getElementById("sport-prev");
const nextBtn = document.getElementById("sport-next");
const track = document.getElementById("sport-track");
if (prevBtn && nextBtn && track) {
  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -620, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: 620, behavior: "smooth" });
  });
}

/* ----------------- Accessibilité : fermer modal avec Escape ----------------- */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    const popup = document.getElementById("map-popup");
    if (popup) {
      popup.classList.add("hidden");
      popup.setAttribute("aria-hidden", "true");
    }
  }
});

