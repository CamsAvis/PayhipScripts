const parseQuery = require("../util");

const setupProductPageCustomLinks = async($element) => {
	const elementText = $element.text();

	const regexResult = elementText.match(/%%link=.*%%/g);
	if(!regexResult){
		return;
	}

	for(const result of regexResult) {
		const { name, link } = parseQuery(result);
		if(!name || !link) { 
			continue; 
		}

		
	}
}

module.exports = {
	setupProductPageCustomLinks
}