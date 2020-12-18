try {
    createVideoBG()
} catch (error) {
    console.log(error);
}

function createVideoBG() {
    setTimeout(() => {

        const instance = new vidbg(
            ".hero__video",
            {
                mp4: "video/Inspirfy_main_bg.mp4", // URL or relative path to MP4 video
                webm: "video/Inspirfy_main_bg_short.webm", // URL or relative path to webm video
                poster: "assets/img/hero-bg.jpg", // URL or relative path to fallback image
                overlay: true, // Boolean to display the overlay or not
                overlayColor: "#000000", // The overlay color as a HEX
                overlayAlpha: 0.4, // The overlay alpha. Think of this as the last integer in RGBA()
                autoplay: false
            },
            {
                // Attributes
            }
        );

        // Show loading animation.
        const playPromise = document.querySelector('.vidbg-container video').play();
        console.log(playPromise);
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                // Show playing UI.
            })
                .catch(error => {
                    // Auto-play was prevented
                    // Show paused UI.

                    console.log(error);
                });
        }

    }, 2350)
}