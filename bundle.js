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

	// extract time and unit
	const reResults = FOLDOUT_TRANSITION_DURATION_STR.match(/(?<time>[0-9]+)(?<unit>\w+)/);
	const animDurationNumber = parseInt(reResults?.groups?.time || "500");
	const animDurationUnit = reResults?.groups?.unit || "ms";

	const $foldoutContainer = $("<div>")
		.addClass("foldout-container")
		.attr("data-folded-out", foldedOutByDefault.toString())
		.css('--anim-foldout-dura', `${animDurationNumber}${animDurationUnit}`);

	// header
	const $foldoutHeader = $("<div>")
		.addClass("foldout-header")
		.css({
			'--anim-foldout-dura': `${animDurationNumber}${animDurationUnit}`,
			pointerEvents: "all"
		})
		.on("click", function () {
			// toggle off header interactions
			const $header = $(this);
			const isFoldedOut = $header.attr("data-folded-out") === "true";
			$header.css({ pointerEvents: "none" });

			// add animation to foldout container
			const animClassName = isFoldedOut ? "anim-foldout-in" : "anim-foldout-out";
			$foldoutContainer.removeClass(animClassName).addClass(animClassName);

			// add animation to foldout header ::before psuedo element
			const animClassNameBefore = isFoldedOut ? "anim-foldout-before-in" : "anim-foldout-before-out";
			$header.removeClass(animClassNameBefore).addClass(animClassNameBefore);

			// remove the class, restore pointer events, and update data attributes
			setTimeout(() => {
				$header
					.css({ pointerEvents: "all" })
					.attr("data-folded-out", (!isFoldedOut).toString())
					.removeClass(animClassNameBefore);

				$foldoutContainer
					.attr("data-folded-out", (!isFoldedOut).toString())
					.removeClass(animClassName);

			}, animDurationNumber);
		});

	// insert title
	const $titleElement = $rootElement.next();
	const $firstChildElement = $titleElement.next();
	$titleElement.appendTo($foldoutHeader);

	// add all to root
	$rootElement.html("").append(
		$foldoutHeader, $foldoutContainer
	)

	// add all following children to the foldout container
	let $current = $firstChildElement;
	while ($current.length && !isEnd($current)) {
		if (isStart($current)) {
			createFoldout($current);
			continue;
		}

		const $next = $current.next();
		$current.appendTo($foldoutContainer);
		$current = $next;
	}

	if (isEnd($current)) {
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


