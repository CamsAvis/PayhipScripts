const isStart = ($element) => $element.text().trim().match(/\%\%FOLDOUT_START.*\%\%/);
const isEnd = ($element) => $element.text().trim().match(/\%\%FOLDOUT_END.*\%\%/);

const parseQuery = ($element) => {
	let queryOutput = {}

	let match;
	const regex = /(?<key>[a-z0-9-]+)=(?<value>[a-z0-9-]+)/gi
	while ((match = regex.exec($element.text())) !== null) {
		const { key, value } = match.groups;
		queryOutput[key] = value;
	}

	return queryOutput;
}

const createFoldout = ($rootElement) => {
		const query = parseQuery($rootElement);
		const foldedOutByDefault = ('folded-out' in query) && (query['folded-out'] === "true");
	
		const FOLDOUT_TRANSITION_DURATION_STR = (('duration' in query) && query['duration']) ?? "500ms";

		const reResults = FOLDOUT_TRANSITION_DURATION_STR.match(/(?<time>[0-9]*)(?<unit>\w+)/);
		const animDurationNumber = parseInt(reResults?.groups?.time || "500");
		const animDurationUnit = reResults?.groups?.unit || "ms";

		const $foldoutContainer = $("<div>")
			.addClass("foldout-container")
			.attr("data-folded-out", foldedOutByDefault.toString())
			.css('--anim-foldout-dura', `${animDurationNumber}${animDurationUnit}`);

		// header
		const $foldoutHeader = $("<div>")
			.addClass("foldout-header")
			.on("click", function () {
					const isFoldedOut = $foldoutContainer.attr("data-folded-out") === "true";
					const animClassName = isFoldedOut ? "anim-foldout-in" : "anim-foldout-out";

					$foldoutContainer.css({ pointerEvents: "none" });
					$foldoutContainer
						.removeClass(animClassName)
						.addClass(animClassName);

					setTimeout(() => {
						$foldoutContainer.css({ pointerEvents: "all" });
						$foldoutContainer.attr("data-folded-out", (!isFoldedOut).toString());
						$foldoutContainer.removeClass(animClassName);
					}, animDurationNumber);
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