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
						case "show-nav": 	showNav = value === "true"; break;
						case "show-arrows": showArrows = value === "true"; break;
						case "enable-zoom": enableZoom = value === "true"; break;
						case "auto-advance": autoAdvance = value === "true"; break;
						case "pause-on-hover": pauseOnHover = value === "true"; break;
						case "auto-advance-speed-s": autoAdvanceTimeoutSeconds = parseInt(value); break;
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

		// pause auto rotations when off screen
		$(window).on("resize scroll", () => {
			$(".custom-carousel").each((_, el) => {
				const $el = $(el);
				
				const $container = $el.find(".carousel-image-container").first();
				const isHovered = !!$container.length && $container.is('[data-carousel-zoomer-hovered="true"]');
				if (isHovered) return;
								
				const key = $el.attr("id");
				const currentTimeout = this.carouselTimeoutsMap[key]?.timeout;
				const inView = this.isElementCentered($el);
				if(inView && !currentTimeout) {
					this.resumeTimeout(key);
				} else if(!inView) {
					this.pauseTimeout(key);
				}
			})
		})
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

	initCarousel($root, autoAdvance, autoAdvanceTimeoutSeconds, showNav, showArrows, enableZoom, pauseOnHover) {
		let imageTimeoutKey = crypto.randomUUID();
		
		// Init carousel stuff
		$root.html("")
			.addClass("custom-carousel")
			.attr("id", imageTimeoutKey)
			.attr("data-auto-advance", autoAdvance.toString())
			.attr("data-auto-advance-timeout-s", autoAdvanceTimeoutSeconds.toString())
			.attr("data-show-nav", showNav.toString())
			.attr("data-show-arrows", showArrows.toString());

		const $navGroup = $("<div>").addClass("carousel-nav-group");
		const $imageContainer = $("<div>")
			.addClass("carousel-image-container")
			.attr("data-enable-zoom", enableZoom.toString())
			.attr("data-pause-on-hover", pauseOnHover.toString());
		this.addPauseAutoAdvance($imageContainer, imageTimeoutKey);

		// i got way too lazy to make a better solution for this dude
		if(!enableZoom && !pauseOnHover) {
			$imageContainer.css({ pointerEvents: "none" });
		}

		// Gather all children between start and end markers
		let $current = $($root).next();
		let navItemIdx = 0;

		let carouselTimeoutObject = new CarouselTimeout([], [], 0, undefined, $root);
		while ($current.length && !this.isCarouselEnd($current)) {
			$current.find("img").each((_, img) => {
				const $img = $(img);
				const currentIndex = navItemIdx;

				$img.addClass("zoom-target")
					.attr("data-carousel-selected", navItemIdx === 0 ? "true" : "false")
					.appendTo($imageContainer);


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
					
				if(!enableZoom && !pauseOnHover) {
					$img.css({ pointerEvents: "none" });
				}
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
			.addClass("carousel-navigator-arrow carousel-navigator-arrow-prev")
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
			.addClass("carousel-navigator-arrow carousel-navigator-arrow-next")
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

		const timeoutObject = this.carouselTimeoutsMap[imageTimeoutKey];
		const isHovered = timeoutObject.$root.attr("data-carousel-zoomer-hovered") === "true";
		const autoAdvance = timeoutObject.$root.attr("data-auto-advance") === "true";
		const autoAdvanceTimoutSeconds = parseInt(
			timeoutObject.$root.attr("data-auto-advance-timeout-s") || "10"
		);

		if(!isHovered && autoAdvance) {
			this.carouselTimeoutsMap[imageTimeoutKey].timeout = setTimeout(() => {
				if (items.length === 0) { return; }

				let nextImgIdx = (newIdx + 1) % items.length;
				this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = nextImgIdx;

				this.updateCarousel(imageTimeoutKey, nextImgIdx)
			}, autoAdvanceTimoutSeconds * 1000);
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
		$element.attr("data-carousel-zoomer-hovered", "false");

		$element.on("mouseenter", () => {
			$element.attr("data-carousel-zoomer-hovered", "true");
			if($element.attr("data-pause-on-hover") === "false") {
				return;
			}
			this.pauseTimeout(imageTimeoutKey);
		})
		
		$element.on("mouseleave", () => {
			$element.attr("data-carousel-zoomer-hovered", "false");

			$element.css({
				transformOrigin: "center center",
				transform: "scale(1)"
			});

			this.resumeTimeout(imageTimeoutKey);
		});
	}

	addImageMagnifierOnHover($zoomerTarget, imageTimeoutKey) {
		const $imageContainer = $zoomerTarget.closest(".carousel-image-container");

		$zoomerTarget.on("mousemove", (e) => {
			const isHovered = $imageContainer.attr("data-carousel-zoomer-hovered") === "true";
			const shouldZoom = $imageContainer.attr("data-enable-zoom") === "true";

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