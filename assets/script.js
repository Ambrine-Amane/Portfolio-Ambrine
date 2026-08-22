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
    traceEntries: [
      {
        ce: "Analyser les ressources et compétences de l'entreprise",
        ac: "Élaborer une stratégie marketing dans un environnement instable",
        title: "Business Game — Groupe Rouge",
        comment: "Pendant le Business Game, notre stratégie a évolué au fil des résultats obtenus. À chaque tour, nous analysions nos performances avant de décider ce qu'il fallait maintenir ou modifier. J'ai ainsi appris à ne pas rester sur une stratégie fixe et à m'adapter aux résultats."
      },
      {
        ce: "Élaborer un mix adapté à la cible et positionné par rapport aux concurrents",
        ac: "Faire évoluer l'offre à l'aide de leviers de création de valeur",
        title: "Epi-IUT, adaptation de l'offre",
        comment: "Avec Epi-IUT, nous devions proposer une offre qui corresponde réellement aux besoins des étudiants. Le suivi des produits, des besoins et des approvisionnements nous permettait d'ajuster ce qui était proposé dans l'épicerie et de rendre l'offre plus adaptée."
      },
      {
        ce: "Adopter une posture citoyenne, éthique et écologique",
        ac: "Intégrer la RSE dans la stratégie de l'offre",
        title: "Projet Epi-IUT / Agoraé",
        comment: "Epi-IUT a avant tout été créé pour aider les étudiants en difficulté en leur donnant accès à des produits essentiels à prix très réduit. Participer à ce projet m'a permis de travailler sur une offre qui ne recherche pas seulement une performance économique, mais qui répond aussi à un véritable besoin social."
      }
    ]
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
    traceEntries: [
      {
        ce: "Respecter les étapes de la négociation commerciale et une démarche éthique",
        ac: "Maîtriser les codes propres à l'univers spécifique rencontré",
        title: "Mon expérience en vente chez BUT",
        comment: "Travailler au petit meuble m'a demandé de bien connaître les produits pour pouvoir répondre aux différentes attentes des clients. Avec l'expérience, j'ai appris à identifier rapidement les critères importants pour chacun et à proposer une solution réellement adaptée."
      },
      {
        ce: "Respecter les étapes de la négociation commerciale et une démarche éthique",
        ac: "Adapter sa communication verbale et non verbale à la situation commerciale",
        title: "Vente et conseil client chez BUT",
        comment: "Chaque client étant différent, je ne peux pas utiliser le même discours avec tout le monde. Certains veulent beaucoup de conseils, d'autres savent déjà exactement ce qu'ils recherchent. Mon expérience chez BUT m'a appris à adapter ma façon de communiquer, mes questions et mes arguments selon la personne que j'ai en face de moi."
      }
    ]
  },
  {
    id: "espace-vente",
    tab: "Retail",
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
    traceEntries: [
      {
        ce: "Développer l'attractivité commerciale de l'espace de vente pour optimiser les indicateurs commerciaux",
        ac: "Élaborer une stratégie commerciale en cohérence avec l'environnement concurrentiel",
        title: "Mémoire, diagnostic du parcours client et propositions d'amélioration",
        comment: "Mon mémoire part d'un constat réalisé directement en magasin : le parcours imposé permet de faire découvrir l'ensemble de l'offre, mais peut aussi créer des difficultés d'orientation. J'ai donc travaillé sur des pistes comme la signalétique et des parcours plus adaptés aux besoins des clients afin de rendre le magasin plus agréable et plus efficace."
      },
      {
        ce: "Développer l'attractivité commerciale de l'espace de vente pour optimiser les indicateurs commerciaux",
        ac: "Implanter un plan de merchandising défini par le réseau ou par l'équipe de vente",
        title: "Photo avant/après d'une implantation réalisée chez BUT",
        comment: "Pendant mon alternance, j'ai participé à différentes implantations en suivant les préconisations de l'enseigne et les besoins du rayon. J'ai pu voir concrètement qu'une implantation claire et attractive joue directement sur la visibilité des produits et la facilité avec laquelle le client se repère."
      },
      {
        ce: "Enrichir l'expérience client par la mesure de la satisfaction client",
        ac: "Optimiser les outils de GRC et le parcours client dans une approche omnicanale",
        title: "Mémoire, grille d'observation du parcours client et étude terrain réalisée chez BUT",
        comment: "Pour mon mémoire, j'ai étudié le parcours réel des clients en magasin : hésitations, retours en arrière, demandes d'orientation ou difficultés à trouver un rayon. Cette étude m'a permis de dépasser mon ressenti terrain et d'identifier plus précisément les points du parcours qui peuvent être améliorés pour faciliter l'expérience client."
      }
    ]
  },
  {
    id: "equipe",
    tab: "Management",
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
      ${c.traceEntries ? `
      <div class="trace-entries">
        <h4>Traces et commentaires</h4>
        ${c.traceEntries.map((t, idx) => `
          <div class="trace-card ${idx % 2 === 1 ? 'trace-card-rev' : ''}">
            <div class="trace-photo-slot"><span>📷 Photo à ajouter</span></div>
            <div class="trace-text">
              <span class="trace-tag">Composante essentielle</span>
              <p class="trace-ce">${t.ce}</p>
              <span class="trace-tag">Apprentissage critique</span>
              <p class="trace-ac">${t.ac}</p>
              <h5 class="trace-title">${t.title}</h5>
              <p class="trace-comment">${t.comment}</p>
            </div>
          </div>`).join("")}
      </div>` : `
      <div class="traces">
        <h4>Traces à venir</h4>
        ${c.traces.map(t => `<div class="trace-slot">${t} : <em>à compléter (photos, captures, chiffres, annexes)</em></div>`).join("")}
      </div>`}
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
  if(storyNavItems.length){
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const id = entry.target.id.replace("chapter-", "");
          storyNavItems.forEach(li => li.classList.toggle("active", li.dataset.chapter === id));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    chapters.forEach(c => activeObserver.observe(c));
  }
}
