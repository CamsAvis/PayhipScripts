if (document.body.id === "page-product") {
	$(document).ready(addCarousels);
}

const addCarousels = () => {
	$("p strong em u").each(function () {
		if ($(this).html().trim() === "%%CAROUSEL_START%%") {
			initCarousel(this);
		}
	})
}

const isCarouselEnd = (item) => item.innerText.trim() !== "%%CAROUSEL_END%%"

function initCarousel($start) {
	$($start).html("").addClass("custom-carousel");
	const $navGroup = $("<div>").addClass("carousel-nav-group")
		.appendTo($start);

	// Gather all children between start and end markers
	let $current = $($start).next();
	let $carouselItems = []
	while (current && isCarouselEnd(current)) {
		const isFirst = current === $start.next();

		const $carouselEl = $(current).find("img")
			.attr("data-coursel-selected", isFirst.toString())
			.appendTo($start);

		if ($carouselEl.is("img")) {
			$carouselEl.addClass("zoom-target");
			addZoomer($carouselEl);
		}

		$navGroup.append(
			$("<div>").addClass("nav-item").attr("data-nav-selected", isFirst.toString())
		)

		$carouselItems.push($carouselEl);
		$current = $current.next();
	}

	let imageTimeout;
	$navGroup.children().on("click", function () {
		updateCarousel(
			$carouselItems,
			$navGroup.children(),
			imageTimeout,
			$(this).index()
		);
	});

	// Prev button
	$("<span>")
		.addClass("carousel-last")
		.html('<span class="material-symbols-outlined">arrow_back_ios</span>')
		.on("click", () => {
			let lastImageIdx = (imgIdx - 1) % items.length;
			imgIdx = lastImageIdx < 0 ? items.length - 1 : lastImageIdx;
			updateCarousel(items, imgIdx);
		})
		.appendTo($start);

	// Next button
	$("<span>")
		.addClass("carousel-next")
		.html('<span class="material-symbols-outlined">arrow_forward_ios</span>')
		.on("click", () => {
			imgIdx = (imgIdx + 1) % items.length;
			updateCarousel(items, imgIdx);
		})
		.appendTo($start);

	console.log("Carousel initialized with", items.length, "items");
	updateCarousel(items, 0);
}

const updateCarousel = ($items, $navDivs, imageTimeout, imgIdx) => {
	clearInterval(imageTimeout);

	$items.each(function (idx) {
		const selectedStr = (idx === imgIdx).toString();
		$items[i].attr("data-carousel-selected", selectedStr);
		$navDivs[i].attr("data-nav-selected", selectedStr);
	});

	// 10 seconds
	imageTimeout = setTimeout(() => {
		imgIdx = (imgIdx + 1) % items.length;
		updateCarousel(items, imgIdx);
	}, 10 * 1000);
}

function addZoomer($zoomerTarget) {
	let isHovered = false;
	$zoomerTarget.on("mouseenter", function() {
		isHovered = true;
		clearTimeout
	})

	$zoomerTarget.addEventListener("mouseenter", () => {
		isHovered = true;
		clearTimeout(imageTimeout);
	});

	$zoomerTarget.addEventListener('mousemove', (e) => {
		if (!isHovered) { return; }

		const rect = $zoomerTarget.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		$zoomerTarget.style.transformOrigin = `${x}% ${y}%`;
		$zoomerTarget.style.transform = 'scale(2)';
	});

	$zoomerTarget.addEventListener('mouseleave', () => {
		isHovered = false
		$zoomerTarget.style.transform = 'scale(1)';
		$zoomerTarget.style.transformOrigin = 'center center';
		updateCarousel(images, imgIdx);
	});
}
