const $ = require('jquery');

const setupRecommendedFriends = () => {
	const selector = `
		div[data-section-key="testimonial-image-columns"] 
		.column-item-wrapper:has(.image-row-contents):has(.text-row-contents)
	`;

	$(selector)
		.on("mouseenter", function() {
			const $img = $(this).find(".image-row-contents img");
			if($img) { $img.css("scale", "105%"); }
		})
		.on("mouseleave", function() {
			const $img = $(this).find(".image-row-contents img")
			if($img) { $img.css("scale", "100%"); }
		})
		.on("click", function() {
			const link = wrapper.querySelectorAll(".text-row-contents a")[0];
			if(link) {
				 window.open(link.href, '_blank')
			}
		});
}

const setupImageParallax = ($element) => {
	$element.on("scroll", function() {
		const maxTranslate = window.innerHeight * 0.15;
		const scrollMax = window.innerHeight;
		const percent = Math.min(window.scrollY / scrollMax, 1);
		const translateY = percent * maxTranslate;
		$(this).css("transform", `translate3d(0, ${translateY}px, 0)`);
	});
}

module.exports = {
	setupRecommendedFriends, setupImageParallax
}