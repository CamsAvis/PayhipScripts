class CarouselTimeout {
	constructor(items, navItems, currentIdx, timeout, $root) {
		this.items = items;
		this.navItems = navItems;
		this.currentIdx = currentIdx;
		this.timeout = timeout;
		this.$root = $root;
	}

	static init() {
		return new CarouselTimeout([], [], 0, undefined, undefined);
	}
}

class Attributes {
	static get DATA_SHOW_NAV() { return "show-nav"; }
	static get DATA_SHOW_ARROWS() { return "show-arrows"; }
	static get DATA_ENABLE_ZOOM() { return "enable-zoom"; }
	static get DATA_AUTO_ADVANCE() { return "auto-advance"; }
	static get DATA_PAUSE_ON_HOVER() { return "pause-on-hover"; }
	static get DATA_AUTO_ADVANCE_SPEED_SECONDS() { return "auto-advance-speed-s"; }

	static get DATA_CAROUSEL_MAGNIFIER_HOVERED() { return "data-carousel-zoomer-hovered"; }
	static get DATA_CAROUSEL_SELECTED() { return "data-carousel-selected" }
	static get DATA_NAV_SELECTED() { return "data-nav-selected" }

	static get CLASS_ZOOM_TARGET() { return "zoom_target" }
	static get CLASS_CAROUSEL_ROOT() { return "custom-carousel" }
	static get CLASS_IMAGE_CONTAINER() { return "carousel-image-container" }
	static get CLASS_NAV_ITEM() { return "nav-item" }
	static get CLASS_NAV_GROUP() { return "carousel-nav-group" }

	static get CLASS_CAROUSEL_NAVIGATOR_ARROW() { return "carousel-navigator-arrow"; }
	static get CLASS_CAROUSEL_NAVIGATOR_ARROW_PREV() { return "carousel-navigator-arrow-prev"; }
	static get CLASS_CAROUSEL_NAVIGATOR_ARROW_NEXT() { return "carousel-navigator-arrow-next"; }
}

class CarouselWrapper {
	constructor() { 
		this.carouselTimeoutsMap = { };
	}

	initCarousels() {
		$(".product-description > *").each((_, element) => {
			const $element = $(element);
			if (!$element.text().trim().match(/\%\%CAROUSEL_START.*\%\%/)) {
				return;
			}

			let autoAdvance = true;
			let showNav = true;
			let showArrows = true;
			let enableZoom = true;
			let pauseOnHover = true;
			let autoAdvanceTimeoutSeconds = 10;

			let match;
			const regex = /(?<key>[a-z0-9-]+)=(?<value>[a-z0-9-]+)/gi
			while ((match = regex.exec($element.text())) !== null) {
				const { key, value } = match.groups;

				try {
					switch(key) {
						case Attributes.DATA_SHOW_NAV: 
							showNav = value === "true"; 
							break;
						case Attributes.DATA_SHOW_ARROWS: 
							showArrows = value === "true"; 
							break;
						case Attributes.DATA_ENABLE_ZOOM: 
							enableZoom = value === "true"; 
							break;
						case Attributes.DATA_AUTO_ADVANCE: 
							autoAdvance = value === "true"; 
							break;
						case Attributes.DATA_AUTO_ADVANCE: 
							pauseOnHover = value === "true"; 
							break;
						case Attributes.DATA_AUTO_ADVANCE_SPEED_SECONDS: 
							autoAdvanceTimeoutSeconds = parseInt(value); 
							break;
					}
				} catch(e) {
					console.log(e);
				}
			}

			this.initCarousel(
				$element,
				autoAdvance,
				autoAdvanceTimeoutSeconds,
				showNav,
				showArrows,
				enableZoom,
				pauseOnHover
			);
		});
	}

	isCarouselEnd = ($item) => $item.text().trim() === "%%CAROUSEL_END%%";

