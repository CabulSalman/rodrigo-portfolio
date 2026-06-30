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