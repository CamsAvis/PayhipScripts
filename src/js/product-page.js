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
		$(navItems[idx]).attr("data-nav-selected", selectedStr);
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

		const rect = $zoomerTarget[0].getBoundingClientRect();
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
