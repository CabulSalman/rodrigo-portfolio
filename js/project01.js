const funnelNodes = document.querySelectorAll(".funnel-node");
const funnelTitle = document.querySelector("#funnelTitle");
const funnelDescription = document.querySelector("#funnelDescription");
const funnelStage = document.querySelector("#funnelStage");
const funnelRoleList = document.querySelector("#funnelRoleList");
const evidenceContainer = document.querySelector("#evidenceContainer");

const evidenceData = {
  metaAds: {
    evidences: [
      { type: "image", label: "Creativo 1", src: "assets/projects/cdeo/seminarios/ads/creatives/creative1_EC0680.png" },
      { type: "image", label: "Creativo 2", src: "assets/projects/cdeo/seminarios/ads/creatives/creative2_EC0680.png" },
      { type: "image", label: "Ads Manager", src: "assets/projects/cdeo/seminarios/ads/screenshots/ads_meta_01.png" }
    ]
  },

  landing: {
    evidences: [
      { type: "video", label: "Landing seminario", src: "assets/projects/cdeo/seminarios/videos/landing_home.mp4" },
      { type: "video", label: "Landing beca", src: "assets/projects/cdeo/seminarios/videos/landing_recorrido_EC0946.mp4" }
    ]
  },

  registro: { evidences: [] },

  nutricion: {
    evidences: [
      { type: "image", label: "Correo", src: "assets/projects/cdeo/seminarios/ads/screenshots/nutricion1_EC0680.png" },
      { type: "image", label: "WhatsApp", src: "assets/projects/cdeo/seminarios/ads/screenshots/nutricion2_EC0680.png" }
    ]
  },

  seminario: {
    evidences: [
      { type: "image", label: "Zoom 1", src: "assets/projects/cdeo/seminarios/ads/screenshots/zoom1_EC0680.png" },
      { type: "image", label: "Zoom 2", src: "assets/projects/cdeo/seminarios/ads/screenshots/zoom2_EC0680.png" }
    ]
  },

  venta: {
    evidences: [
      { type: "video", label: "Formulario", src: "assets/projects/cdeo/seminarios/videos/landing_formulario.mp4" },
      { type: "video", label: "Landing de pago", src: "assets/projects/cdeo/seminarios/videos/pago_EC1309.mp4" }
    ]
  },

  seguimiento: { evidences: [] }
};

function renderMainEvidence(item) {
  if (item.type === "video") {
    return `<video controls src="${item.src}"></video>`;
  }

  return `<img src="${item.src}" alt="${item.label}">`;
}

function renderEvidence(stepKey) {
  const data = evidenceData[stepKey];

  if (!data || !data.evidences || data.evidences.length === 0) {
    evidenceContainer.innerHTML = `
      <p class="evidence-empty">No hay evidencia visual disponible para esta etapa.</p>
    `;
    return;
  }

  const firstEvidence = data.evidences[0];

  evidenceContainer.innerHTML = `
    <div class="evidence-main" id="mainEvidence">
      ${renderMainEvidence(firstEvidence)}
    </div>

    <div class="evidence-thumbs">
      ${data.evidences.map((item, index) => `
        <button class="evidence-thumb ${index === 0 ? "active" : ""}" data-index="${index}">
          ${
            item.type === "image"
              ? `<img src="${item.src}" alt="${item.label}">`
              : `<span class="thumb-label">🎥 ${item.label}</span>`
          }
        </button>
      `).join("")}
    </div>
  `;

  const mainEvidence = evidenceContainer.querySelector("#mainEvidence");
  const thumbs = evidenceContainer.querySelectorAll(".evidence-thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {

      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");

      const selected = data.evidences[thumb.dataset.index];

      mainEvidence.classList.add("is-changing");

      setTimeout(() => {

        mainEvidence.innerHTML = renderMainEvidence(selected);

        mainEvidence.classList.remove("is-changing");

      }, 220);

    });
  });
}

function activateFunnelNode(node) {
  funnelNodes.forEach((item) => item.classList.remove("active"));
  node.classList.add("active");

  funnelTitle.textContent = node.dataset.title;
  funnelDescription.textContent = node.dataset.description;
  funnelStage.textContent = node.dataset.stage;

  funnelRoleList.innerHTML = "";

  node.dataset.role.split("|").forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    funnelRoleList.appendChild(li);
  });

  renderEvidence(node.dataset.step);
}

funnelNodes.forEach((node) => {
  node.addEventListener("click", () => {
    activateFunnelNode(node);
  });
});

if (funnelNodes.length > 0) {
  activateFunnelNode(funnelNodes[0]);
}