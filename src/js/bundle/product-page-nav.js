const initProductPageNav = () => {
	const $productDescription = $(document).find("div.product-description");

	const $productDescriptionNavigation = $("<ol>").addClass("product-description-navigation");
	const $productDescriptionHeadingText = $("<h1>").text("SHORTCUTS");

	let didAddShortcuts = false;
	$productDescription.children().each(function() {
		const $element = $(this);

		if (!$element.text().includes("%%SHORTCUT_TARGET%%")) {
			return;
		} else {
			didAddShortcuts = true;
		}

		const cleanedText = $element.text().replace("%%SHORTCUT_TARGET%%", "");
		const text = cleanedText
			.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "") // remove emojis
			.trim()
			.toLowerCase()
			.replace(/\b\w/g, char => char.toUpperCase());

		if(text.length === 0) {
			return;
		}

		$element.text(cleanedText);
		$element.attr("id", text)
			.addClass("heading-link")
			.on("click", function () {
				// const url = `${window.location.origin}${window.location.pathname}#${text}`;
				// navigator.clipboard.writeText(url);
				window.location.hash = text;
			});

		const $headerListItem = $("<li>").appendTo($productDescriptionNavigation);

		$(`<a href="#${text}">`)
			.text(text)
			.addClass("header-nav-item")
			.appendTo($headerListItem);

		if ($productDescription.length) {
			$productDescriptionHeadingText.after($productDescriptionNavigation);
		}
	});

	if(didAddShortcuts) {
		$productDescription.prepend($productDescriptionNavigation);
		$productDescription.prepend($productDescriptionHeadingText);
	}
}

if (document.body.id === "page-product") {
	$(document).ready(initProductPageNav);
}
