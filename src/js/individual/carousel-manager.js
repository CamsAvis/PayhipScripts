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
		this.autoAdvance = true;
		this.autoAdvanceTimeoutSeconds = 10;
	}

	initCarousels() {
		$(".product-description > *").each((_, element) => {
			const $element = $(element);
			if (!$element.text().trim().match(/\%\%CAROUSEL_START.*\%\%/)) {
				return;
			}

			let match;
			const regex = /(?<key>[a-z0-9-]+)=(?<value>[a-z0-9-]+)/gi
			while ((match = regex.exec($element.text())) !== null) {
				const { key, value } = match.groups;

				switch(key) {
					case 'auto-advance':
						this.autoAdvance = value === "true";
						break;
					case 'auto-advance-speed-s':
						this.autoAdvanceTimeoutSeconds = parseInt(value);
						break;
				}
			}

			this.initCarousel($element, params);
		});
	}

	isCarouselEnd($item) {
		// ok
		return $item.text().trim() === "%%CAROUSEL_END%%";
	}

	isInViewport($element) {
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

	initCarousel($root, params) {
		let imageTimeoutKey = crypto.randomUUID();
		
		// pause auto rotations when off screen
		$(window).on("resize scroll", (_,el) => {
			const $el = $(el);

			const currentTimeout = this.carouselTimeoutsMap[imageTimeoutKey].timeout;
			const inView = this.isInViewport($el);
			if(inView && !currentTimeout) {
				this.resumeTimeout(imageTimeoutKey);
			} else if(!inView) {
				this.pauseTimeout(imageTimeoutKey);
			}
		})

		// Init carousel stuff
		$root.html("").addClass("custom-carousel");
		const $navGroup = $("<div>").addClass("carousel-nav-group");

		// Gather all children between start and end markers
		let $current = $($root).next();
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

		if(this.autoAdvance) {
			this.carouselTimeoutsMap[imageTimeoutKey].timeout = setTimeout(() => {
				if (items.length === 0) { return; }

				let nextImgIdx = (newIdx + 1) % items.length;
				this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = nextImgIdx;

				this.updateCarousel(imageTimeoutKey, nextImgIdx)
			}, this.autoAdvanceTimeoutSeconds * 1000);
		}
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
