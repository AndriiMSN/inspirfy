setTimeout(() => {
	
	const instance = new vidbg(
		".hero__video",
		{
			mp4: "video/Inspirfy_main_bg_short.mp4", // URL or relative path to MP4 video
			webm: "video/Inspirfy_main_bg_short.webm", // URL or relative path to webm video
			// poster: "img/hero-bg.png", // URL or relative path to fallback image
			overlay: true, // Boolean to display the overlay or not
			overlayColor: "#000000", // The overlay color as a HEX
			overlayAlpha: 0.4, // The overlay alpha. Think of this as the last integer in RGBA()
		},
		{
			// Attributes
		}
	);
	
}, 2350);

