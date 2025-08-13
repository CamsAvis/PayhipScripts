const parseQuery = ($element) => {
	let queryOutput = {}

	let match;
	const regex = /(?<key>[a-z0-9-]+)=(?<value>[a-z0-9-]+)/gi;
	while ((match = regex.exec($element.text())) !== null) {
		const { key, value } = match.groups;
		queryOutput[key] = value;
	}

	return queryOutput;
}

module.exports = {
	parseQuery
}