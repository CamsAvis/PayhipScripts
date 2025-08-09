class CarouselTimeout {
	constructor(items, navItems, currentIdx, timeout) {
		this.items = items;
		this.navitems = navItems;
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
		$(".product-description > *").each(function () {
			if ($(this).text().trim() !== "%%CAROUSEL_START%%") {
				return;
			}

			initCarousel($(this));
		});
	}

	isCarouselEnd($item) {
		$item.text().trim() === "%%CAROUSEL_END%%";
	}

	initCarousel($start) {
		let imageTimeoutKey = crypto.randomUUID();

		$start.html("").addClass("custom-carousel");
		const $navGroup = $("<div>").addClass("carousel-nav-group");

		// Gather all children between start and end markers
		let $current = $($start).next();
		let navItemIdx = 0;

		let carouselTimeoutObject = CarouselTimeout.init();
		while ($current.length && !isCarouselEnd($current)) {
			$current.find("img").each(function () {
				const $img = $(this);
				const currentIndex = navItemIdx;

				$img.addClass("zoom-target")
					.attr("data-carousel-selected", navItemIdx === 0 ? "true" : "false")
					.appendTo($start);

				addImageMagnifierOnHover($img, imageTimeoutKey);

				const $navItem = $("<div>")
					.addClass("nav-item")
					.attr("data-nav-selected", navItemIdx === 0 ? "true" : "false")
					.attr("id", )
					.on("click", function () {
						updateCarousel(imageTimeoutKey, currentIndex);
					})
					.appendTo($navGroup);

				carouselTimeoutObject.items.push($img);
				carouselTimeoutObject.navItems.push($navItem);

				navItemIdx++;
			})

			const $next = $current.next();
			$current.remove();
			$current = $next;
		}

		// remove the %%CAROUSEL_END%% text from the DOM
		if(isCarouselEnd($current)) {
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

				updateCarousel(imageTimeoutKey, newImgIdx);
			})
			.appendTo($start);

		// Next button
		$("<div>")
			.addClass("carousel-navigator-arrow carousel-navigator-arrow-next")
			.html('<span class="material-symbols-outlined">arrow_forward_ios</span>')
			.on("click", () => {
				const { currentIdx, items } = this.carouselTimeoutsMap[imageTimeoutKey]
				if (items.length === 0) { return; }

				let newImgIdx = (currentIdx + 1) % items.length;
				updateCarousel(imageTimeoutKey, newImgIdx);
			})
			.appendTo($start);

		// add the nav
		$start.append($navGroup);

		// start the carousel
		updateCarousel(imageTimeoutKey, 0);
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

			updateCarousel(imageTimeoutKey, nextImgIdx)
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

		updateCarousel(imageTimeoutKey, timeoutObject.currentIdx);
	}

	addImageMagnifierOnHover($zoomerTarget, imageTimeoutKey) {
		$zoomerTarget.attr("data-carousel-zoomer-hovered", "false");

		$zoomerTarget.on("mouseenter", function () {
			$zoomerTarget.attr("data-carousel-zoomer-hovered", "true");
			pauseTimeout(imageTimeoutKey);
		})

		$zoomerTarget.on("mousemove", function (e) {
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

		$zoomerTarget.on("mouseleave", function () {
			$zoomerTarget.attr("data-carousel-zoomer-hovered", "false");

			$zoomerTarget.css({
				transformOrigin: "center center",
				transform: "scale(1)"
			});

			resumeTimeout(imageTimeoutKey);
		});
	}
}


if (document.body.id === "page-product") {
	$(document).ready(function() {
		const carouselWrapper = new CarouselWrapper();
		carouselWrapper.initCarousel();
	});
}
