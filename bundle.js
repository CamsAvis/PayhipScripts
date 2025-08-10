window.addEventListener('DOMContentLoaded', () => {
    // recommended creators
    const selector = `
      div[data-section-key="testimonial-image-columns"] 
      .column-item-wrapper:has(.image-row-contents):has(.text-row-contents)
    `;

    const wrappers = document.querySelectorAll(selector);
    if (wrappers) {
      wrappers.forEach(wrapper => {
        const image = wrapper.querySelector(".image-row-contents img");
        const link = wrapper.querySelectorAll(".text-row-contents a")[0];

        if (!image || !link || !link.href) {
          return;
        }

        image.addEventListener("mouseenter", () => image.style.scale = "105%");
        image.addEventListener("mouseleave", () => image.style.scale = "100%");
        image.addEventListener("click", () => window.open(link.href, '_blank'));
      })
    }

    // Discord button
    const button = document.createElement('div');
    button.id = 'discord-button';
    button.title = 'Join our Discord!';

    const img = document.createElement('img');
    img.src = 'https://img.icons8.com/?size=100&id=SAZw8WuWnQea&format=png&color=000000';
    img.alt = 'Discord';

    button.appendChild(img);
    document.body.appendChild(button);

    button.addEventListener('click', () => {
      window.open('https://discord.com/invite/RCtpFfV8HY', '_blank');
    });

    // const cardsWithLinks = document.querySelectorAll(".card:has(a) .card__content");
    document.querySelectorAll(".card__content:has(a)").forEach(card => {
      const link = card.querySelector("a");
      card.addEventListener('click', () => {
        if (link && link.href) {
          window.location.href = link.href;
        }
      })
    })

    // fix card hover
    document.querySelectorAll(".card:has(a)").forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.035)';
        card.style.transition = 'transform 0.2s cubic-bezier(.19,1,.22,1)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = '';
      });
    });

    // parallax
    const bannerImg = document.querySelector('.banner__media.media img');
    if (bannerImg) {
      window.addEventListener('scroll', () => {
        const maxTranslate = window.innerHeight * 0.15; // 20vh in pixels
        const scrollMax = window.innerHeight; // or document.body.scrollHeight for full page
        const percent = Math.min(window.scrollY / scrollMax, 1);
        const translateY = percent * maxTranslate;
        bannerImg.style.transform = `translate3d(0, ${translateY}px, 0)`;
      });
    }

    document.querySelectorAll('.btn-primary').forEach(btn => {
      const minWidth = 300;
      const maxWidth = 600;
      const minDuration = 300;
      const maxDuration = 500;

      const updateTransition = () => {
        const width = btn.offsetWidth;
        // Clamp width between minWidth and maxWidth
        const clamped = Math.max(minWidth, Math.min(width, maxWidth));
        // Linear interpolation: minDuration at minWidth, maxDuration at maxWidth
        const duration = minDuration + ((clamped - minWidth) / (maxWidth - minWidth)) * (maxDuration - minDuration);
        btn.style.setProperty('--btn-primary-transition', `${duration}ms`);
      };
      updateTransition();
      window.addEventListener('resize', updateTransition);
    });

    // Patch the style to use the variable for transition
    const styleSheet = Array.from(document.styleSheets).find(s => {
      try { return s.ownerNode && s.ownerNode.textContent.includes('.btn-primary::before'); }
      catch { return false; }
    });
    if (styleSheet) {
      for (const rule of styleSheet.cssRules) {
        if (rule.selectorText === '.btn-primary::before') {
          rule.style.transition = 'transform var(--btn-primary-transition,250ms), color 250ms';
        }
      }
    }

    // Add back to top button
    $("<a href='#'>")
      .html(`<span class="material-symbols-outlined">arrow_upward_alt</span>`)
      .addClass("back-to-top-button")
      .appendTo(document.body);
  });


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


// OVERRIDE SOME OTHER STYLES I GUESS //
const style = document.createElement('style');
style.textContent = /*css*/`
		#discord-button {
			position: fixed;
			bottom: 20px;
			right: 20px;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			transition: transform 200ms ease;
			z-index: 9999;
		}

		#discord-button:hover {
			transform: scale(1.2);
		}

		#discord-button img {
			width: 100%;
			height: 100%;
			pointer-events: none;
		}

		@keyframes rotate-shake {
			0% { transform: rotate(0deg); }
			20% { transform: rotate(5deg); }
			40% { transform: rotate(-5deg); }
			60% { transform: rotate(5deg); }
			80% { transform: rotate(-5deg); }
			100% { transform: rotate(0deg); }
		}

		#discord-button:hover img {
			animation: rotate-shake 0.5s;
		}
`;
document.head.appendChild(style);


// OVERRIDE BUTTON STYLES //
const style2 = document.createElement('style');
style2.textContent = /*css*/`
.btn-primary {
  overflow: hidden;
  position: relative;
  background-color: transparent !important;
  color: white !important;
}

.btn-primary:hover {
  background-color: transparent !important;
  color: black !important;
	border-color: #29FF22 !important;

  & span {
    color: black !important;
    z-index: 100;
  }
  
  & a {
    color: black !important;
    z-index: 100;
  }
}

.btn-primary:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

.btn-primary::before {
  content: '';
  background-color: var(--color-accent);
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 250ms, color 250ms;
}

    :root {
      --star-bezier: cubic-bezier(.19, 1, .22, 1);
    }

    .nav-mobile-contents {
      background-color: black !important;

      & li a {
      color: white !important;
      }
    }

    .menu-item-login {
      margin-top: auto !important;
    }

    #header .header-outer .header-inner .header-display-desktop a {
      position: relative;
      text-align: center;
    }

    .collection-tabs-wrapper a::before,
    .collection-vertical-wrapper a::before, 
    .header-nav a::before,
    .nav-mobile-contents a::before {
      font-size: 0.9em;
      color: #999;
      position: absolute;
      left: -0.85em;
      pointer-events: none;
    }

    .collection-tabs-wrapper a,
    .collection-vertical-wrapper a, 
    .header-nav a,
    .nav-mobile-contents a  {
      text-decoration: none !important;
      position: relative;
			transition: color 150ms;
			
			&.active {
				pointer-events: none !important;
				cursor: default !important;
			}

      &::after {
        content: '';
        transition: transform .6s var(--star-bezier);
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: right;
        background-color: currentcolor;
      }

      &.active::after {
        transform: scaleX(1);
      }

      &:hover:not(.active) {
        opacity: 100% !important;
        text-decoration: none !important;
				color: white !important;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
  }`;

document.head.appendChild(style2);


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

		if(text.length === 0) {
			return;
		}

		$heading.attr("id", text)
			.addClass("heading-link")
			.on("click", function () {
				const url = `${window.location.origin}${window.location.pathname}#${text}`;
				navigator.clipboard.writeText(url);
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
}

if (document.body.id === "page-product") {
	$(document).ready(initProductPageNav);
}


