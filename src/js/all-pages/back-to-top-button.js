const $ = require('jquery');

const initBackToTopButton = () => {
	$("<a href='#'>")
		.html(`<span class="material-symbols-outlined">arrow_upward_alt</span>`)
		.addClass("back-to-top-button")
		.appendTo(document.body);
}

module.exports = {
	initBackToTopButton
}