	isInViewport($element) {
    var elementTop = $element.offset().top;
    var elementBottom = elementTop + $element.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	isElementCentered($element) {
			const rect = $element[0].getBoundingClientRect();
			const viewportCenterY = window.innerHeight / 2;

			return (
					viewportCenterY >= (rect.top - window.innerHeight / 3) &&
					viewportCenterY <= (rect.bottom + window.innerHeight / 3)
			);
	}

	initCarousel(
		$root,
		autoAdvance,
		autoAdvanceTimeoutSeconds,
		showNav,
		showArrows,
		enableZoom,
		pauseOnHover
	) {
		let imageTimeoutKey = crypto.randomUUID();
		
		// Init carousel stuff
		$root.html("")
			.addClass(Attributes.CLASS_CAROUSEL_ROOT)
			.attr("id", imageTimeoutKey)
			.attr(Attributes.DATA_AUTO_ADVANCE, autoAdvance.toString())
			.attr(Attributes.DATA_AUTO_ADVANCE_SPEED_SECONDS, autoAdvanceTimeoutSeconds.toString())
			.attr(Attributes.DATA_SHOW_NAV, showNav.toString())
			.attr(Attributes.DATA_SHOW_ARROWS, showArrows.toString());

		const $navGroup = $("<div>").addClass(Attributes.CLASS_NAV_GROUP);
		const $imageContainer = $("<div>")
			.addClass(Attributes.CLASS_IMAGE_CONTAINER)
			.attr(Attributes.DATA_ENABLE_ZOOM, enableZoom.toString())
			.attr(Attributes.DATA_PAUSE_ON_HOVER, pauseOnHover.toString());
		this.addPauseAutoAdvance($imageContainer, imageTimeoutKey);

		// Gather all children between start and end markers
		let $current = $($root).next();
		let navItemIdx = 0;

		let carouselTimeoutObject = new CarouselTimeout([], [], 0, undefined, $root);
		while ($current.length && !this.isCarouselEnd($current)) {
			$current.find("img").each((_, img) => {
				const $img = $(img);
				const currentIndex = navItemIdx;

				const isFirst = (navItemIdx === 0).toString();

				$img.addClass(Attributes.CLASS_ZOOM_TARGET)
					.attr(Attributes.DATA_CAROUSEL_SELECTED, isFirst)
					.appendTo($imageContainer);

				this.addImageMagnifierOnHover($img, imageTimeoutKey);

				const $navItem = $("<div>")
					.addClass(Attributes.CLASS_NAV_ITEM.replace(".",""))
					.attr(Attributes.DATA_NAV_SELECTED, isFirst)
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
		const $prevArrow = $("<div>")
			.addClass(`
				${Attributes.CLASS_CAROUSEL_NAVIGATOR_ARROW} 
				${Attributes.CLASS_CAROUSEL_NAVIGATOR_ARROW_PREV}
			`)
			.html(`
				<span class="material-symbols-outlined" style="transform: rotate(180deg);">
					arrow_forward_ios
				</span>
			`)
			.on("click", () => {
				const { currentIdx, items } = this.carouselTimeoutsMap[imageTimeoutKey]
				if (items.length === 0) { return; }

				let newImgIdx = (currentIdx - 1) % items.length;
				newImgIdx = newImgIdx < 0 ? items.length - 1 : newImgIdx;

				this.updateCarousel(imageTimeoutKey, newImgIdx);
			})

		// Next button
		const $nextArrow = $("<div>")
			.addClass(`
				${Attributes.CLASS_CAROUSEL_NAVIGATOR_ARROW} 
				${Attributes.CLASS_CAROUSEL_NAVIGATOR_ARROW_NEXT}
			`)
			.html('<span class="material-symbols-outlined">arrow_forward_ios</span>')
			.on("click", () => {
				const { currentIdx, items } = this.carouselTimeoutsMap[imageTimeoutKey]
				if (items.length === 0) { return; }

				let newImgIdx = (currentIdx + 1) % items.length;
				this.updateCarousel(imageTimeoutKey, newImgIdx);
			})

		$root.append($prevArrow, $imageContainer, $nextArrow, $navGroup);

		// start
		this.updateCarousel(imageTimeoutKey, 0);

		// pause / resume when on / off screen
		$(window).on("resize scroll", () => {
			const $el = this.carouselTimeoutsMap[imageTimeoutKey].$element;
			const currentTimeout = this.carouselTimeoutsMap[imageTimeoutKey].timeout;
			const inView = this.isElementCentered($el);

			if (inView && !currentTimeout) {
					this.resumeTimeout(imageTimeoutKey);
			} else if (!inView) {
					this.pauseTimeout(imageTimeoutKey);
			}
		});
	}

	updateCarousel(imageTimeoutKey, newIdx) {
		const { items, navItems, timeout } = this.carouselTimeoutsMap[imageTimeoutKey]
		
		if (timeout) {
			clearTimeout(timeout);
		}

		items.forEach(($el, idx) => {
			const selectedStr = (idx === newIdx).toString();
			$el.attr(Attributes.DATA_CAROUSEL_SELECTED, selectedStr);
			$(navItems[idx]).attr(Attributes.DATA_NAV_SELECTED, selectedStr);
		});
		this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = newIdx;

		const timeoutObject = this.carouselTimeoutsMap[imageTimeoutKey];
		const isHovered = timeoutObject.$root
			.attr(Attributes.DATA_CAROUSEL_MAGNIFIER_HOVERED) === "true";

		const autoAdvance = timeoutObject.$root
			.attr(Attributes.DATA_AUTO_ADVANCE) === "true";

		const autoAdvanceTimoutSeconds = timeoutObject.$root
			.attr(Attributes.DATA_AUTO_ADVANCE_SPEED_SECONDS) || "10";

		if(!isHovered && autoAdvance) {
			this.carouselTimeoutsMap[imageTimeoutKey].timeout = setTimeout(() => {
				if (items.length === 0) { return; }

				let nextImgIdx = (newIdx + 1) % items.length;
				this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = nextImgIdx;

				this.updateCarousel(imageTimeoutKey, nextImgIdx)
			}, parseInt(autoAdvanceTimoutSeconds) * 1000);
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

	addPauseAutoAdvance($element, imageTimeoutKey) {
		$element.attr(
			Attributes.DATA_CAROUSEL_MAGNIFIER_HOVERED, 
			"false"
		);

		$element.on("mouseenter", () => {
			$element.attr(
				Attributes.DATA_CAROUSEL_MAGNIFIER_HOVERED, 
				"true"
			);

			if($element.attr(Attributes.DATA_PAUSE_ON_HOVER) === "false") {
				return;
			}
			this.pauseTimeout(imageTimeoutKey);
		})
		
		$element.on("mouseleave", () => {
			$element.attr(
				Attributes.DATA_CAROUSEL_MAGNIFIER_HOVERED, 
				"false"
			);

			$element.css({
				transformOrigin: "center center",
				transform: "scale(1)"
			});

			this.resumeTimeout(imageTimeoutKey);
		});
	}

	addImageMagnifierOnHover($zoomerTarget, imageTimeoutKey) {
		const $imageContainer = $zoomerTarget.closest(`.${Attributes.CLASS_IMAGE_CONTAINER}`);

		$zoomerTarget.on("mousemove", (e) => {
			const isHovered = $imageContainer
				.attr(Attributes.DATA_CAROUSEL_MAGNIFIER_HOVERED) === "true";

			const shouldZoom = $imageContainer
				.attr(Attributes.DATA_ENABLE_ZOOM) === "true";

			if (!isHovered || !shouldZoom) { 
				return; 
			}

			const rect = $zoomerTarget[0].getBoundingClientRect();
			const x = ((e.clientX - rect.left) / rect.width) * 100;
			const y = ((e.clientY - rect.top) / rect.height) * 100;

			$zoomerTarget.css({
				transformOrigin: `${x}% ${y}%`,
				transform: "scale(2)"
			})
		});

		$zoomerTarget.on("mouseleave", () => {
			$imageContainer.attr(
				Attributes.DATA_CAROUSEL_MAGNIFIER_HOVERED, 
				"false"
			);

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
