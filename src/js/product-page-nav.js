if (document.body.id === "page-product") {
	$(document).ready(initProductPageNav);
}

const initProductPageNav = () => {
	const productDescription = document.querySelector("div.product-description");

	const productDescriptionNavigation = document.createElement("ol");
	productDescriptionNavigation.classList.add("product-description-navigation");

	const productDescriptionHeadingText = document.createElement("h1");
	productDescriptionHeadingText.innerText = "SHORTCUTS";
	productDescription.insertBefore(productDescriptionHeadingText, productDescription.firstChild);

	const headings = Array.from(productDescription.querySelectorAll("h2"));
	headings.forEach(heading => {
		const text = heading.innerText
			.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "") // remove emojis
			.trim()
			.toLowerCase()
			.replace(/\b\w/g, char => char.toUpperCase());

		if (text.length > 0) {
			heading.id = text;
			heading.classList.add("heading-link");

			heading.addEventListener("click", function (e) {
				e.preventDefault();
				const url = `${window.location.origin}${window.location.pathname}#${heading.id}`;
				navigator.clipboard.writeText(url);
				window.location.hash = heading.id;
			});

			const headerListItem = document.createElement("li");

			const headerNavItem = document.createElement("a");
			headerNavItem.innerText = text;
			headerNavItem.href = `#${heading.id}`
			headerNavItem.classList.add("header-nav-item");

			headerListItem.appendChild(headerNavItem);
			productDescriptionNavigation.appendChild(headerListItem);

			if (productDescription) {
				productDescriptionHeadingText.insertAdjacentElement('afterend', productDescriptionNavigation);
			}
		}
	});
}