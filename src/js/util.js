const extractArg = (val, defaultValue) => {
  if (val === undefined || val === null) return defaultValue;
  return val.toLowerCase() === "true";
}

const parseQuery = (text) => {
	let queryOutput = {}

	let match;
	const regex = /(?<key>[a-z]+)=(?<value>[a-zA-Z-]+)/gi;
	while ((match = regex.exec(text)) !== null) {
		const { key, value } = match.groups;
		queryOutput[key] = value;
	}

	return queryOutput;
}

module.exports = {
	parseQuery, extractArg
}