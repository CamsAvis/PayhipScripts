const { parseQuery } = require("../util");

const setupProductPageCustomLinks = ($element) => {
	let elementHTML = $element.html().toString();

	const regex = /\%\%link\?(.*?)\%\%/g;

	let match;
	while((match = regex.exec(elementHTML)) !== null) {
		const queryString = match[1];
		const result = parseQuery(queryString);

		if(!result.html || !result.target) continue;

		elementHTML = elementHTML.replace(
			match[0], `<a href="${result.link}" class="injected-link">${result.html}</a>`
		)
	}

	$element.html(elementHTML);
}

module.exports = {
	setupProductPageCustomLinks
}