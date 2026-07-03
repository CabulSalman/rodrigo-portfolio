const automationDisplay = document.querySelector(".automation-display");
const automationTabs = document.querySelectorAll(".automation-tab");


automationTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        automationTabs.forEach((item) =>
            item.classList.remove("active")
        );

        tab.classList.add("active");


        const type = tab.dataset.type;
        const src = tab.dataset.src;


        if(type === "video"){

            automationDisplay.innerHTML = `
                <video controls>
                    <source src="${src}" type="video/mp4">
                </video>
            `;

        }


        if(type === "image"){

            automationDisplay.innerHTML = `
                <img src="${src}" alt="Automatización desarrollada">
            `;

        }

    });

});