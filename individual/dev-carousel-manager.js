class CarouselTimeout {
	constructor(items, navItems, currentIdx, timeout) {
		this.items = items;
		this.navItems = navItems;
		this.currentIdx = currentIdx;
		this.timeout = timeout;
	}

	static init() {
		return new CarouselTimeout([], [], 0, undefined);
	}
}

class CarouselWrapper {
	constructor() { 
		this.carouselTimeoutsMap = { };
	}

	initCarousels() {
		$(".product-description > *").each((_, element) => {
			const $element = $(element);
			if ($element.text().trim() !== "%%CAROUSEL_START%%") {
				return;
			}

			this.initCarousel($element);
		});
	}

	isCarouselEnd($item) {
		$item.text().trim() === "%%CAROUSEL_END%%";
	}

	initCarousel($root) {
		let imageTimeoutKey = crypto.randomUUID();

		$root.html("").addClass("custom-carousel");
		const $navGroup = $("<div>").addClass("carousel-nav-group");

		// Gather all children between start and end markers
		let $current = $root.next();
		let navItemIdx = 0;

		let carouselTimeoutObject = CarouselTimeout.init();
		while ($current.length && !this.isCarouselEnd($current)) {
			$current.find("img").each((_, img) => {
				const $img = $(img);
				const currentIndex = navItemIdx;

				$img.addClass("zoom-target")
					.attr("data-carousel-selected", navItemIdx === 0 ? "true" : "false")
					.appendTo($root);

				this.addImageMagnifierOnHover($img, imageTimeoutKey);

				const $navItem = $("<div>")
					.addClass("nav-item")
					.attr("data-nav-selected", navItemIdx === 0 ? "true" : "false")
					.on("click", () => {
						this.updateCarousel(imageTimeoutKey, currentIndex);
					})
					.appendTo($navGroup);

				carouselTimeoutObject.items.push($img);
				carouselTimeoutObject.navItems.push($navItem);

				navItemIdx++;
			});

			const $next = $current.next();
			$current.remove();
			$current = $next;
		}

		// remove the %%CAROUSEL_END%% text from the DOM
		if(this.isCarouselEnd($current)) {
			$current.remove();
		}

		this.carouselTimeoutsMap[imageTimeoutKey] = carouselTimeoutObject;

		// Prev button
		$("<div>")
			.addClass("carousel-navigator-arrow carousel-navigator-arrow-prev")
			.html('<span class="material-symbols-outlined">arrow_back_ios</span>')
			.on("click", () => {
				const { currentIdx, items } = this.carouselTimeoutsMap[imageTimeoutKey]
				if (items.length === 0) { return; }

				let newImgIdx = (currentIdx - 1) % items.length;
				newImgIdx = newImgIdx < 0 ? items.length - 1 : newImgIdx;

				this.updateCarousel(imageTimeoutKey, newImgIdx);
			})
			.appendTo($root);

		// Next button
		$("<div>")
			.addClass("carousel-navigator-arrow carousel-navigator-arrow-next")
			.html('<span class="material-symbols-outlined">arrow_forward_ios</span>')
			.on("click", () => {
				const { currentIdx, items } = this.carouselTimeoutsMap[imageTimeoutKey]
				if (items.length === 0) { return; }

				let newImgIdx = (currentIdx + 1) % items.length;
				this.updateCarousel(imageTimeoutKey, newImgIdx);
			})
			.appendTo($root);

		// add the nav
		$root.append($navGroup);

		// start the carousel
		this.updateCarousel(imageTimeoutKey, 0);
	}

	updateCarousel(imageTimeoutKey, newIdx) {
		const { items, navItems, timeout } = this.carouselTimeoutsMap[imageTimeoutKey]

		if (timeout) {
			clearTimeout(timeout);
		}

		items.forEach(($el, idx) => {
			const selectedStr = (idx === newIdx).toString();
			$el.attr("data-carousel-selected", selectedStr);
			$(navItems[idx]).attr("data-nav-selected", selectedStr);
		});
		this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = newIdx;

		this.carouselTimeoutsMap[imageTimeoutKey].timeout = setTimeout(() => {
			if (items.length === 0) { return; }

			let nextImgIdx = (newIdx + 1) % items.length;
			this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = nextImgIdx;

			this.updateCarousel(imageTimeoutKey, nextImgIdx)
		}, 10 * 1000);
	}

	pauseTimeout(imageTimeoutKey) {
		if (this.carouselTimeoutsMap[imageTimeoutKey]?.timeout === undefined) {
			return;
		}

		clearTimeout(this.carouselTimeoutsMap[imageTimeoutKey].timeout);
		this.carouselTimeoutsMap[imageTimeoutKey].timeout = undefined;
	}

	resumeTimeout(imageTimeoutKey) {
		const timeoutObject = this.carouselTimeoutsMap[imageTimeoutKey];
		if (timeoutObject?.timeout !== undefined) {
			return;
		}

		this.updateCarousel(imageTimeoutKey, timeoutObject.currentIdx);
	}

	addImageMagnifierOnHover($zoomerTarget, imageTimeoutKey) {
		$zoomerTarget.attr("data-carousel-zoomer-hovered", "false");

		$zoomerTarget.on("mouseenter", () => {
			$zoomerTarget.attr("data-carousel-zoomer-hovered", "true");
			this.pauseTimeout(imageTimeoutKey);
		})

		$zoomerTarget.on("mousemove", (e) => {
			const isHovered = $zoomerTarget.attr("data-carousel-zoomer-hovered") === "true";
			if (!isHovered) { return; }

			const rect = $zoomerTarget[0].getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			const y = ((e.clientY - rect.top) / rect.height) * 100;

			$zoomerTarget.css({
				transformOrigin: `${x}% ${y}%`,
				transform: "scale(2)"
			})
		});

		$zoomerTarget.on("mouseleave", () => {
			$zoomerTarget.attr("data-carousel-zoomer-hovered", "false");

			$zoomerTarget.css({
				transformOrigin: "center center",
				transform: "scale(1)"
			});

			this.resumeTimeout(imageTimeoutKey);
		});
	}
}


if (document.body.id === "page-product") {
	$(document).ready(() => {
		const carouselWrapper = new CarouselWrapper();
		carouselWrapper.initCarousels();
	});
}
