const $ = require('jquery');

const setupCustomButtons = () => {
	const minWidth = 300;
	const maxWidth = 600;
	const minDuration = 300;
	const maxDuration = 500;

	$(window).on("resize", () => {
		$("button.btn-primary").each((_, btn) => {
			const width = btn.offsetWidth;
			const clamped = Math.max(minWidth, Math.min(width, maxWidth));
			const duration = minDuration + ((clamped - minWidth) / (maxWidth - minWidth)) * (maxDuration - minDuration);
			btn.style.setProperty('--btn-primary-transition', `${duration}ms`);
		})
	});
}

module.exports = {
	setupCustomButtons
}