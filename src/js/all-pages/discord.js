const $ = require('jquery');

const setupDiscordLink = () => {
	// Discord button
	const $button = $("<div>")
		.attr("id", "discord-button")
		.attr("title", "Join my Discord!")
		.on("click", () => {
			window.open('https://discord.com/invite/RCtpFfV8HY', '_blank');
		})
		.appendTo("body");

	$("<img>")
		.attr("src", 'https://img.icons8.com/?size=100&id=SAZw8WuWnQea&format=png&color=000000')
		.attr("alt", "Discord")
		.appendTo($button);
}

module.exports = {
	setupDiscordLink
}