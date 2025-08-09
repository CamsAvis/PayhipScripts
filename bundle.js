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

    // Add carousels
    if (document.body.id === "page-product") {
      addCarousels();
    }
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

if (document.body.id === "page-product") {
	$(document).ready(initProductPageNav);
}


let carouselTimeoutsDict = {
	"example": {
		items: [],
		navItems: [],
		currentIdx: 0,
		timeout: 0
	}
}

const addCarousels = () => {
	$(".product-description > p").each(function () {
		if ($(this).text().trim() !== "%%CAROUSEL_START%%") {
			return;
		}

		console.log("found carousel start");
		initCarousel($(this));
	});
}

const isCarouselEnd = ($item) => $item.text().trim() === "%%CAROUSEL_END%%";

function initCarousel($start) {
	let imageTimeoutKey = crypto.randomUUID();

	$start.html("").addClass("custom-carousel");
	const $navGroup = $("<div>").addClass("carousel-nav-group");

	// Gather all children between start and end markers
	let $current = $($start).next();
	let imgItems = [];
	let navItems = [];
	let navItemIdx = 0;
	while ($current.length && !isCarouselEnd($current)) {
		const isFirst = $current.is($start);

		$current.find("img").each(function () {
			const $img = $(this);

			$img.addClass("zoom-target")
				.attr("data-carousel-selected", isFirst.toString())
				.appendTo($start);

			addImageZoomer($img);

			const $navItem = $("<div>")
				.addClass("nav-item")
				.attr("data-nav-selected", isFirst.toString())
				.on("click", function () {
					updateCarousel(imageTimeoutKey, navItemIdx);
				})
				.appendTo($navGroup);

			imgItems.push($img);
			navItems.push($navItem);

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

	const currentTimeoutObject = {
		items: imgItems,
		navItems: navItems,
		currentIdx: 0,
		timeout: undefined
	};
	carouselTimeoutsDict[imageTimeoutKey] = currentTimeoutObject;

	// Prev button
	$("<div>")
		.addClass("carousel-navigator-arrow")
		.addClass("carousel-navigator-arrow-prev")
		.html('<span class="material-symbols-outlined">arrow_back_ios</span>')
		.on("click", () => {
			const { currentIdx, items } = carouselTimeoutsDict[imageTimeoutKey]
			if (items.length === 0) { return; }

			let newImgIdx = (currentIdx - 1) % items.length;
			newImgIdx = newImgIdx < 0 ? items.length - 1 : newImgIdx;

			updateCarousel(imageTimeoutKey, newImgIdx);
		})
		.appendTo($start);

	// Next button
	$("<div>")
		.addClass("carousel-navigator-arrow")
		.addClass("carousel-navigator-arrow-next")
		.html('<span class="material-symbols-outlined">arrow_forward_ios</span>')
		.on("click", () => {
			const { currentIdx, items } = carouselTimeoutsDict[imageTimeoutKey]
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

const updateCarousel = (imageTimeoutKey, newIdx) => {
	const { items, navItems, timeout } = carouselTimeoutsDict[imageTimeoutKey]

	if (timeout) {
		clearTimeout(timeout);
	}

	items.forEach(($el, idx) => {
		const selectedStr = (idx === newIdx).toString();
		$el.attr("data-carousel-selected", selectedStr);
		navItems.eq(idx).attr("data-nav-selected", selectedStr);
	});

	carouselTimeoutsDict[imageTimeoutKey].timeout = setTimeout(() => {
		if (items.length === 0) { return; }

		let nextImgIdx = (newIdx + 1) % items.length;
		carouselTimeoutsDict[imageTimeoutKey].currentIdx = nextImgIdx;

		updateCarousel(imageTimeoutKey, nextImgIdx)
	}, 10 * 1000);
}

const pauseTimeout = (imageTimeoutKey) => {
	if (!carouselTimeoutsDict[imageTimeoutKey]?.timeout) {
		return;
	}

	clearTimeout(carouselTimeoutsDict[imageTimeoutKey].timeout);
	carouselTimeoutsDict[imageTimeoutKey].timeout = undefined;
}

const resumeTimeout = (imageTimeoutKey) => {
	const timeoutObject = carouselTimeoutsDict[imageTimeoutKey];
	if (timeoutObject?.timeout) {
		return;
	}

	updateCarousel(imageTimeoutKey, timeoutObject.currentIdx);
}

function addImageZoomer($zoomerTarget, imageTimeoutKey) {
	let isHovered = false;
	$zoomerTarget.on("mouseenter", function () {
		isHovered = true;
		pauseTimeout(imageTimeoutKey);
	})

	$zoomerTarget.on('mousemove', function (e) {
		if (!isHovered) { return; }

		const rect = $zoomerTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		$zoomerTarget.css({
			transformOrigin: `${x}% ${y}%`,
			transform: 'scale(2)'
		})
	});

	$zoomerTarget.on('mouseleave', function () {
		isHovered = false;

		$zoomerTarget.css({
			transformOrigin: 'center center',
			transform: 'scale(1)'
		});

		resumeTimeout(imageTimeoutKey);
	});
}

if (document.body.id === "page-product") {
	$(document).ready(addCarousels);
}


