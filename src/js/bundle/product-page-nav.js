const initProductPageNav = () => {
	const $productDescription = $(document).find("div.product-description");

	const $productDescriptionNavigation = $("<ol>").addClass("product-description-navigation");
	const $productDescriptionHeadingText = $("<h1>").text("SHORTCUTS");
	$productDescription.prepend($productDescriptionHeadingText);

	$productDescription.find("h2").each(function() {
		const $heading = $(this);

		const text = $heading.text()
			.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "") // remove emojis
			.trim()
			.toLowerCase()
			.replace(/\b\w/g, char => char.toUpperCase());

		if (text.length > 0) {
			$heading.attr("id", text).addClass("heading-link");
			heading.on("click", function () {
				const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
				navigator.clipboard.writeText(url);
				window.location.hash = heading.id;
			});

			const $headerListItem = $("<li>").appendTo($productDescriptionNavigation);

			const headerNavItem = $(`<a href="#${heading.id}">`)
				.text(text)
				.addClass("header-nav-item")
				.appendTo($headerListItem);

			if ($productDescription.length) {
				$productDescriptionHeadingText.after($productDescriptionNavigation);
			}
		}
	});
}

if (document.body.id === "page-product") {
	$(document).ready(initProductPageNav);
}
