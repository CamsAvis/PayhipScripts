let carouselTimeoutsDict = {
	"example": {
		items: [],
		$navItems: [],
		currentIdx: 0,
		timeout: 0
	}
}

const addCarousels = () => {
	$("product-description p").each(function () {
		if($(this).text() !== "%%CAROUSEL_START%%") {
			return;
		}

		const $closestParent = $(this).parentsUntil(".product-description").last();
		initCarousel($closestParent);
	});
}

const isCarouselEnd = ($item) => $item.text().trim() === "%%CAROUSEL_END%%";

function initCarousel($start) {
	$start.html("").addClass("custom-carousel");
	const $navGroup = $("<div>").addClass("carousel-nav-group")
		.appendTo($start);

	// Gather all children between start and end markers
	let $current = $($start).next();
	let $carouselItems = []
	while ($current.length && !isCarouselEnd($current)) {
		const isFirst = $current.is($start.next());

		$current.find("img")
			.attr("data-carousel-selected", isFirst.toString())
			.each(function() {
      	const $img = $(this);

				$img.addClass("zoom-target").appendTo($start);
				addZoomer($img);

				$navGroup.append(
					$("<div>").addClass("nav-item").attr("data-nav-selected", isFirst.toString())
				)
				$carouselItems.push($img);
			})

		$current = $current.next();
	}

	let imageTimeoutKey = crypto.randomUUID();
	const currentTimeoutObject = {
		items: $carouselItems,
		$navItems: $navGroup.children(),
		currentIdx: 0,
		timeout: undefined
	};
	carouselTimeoutsDict[imageTimeoutKey] = currentTimeoutObject;

	$navGroup.children().on("click", function () {
		updateCarousel(imageTimeoutKey, $(this).index());
	});

	// Prev button
	$("<span>")
		.addClass("carousel-last")
		.html('<span class="material-symbols-outlined">arrow_back_ios</span>')
		.on("click", () => {
			const { currentIdx, items } = carouselTimeoutsDict[imageTimeoutKey]
			if(items.length === 0) { return; }

			let newImgIdx = (currentIdx - 1) % items.length;
			newImgIdx = newImgIdx < 0 ? items.length - 1 : newImgIdx;

			updateCarousel(imageTimeoutKey, newImgIdx);
		})
		.appendTo($start);

	// Next button
	$("<span>")
		.addClass("carousel-next")
		.html('<span class="material-symbols-outlined">arrow_forward_ios</span>')
		.on("click", () => {
			const { currentIdx, items } = carouselTimeoutsDict[imageTimeoutKey]
			if(items.length === 0) { return; }

			let newImgIdx = (currentIdx + 1) % items.length;
			updateCarousel(imageTimeoutKey, newImgIdx);
		})
		.appendTo($start);
	
	updateCarousel(imageTimeoutKey);
}

const updateCarousel = (imageTimeoutKey, newIdx) => {
	const { items, $navItems, timeout } = carouselTimeoutsDict[imageTimeoutKey]

	items.forEach(($el, idx) => {
		const selectedStr = (idx === newIdx).toString();
		$el.attr("data-carousel-selected", selectedStr);
		$navItems.eq(idx).attr("data-nav-selected", selectedStr);
	});

	if(timeout) {
		clearTimeout(timeout);
	}

	carouselTimeoutsDict[imageTimeoutKey].timeout = setTimeout(() => {
		if(items.length === 0) { return; }
		
		let imgIdx = (newIdx + 1) % items.length;
		carouselTimeoutsDict[imageTimeoutKey].currentIdx = imgIdx;

		updateCarousel(imageTimeoutKey, imgIdx)
	}, 10 * 1000);
}

const pauseTimeout = (imageTimeoutKey) => {
	if(!carouselTimeoutsDict[imageTimeoutKey]?.timeout) {
		return;
	}

	clearTimeout(carouselTimeoutsDict[imageTimeoutKey].timeout);
	carouselTimeoutsDict[imageTimeoutKey].timeout = undefined;
}

const resumeTimeout = (imageTimeoutKey) => {
	const timeoutObject = carouselTimeoutsDict[imageTimeoutKey];
	if(timeoutObject?.timeout) {
		return;
	}

	updateCarousel(imageTimeoutKey, timeoutObject.currentIdx);
}

function addZoomer($zoomerTarget, imageTimeoutKey) {
	let isHovered = false;
	$zoomerTarget.on("mouseenter", function() {
		isHovered = true;
		pauseTimeout(imageTimeoutKey);
	})

	$zoomerTarget.on('mousemove', function(e) {
		if (!isHovered) { return; }

		const rect = $zoomerTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		$zoomerTarget.css({
			transformOrigin: `${x}% ${y}%`,
			transform: 'scale(2)'
		})
	});

	$zoomerTarget.on('mouseleave', function() {
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
