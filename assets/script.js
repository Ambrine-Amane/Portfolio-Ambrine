// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add("in"); io.unobserve(entry.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Interactive tilt on the photo card (follows the cursor, snaps back on leave)
const photoCard = document.querySelector(".photo-card");
if(photoCard){
  const maxTilt = 10;
  photoCard.addEventListener("mousemove", (e) => {
    const rect = photoCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - y) * maxTilt * 2;
    photoCard.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });
  photoCard.addEventListener("mouseleave", () => {
    photoCard.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
}

// Compétences tabs (used on competences.html)
const competences = [
  {
    id: "marketing",
    tab: "Marketing",
    title: "Conduire les actions marketing",
    intro: "Compétence évaluée à travers le portfolio du semestre 6.",
    essentials: [
      "Analyser les contextes économiques, juridiques, commerciaux et financiers",
      "Évaluer les principaux acteurs de l'offre",
      "Quantifier la demande et apprécier le comportement du consommateur",
      "Analyser les ressources et compétences de l'entreprise",
      "Élaborer un mix adapté à la cible et positionné par rapport aux concurrents",
      "Adopter une posture citoyenne, éthique et écologique"
    ],
    criticalLearnings: [
      "Mettre en place des outils de veille pour anticiper les évolutions de l'environnement",
      "Élaborer une stratégie marketing dans un environnement instable",
      "Faire évoluer l'offre à l'aide de leviers de création de valeur",
      "Intégrer la RSE dans la stratégie de l'offre"
    ],
    traces: ["SAE Semestre 5", "TD ressources marketing", "Stage / alternance BUT3"]
  },
  {
    id: "vente",
    tab: "Vente",
    title: "Vendre une offre commerciale",
    intro: "Compétence évaluée à travers les semestres 5 et 6.",
    essentials: [
      "Respecter l'ordre des étapes de la négociation commerciale et une démarche éthique",
      "Élaborer des documents commerciaux adaptés dans le respect de la réglementation",
      "Utiliser efficacement des indicateurs de performance fixés par l'organisation",
      "Prospecter à l'aide d'outils adaptés",
      "Adapter sa communication verbale et non verbale à la situation commerciale"
    ],
    criticalLearnings: [
      "Identifier les techniques d'achat employées par un acheteur professionnel",
      "Élaborer des outils de gestion et de calcul efficaces (facture, échéancier, devis) pour la vente complexe",
      "Maîtriser les codes propres à l'univers spécifique rencontré"
    ],
    traces: ["Oral de négociation", "Stage BUT3", "Jeu Négociales"]
  },
  {
    id: "relation-client",
    tab: "Relation client",
    title: "Manager la relation client",
    intro: "Compétence évaluée sur les semestres 5 et 6.",
    essentials: [
      "Développer une culture partagée de service client",
      "Piloter la satisfaction et l'expérience client dans une perspective durable",
      "Valoriser le portefeuille client par l'exploitation des données dans le respect de la réglementation"
    ],
    criticalLearnings: [
      "Asseoir la réussite de la relation client sur la cohérence globale de l'organisation (outils, processus, communication, structure)",
      "Optimiser l'expérience client par un processus d'amélioration continue",
      "Contribuer à la diffusion de la culture client au sein de l'organisation",
      "Faire évoluer les outils de la relation client"
    ],
    traces: ["Utilisation Salesforce en rayon", "Suivi satisfaction client BUT Cabriès", "Stage BUT3"]
  },
  {
    id: "strategie",
    tab: "Stratégie",
    title: "Participer à la stratégie marketing et commerciale de l'organisation",
    intro: "Compétence évaluée sur les semestres 5 et 6.",
    essentials: [
      "Identifier les opportunités de développement les plus porteuses",
      "Manager efficacement les équipes commerciales",
      "Élaborer une offre adaptée au contexte sectoriel du client"
    ],
    criticalLearnings: [
      "Mettre en œuvre la stratégie marketing et commerciale au sein de l'équipe",
      "Fédérer les équipes autour de la réussite des objectifs marketing et commerciaux",
      "Co-construire une offre en collaboration avec les parties prenantes (externes et internes)"
    ],
    traces: ["Jeu Bankéo", "Jeu Ariane", "SAE stratégie commerciale"]
  },
  {
    id: "espace-vente",
    tab: "Espace de vente",
    title: "Piloter un espace de vente",
    intro: "Compétence évaluée sur les semestres 5 et 6.",
    essentials: [
      "Appréhender l'environnement commercial pour en dégager les spécificités",
      "Développer l'attractivité commerciale de l'espace de vente pour optimiser les indicateurs commerciaux",
      "Enrichir l'expérience client par la mesure de la satisfaction client"
    ],
    criticalLearnings: [
      "Comprendre les enjeux de la distribution et les évolutions du secteur",
      "Élaborer une stratégie commerciale en cohérence avec l'environnement concurrentiel",
      "Implanter un plan de merchandising défini par le réseau ou l'équipe de vente",
      "Optimiser les outils de GRC et le parcours client dans une approche omnicanale"
    ],
    traces: ["Gestion du rayon Petit Meuble", "Décisions d'implantation, rayon Électroménager", "Ajustement des niveaux de stock"]
  },
  {
    id: "equipe",
    tab: "Équipe",
    title: "Manager une équipe commerciale sur un espace de vente",
    intro: "Compétence évaluée sur les semestres 5 et 6.",
    essentials: [
      "Veiller à l'atteinte des objectifs commerciaux par l'équipe",
      "Animer l'équipe commerciale par la valorisation des compétences",
      "Favoriser l'adhésion à la culture d'entreprise par la transmission des valeurs et des pratiques"
    ],
    criticalLearnings: [
      "Fixer les objectifs en accord avec la méthode SMART",
      "Fédérer les équipes autour de l'atteinte des objectifs",
      "Sélectionner et intégrer les collaborateurs selon les besoins de l'équipe",
      "Valoriser les compétences des membres de l'équipe"
    ],
    traces: ["Coordination des flux entrants avec le dépôt", "Inventaires tournants et inventaire annuel", "Stage BUT3"]
  }
];

const tabsEl = document.getElementById("tabs");
const panelsEl = document.getElementById("panels");

if(tabsEl && panelsEl){
  const hash = window.location.hash.replace("#", "");
  competences.forEach((c, i) => {
    const isDefault = hash ? c.id === hash : i === 0;
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (isDefault ? " active" : "");
    btn.textContent = c.tab;
    btn.dataset.target = c.id;
    btn.addEventListener("click", () => showPanel(c.id));
    tabsEl.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "comp-panel" + (isDefault ? " active" : "");
    panel.id = "panel-" + c.id;
    panel.innerHTML = `
      <div class="comp-head">
        <h3>${c.title}</h3>
        <p>${c.intro}</p>
      </div>
      <div class="ce-grid">
        ${c.essentials.map(e => `
          <div class="ce-item">
            <div class="ce-label">${e}</div>
            <div class="level">
              <span>Non</span><span>Peu</span><span class="set">Assez</span><span>Bien</span>
            </div>
          </div>`).join("")}
      </div>
      <div class="traces">
        <h4>Apprentissages critiques mobilisés</h4>
        ${c.criticalLearnings.map(a => `<div class="trace-slot"><b>${a}</b></div>`).join("")}
      </div>
      <div class="traces">
        <h4>Traces à venir</h4>
        ${c.traces.map(t => `<div class="trace-slot">${t} : <em>à compléter (photos, captures, chiffres, annexes)</em></div>`).join("")}
      </div>
      <p class="autocritique">Autocritique : dans quel autre contexte devrais-je adapter cette compétence ? Quelles ressources me manquent encore ? À rédiger.</p>
    `;
    panelsEl.appendChild(panel);
  });

  function showPanel(id){
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.target === id));
    document.querySelectorAll(".comp-panel").forEach(p => p.classList.toggle("active", p.id === "panel-" + id));
    history.replaceState(null, "", "#" + id);
  }
}

// À propos: chapter reveal + sticky nav progress (used on a-propos.html)
const chapters = document.querySelectorAll(".chapter");
if(chapters.length){
  const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("in"); } });
  }, { threshold: 0.2 });
  chapters.forEach(c => chapterObserver.observe(c));

  const storyNavItems = document.querySelectorAll(".story-nav li");
  const storyFill = document.getElementById("storyFill");
  if(storyNavItems.length){
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const id = entry.target.id.replace("chapter-", "");
          storyNavItems.forEach(li => li.classList.toggle("active", li.dataset.chapter === id));
          const idx = Array.from(chapters).indexOf(entry.target);
          if(storyFill){ storyFill.style.height = ((idx + 1) / chapters.length * 100) + "%"; }
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    chapters.forEach(c => activeObserver.observe(c));
  }
}
