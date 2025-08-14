const $ = require('jquery');

// js files
const { CarouselWrapper } = require("./js/product-page/carousel-manager");
const { isFoldoutStart, createFoldout } = require("./js/product-page/foldouts");
const { setupProductPageCustomLinks } = require("./js/product-page/custom-link");
const { initProductPageNav } = require("./js/product-page/product-page-nav");
const { setupDiscordLink } = require("./js/all-pages/discord");
const { initBackToTopButton } = require("./js/all-pages/back-to-top-button");
const { setupRecommendedFriends, setupImageParallax } = require("./js/home-page/home-page");
const { setupCustomButtons } = require("./js/all-pages/custom-buttons");
const { injectCssPost } = require("./js/all-pages/inject-css-post");

// css files
const requireCss = require.context("./css", true, /\.css$/);
requireCss.keys().forEach(requireCss);

const initCustomButtonHoverEffects = () => {
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
}

const setupHomePageElements = async() => {
	setupRecommendedFriends();
	setupImageParallax(
		$(".banner__media.media img")
	);
}

const setupProductDescriptionPageElements = () => {
	// carousels
	const carouselWrapper = new CarouselWrapper();
	carouselWrapper.initCarousels();

	// get children of the product description
	const $productDescriptionChildren = $(".product-description > *");

	// foldouts
	$productDescriptionChildren.each((_, element) => {
		const $element = $(element);
		if (!isFoldoutStart($element)) {
			return;
		}
		createFoldout($element);

		// setupProductPageCustomLinks($element);
	});

	// navigation
	initProductPageNav();
	

	// page shortcuts
	// $productDescriptionChildren
	// 	.each((_, element) => {
	// 		setupProductPageCustomLinks($(element));
	// 	});
}

$(function() {
	const pathName = window.location.pathname;

	// individual pages //
	if (pathName === "/") {
		setupHomePageElements();
	}

	// product page -> '/b/123a3' //
	if(pathName.match(/\/b\/([a-zA-Z]|[0-9]){5}/)) {
		setupProductDescriptionPageElements();
	}

	// all pages //
	const initAllPageFunctions = async() => {
		setupDiscordLink();
		initBackToTopButton();
		setupCustomButtons();
		initCustomButtonHoverEffects();
		injectCssPost();
	}

	initAllPageFunctions();
});