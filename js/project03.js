const contentVideo = document.querySelector("#contentVideoPlayer");
const contentButtons = document.querySelectorAll(".content-video-btn");

contentButtons.forEach((button) => {

    button.addEventListener("click", () => {

        contentButtons.forEach((item) =>
            item.classList.remove("active")
        );

        button.classList.add("active");

        contentVideo.src = button.dataset.video;

        contentVideo.load();

    });

});

const libraryImages = document.querySelectorAll(".content-library-grid img");
const lightbox = document.querySelector("#imageLightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const closeLightbox = document.querySelector("#closeLightbox");

libraryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.add("active");

    });

});


closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});