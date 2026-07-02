const hero = document.querySelector(".hero");
const heroBg = document.querySelector("[data-parallax='background']");
const heroContent = document.querySelector("[data-parallax='content']");

if (hero && heroBg && heroContent) {
  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    heroBg.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
    heroContent.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
  });

  hero.addEventListener("mouseleave", () => {
    heroBg.style.transform = "translate(0, 0)";
    heroContent.style.transform = "translate(0, 0)";
  });
}

const caseItems = document.querySelectorAll(".case-item");
const casePreviewText = document.querySelector("#casePreviewText");

caseItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    casePreviewText.textContent = item.dataset.preview;
  });
});

const funnelNodes = document.querySelectorAll(".funnel-node");
const funnelTitle = document.querySelector("#funnelTitle");
const funnelDescription = document.querySelector("#funnelDescription");
const funnelStage = document.querySelector("#funnelStage");
const funnelRoleList = document.querySelector("#funnelRoleList");
const evidenceDisplay = document.querySelector("#evidenceDisplay");

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
}


funnelNodes.forEach((node) => {
  node.addEventListener("click", () => {
    activateFunnelNode(node);
  });
});

if (funnelNodes.length > 0) {
  activateFunnelNode(funnelNodes[0]);
}