const isStart = ($element) => $element.text().trim().match(/\%\%FOLDOUT_START.*\%\%/);
const isEnd = ($element) => $element.text().trim().match(/\%\%FOLDOUT_END.*\%\%/);

const parseQuery = ($element) => {
	let queryOutput = {}

	let match;
	const regex = /(?<key>[a-z0-9-]+)=(?<value>[a-z0-9-]+)/gi
	while ((match = regex.exec($element.text())) !== null) {
		queryOutput[key] = value;
	}

	return queryOutput;
}

const createFoldout = ($rootElement) => {
		const query = parseQuery($rootElement);
		const foldedOutByDefault = query['folded-out'] === "true";

		// main container
		const $foldoutContainer = $("<div>")
			.addClass("foldout-container")
			.attr("data-folded-out", foldedOutByDefault.toString());

		// header
		const $foldoutHeader = $("<div>")
			.addClass("foldout-header")
			.on("click", function () {
				const isFoldedOut = $foldoutContainer.attr("data-folded-out") === "true";
				$foldoutContainer.attr("data-folded-out", (!isFoldedOut).toString());
			});

		// insert title
		const $titleElement = $rootElement.next();
		const $firstChildElement = $titleElement.next();
		$titleElement.appendTo($foldoutHeader);

		$rootElement.html("").append(
			$foldoutHeader, $foldoutContainer
		)

		let $current = $firstChildElement;
		while ($current.length && !isEnd($current)) {
			if(isStart($current)) {
				createFoldout($current);
				continue;
			}

			const $next = $current.next();
			$current.appendTo($foldoutContainer);
			$current = $next;
		}

		if(isEnd($current)) {
			$current.remove();
		}
}

$(document).ready(function () {
	$(".product-description > *").each((_, element) => {
			const $rootElement = $(element);
			if (!isStart($rootElement)) {
				return;
			}
			createFoldout($rootElement);
	});
});