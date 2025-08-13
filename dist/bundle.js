/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --star-bezier: cubic-bezier(0.19, 1, 0.22, 1);
	--color-primary-light-100: #f4f4f4ff;
	--color-primary-light-200: #cccccc;
	--color-primary-light-400: rgba(255, 255, 255, 0.85);
  --color-accent: #9aff9e;
}

html {
	scroll-behavior: smooth;
	scroll-padding-top: 10vh;
}

header {
  background-color: rgba(12, 12, 12, 0.2) !important;
  backdrop-filter: blur(3px);
  overflow: hidden;
}

strong, em {
  color: white !important;
}

h1, h2, h3, h4 {
	text-transform: none !important;
}

h2 strong, h2 em,
h3 strong, h3 em,
h4 strong, h4 em {
  letter-spacing: 0.1rem !important;
  font-weight: 400 !important;
}`, "",{"version":3,"sources":["webpack://./src/css/basis.css"],"names":[],"mappings":"AAAA;EACE,6CAA6C;CAC9C,oCAAoC;CACpC,kCAAkC;CAClC,oDAAoD;EACnD,uBAAuB;AACzB;;AAEA;CACC,uBAAuB;CACvB,wBAAwB;AACzB;;AAEA;EACE,kDAAkD;EAClD,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;;;EAGE,iCAAiC;EACjC,2BAA2B;AAC7B","sourcesContent":[":root {\r\n  --star-bezier: cubic-bezier(0.19, 1, 0.22, 1);\r\n\t--color-primary-light-100: #f4f4f4ff;\r\n\t--color-primary-light-200: #cccccc;\r\n\t--color-primary-light-400: rgba(255, 255, 255, 0.85);\r\n  --color-accent: #9aff9e;\r\n}\r\n\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n\tscroll-padding-top: 10vh;\r\n}\r\n\r\nheader {\r\n  background-color: rgba(12, 12, 12, 0.2) !important;\r\n  backdrop-filter: blur(3px);\r\n  overflow: hidden;\r\n}\r\n\r\nstrong, em {\r\n  color: white !important;\r\n}\r\n\r\nh1, h2, h3, h4 {\r\n\ttext-transform: none !important;\r\n}\r\n\r\nh2 strong, h2 em,\r\nh3 strong, h3 em,\r\nh4 strong, h4 em {\r\n  letter-spacing: 0.1rem !important;\r\n  font-weight: 400 !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 26:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(669);
var setupDiscordLink = function setupDiscordLink() {
  // Discord button
  var $button = $("<div>").attr("id", "discord-button").attr("title", "Join my Discord!").on("click", function () {
    window.open('https://discord.com/invite/RCtpFfV8HY', '_blank');
  }).appendTo("body");
  $("<img>").attr("src", 'https://img.icons8.com/?size=100&id=SAZw8WuWnQea&format=png&color=000000').attr("alt", "Discord").appendTo($button);
};
module.exports = {
  setupDiscordLink: setupDiscordLink
};

/***/ }),

/***/ 35:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.custom-carousel[data-show-arrows="true"] .carousel-image-container {
	grid-column: 2 / 3;
}

.custom-carousel[data-show-arrows="false"] .carousel-navigator-arrow {
	display: none;
}

.custom-carousel[data-show-arrows="false"] .carousel-image-container {
	grid-column: 1 / 4;
}

.custom-carousel[data-show-nav="true"] .carousel-nav-group {
	display: flex;
}

.custom-carousel[data-show-nav="false"] {
	grid-template-rows: 1fr;
}

.custom-carousel[data-show-nav="false"] .carousel-nav-group {
	display: none;
}

.custom-carousel {
  position: relative;
  width: 100%;
	height: fit-content;

	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: 1fr 2rem;
	place-items: center;
	gap: 0.5rem;
}

.carousel-image-container {
	position: relative;
	overflow: hidden;
	width: 100%;
	aspect-ratio: 16 / 9;
}

.custom-carousel img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
	object-fit: cover;
  transition: opacity 500ms;
	opacity: 0%;
	pointer-events: none;
	transition: 
		opacity 500ms,
		transform 200ms,
		transform-origin 200ms;
}

.custom-carousel img:hover {
	transition: 
		opacity 0ms,
		transform 0ms,
		transform-origin 0ms;
}

.custom-carousel img[data-carousel-selected="true"] {
	opacity: 100%;
	pointer-events: all;
}

.carousel-navigator-arrow {
	user-select: none;
  cursor: pointer;
  height: 100%;
	padding-inline: clamp(0.2rem, 2vw, 0.35rem);
  background-color: rgba(12,12,12,0.2);
  display: grid;
  place-items: center;
  color: white;
  top: 50%;
	cursor: pointer;
}

@media screen and (max-width: 650px) {
	.carousel-navigator-arrow {
		height: 100%;
	}

	.carousel-navigator-arrow {
		grid-row: 1 / 2;
	}

	.carousel-image-container {
		grid-row: 1 / 2;
		grid-column: 1 / 4;
	}

	.carousel-nav-group {
		display: none;
	}
}

.carousel-navigator-arrow:hover {
	background-color: rgba(12,12,12,0.5);
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

.zoom-target {
  display: inline-block;
  transition: transform 0.2s ease;
  transform-origin: center center;
}

.carousel-nav-group {
	grid-column: 1 / 4;
	z-index: 2;

	display: flex;
	flex-direction: row;
	gap: clamp(1rem, 2vw, 1.5rem);

	transition: opacity 200ms;
	pointer-events: none;
}

.carousel-nav-group .nav-item {
		background-color: gray;
		transition: background-color 200ms;
		cursor: pointer;
		height: clamp(5px, 2vw, 10px);
		width: clamp(5px, 2.5vw, 50px);
		/* border-radius: 50%; */
		margin-block: 0.5rem;
}

.carousel-nav-group .nav-item:hover,
.carousel-nav-group .nav-item[data-nav-selected="true"] {
	background-color: white;
}

.custom-carousel:hover .carousel-nav-group {
	opacity: 1;
	pointer-events: all;
}
`, "",{"version":3,"sources":["webpack://./src/css/carousel-manager.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,aAAa;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;CACZ,mBAAmB;;CAEnB,aAAa;CACb,oCAAoC;CACpC,4BAA4B;CAC5B,mBAAmB;CACnB,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,WAAW;CACX,oBAAoB;AACrB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;CACZ,iBAAiB;EAChB,yBAAyB;CAC1B,WAAW;CACX,oBAAoB;CACpB;;;wBAGuB;AACxB;;AAEA;CACC;;;sBAGqB;AACtB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;EAChB,eAAe;EACf,YAAY;CACb,2CAA2C;EAC1C,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,QAAQ;CACT,eAAe;AAChB;;AAEA;CACC;EACC,YAAY;CACb;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,eAAe;EACf,kBAAkB;CACnB;;CAEA;EACC,aAAa;CACd;AACD;;AAEA;CACC,oCAAoC;AACrC;;AAEA;EACE;;;;;AAKF;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;EAC/B,+BAA+B;AACjC;;AAEA;CACC,kBAAkB;CAClB,UAAU;;CAEV,aAAa;CACb,mBAAmB;CACnB,6BAA6B;;CAE7B,yBAAyB;CACzB,oBAAoB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,eAAe;EACf,6BAA6B;EAC7B,8BAA8B;EAC9B,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA;;CAEC,uBAAuB;AACxB;;AAEA;CACC,UAAU;CACV,mBAAmB;AACpB","sourcesContent":[".custom-carousel[data-show-arrows=\"true\"] .carousel-image-container {\r\n\tgrid-column: 2 / 3;\r\n}\r\n\r\n.custom-carousel[data-show-arrows=\"false\"] .carousel-navigator-arrow {\r\n\tdisplay: none;\r\n}\r\n\r\n.custom-carousel[data-show-arrows=\"false\"] .carousel-image-container {\r\n\tgrid-column: 1 / 4;\r\n}\r\n\r\n.custom-carousel[data-show-nav=\"true\"] .carousel-nav-group {\r\n\tdisplay: flex;\r\n}\r\n\r\n.custom-carousel[data-show-nav=\"false\"] {\r\n\tgrid-template-rows: 1fr;\r\n}\r\n\r\n.custom-carousel[data-show-nav=\"false\"] .carousel-nav-group {\r\n\tdisplay: none;\r\n}\r\n\r\n.custom-carousel {\r\n  position: relative;\r\n  width: 100%;\r\n\theight: fit-content;\r\n\r\n\tdisplay: grid;\r\n\tgrid-template-columns: auto 1fr auto;\r\n\tgrid-template-rows: 1fr 2rem;\r\n\tplace-items: center;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.carousel-image-container {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\twidth: 100%;\r\n\taspect-ratio: 16 / 9;\r\n}\r\n\r\n.custom-carousel img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n\tobject-fit: cover;\r\n  transition: opacity 500ms;\r\n\topacity: 0%;\r\n\tpointer-events: none;\r\n\ttransition: \r\n\t\topacity 500ms,\r\n\t\ttransform 200ms,\r\n\t\ttransform-origin 200ms;\r\n}\r\n\r\n.custom-carousel img:hover {\r\n\ttransition: \r\n\t\topacity 0ms,\r\n\t\ttransform 0ms,\r\n\t\ttransform-origin 0ms;\r\n}\r\n\r\n.custom-carousel img[data-carousel-selected=\"true\"] {\r\n\topacity: 100%;\r\n\tpointer-events: all;\r\n}\r\n\r\n.carousel-navigator-arrow {\r\n\tuser-select: none;\r\n  cursor: pointer;\r\n  height: 100%;\r\n\tpadding-inline: clamp(0.2rem, 2vw, 0.35rem);\r\n  background-color: rgba(12,12,12,0.2);\r\n  display: grid;\r\n  place-items: center;\r\n  color: white;\r\n  top: 50%;\r\n\tcursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n\t.carousel-navigator-arrow {\r\n\t\theight: 100%;\r\n\t}\r\n\r\n\t.carousel-navigator-arrow {\r\n\t\tgrid-row: 1 / 2;\r\n\t}\r\n\r\n\t.carousel-image-container {\r\n\t\tgrid-row: 1 / 2;\r\n\t\tgrid-column: 1 / 4;\r\n\t}\r\n\r\n\t.carousel-nav-group {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n.carousel-navigator-arrow:hover {\r\n\tbackground-color: rgba(12,12,12,0.5);\r\n}\r\n\r\n.material-symbols-outlined {\r\n  font-variation-settings:\r\n  'FILL' 0,\r\n  'wght' 400,\r\n  'GRAD' 0,\r\n  'opsz' 24\r\n}\r\n\r\n.zoom-target {\r\n  display: inline-block;\r\n  transition: transform 0.2s ease;\r\n  transform-origin: center center;\r\n}\r\n\r\n.carousel-nav-group {\r\n\tgrid-column: 1 / 4;\r\n\tz-index: 2;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tgap: clamp(1rem, 2vw, 1.5rem);\r\n\r\n\ttransition: opacity 200ms;\r\n\tpointer-events: none;\r\n}\r\n\r\n.carousel-nav-group .nav-item {\r\n\t\tbackground-color: gray;\r\n\t\ttransition: background-color 200ms;\r\n\t\tcursor: pointer;\r\n\t\theight: clamp(5px, 2vw, 10px);\r\n\t\twidth: clamp(5px, 2.5vw, 50px);\r\n\t\t/* border-radius: 50%; */\r\n\t\tmargin-block: 0.5rem;\r\n}\r\n\r\n.carousel-nav-group .nav-item:hover,\r\n.carousel-nav-group .nav-item[data-nav-selected=\"true\"] {\r\n\tbackground-color: white;\r\n}\r\n\r\n.custom-carousel:hover .carousel-nav-group {\r\n\topacity: 1;\r\n\tpointer-events: all;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 36:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(669);
var initBackToTopButton = function initBackToTopButton() {
  $("<a href='#'>").html("<span class=\"material-symbols-outlined\">arrow_upward_alt</span>").addClass("back-to-top-button").appendTo(document.body);
};
module.exports = {
  initBackToTopButton: initBackToTopButton
};

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 86:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(669);
var injectCssPost = function injectCssPost() {
  $("<style>").appendTo("head").text(/*css*/"\n\t\t\t#discord-button {\n\t\t\t\tposition: fixed;\n\t\t\t\tbottom: 20px;\n\t\t\t\tright: 20px;\n\t\t\t\twidth: 60px;\n\t\t\t\theight: 60px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: transform 200ms ease;\n\t\t\t\tz-index: 9999;\n\t\t\t}\n\n\t\t\t#discord-button:hover {\n\t\t\t\ttransform: scale(1.2);\n\t\t\t}\n\n\t\t\t#discord-button img {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t@keyframes rotate-shake {\n\t\t\t\t0% { transform: rotate(0deg); }\n\t\t\t\t20% { transform: rotate(5deg); }\n\t\t\t\t40% { transform: rotate(-5deg); }\n\t\t\t\t60% { transform: rotate(5deg); }\n\t\t\t\t80% { transform: rotate(-5deg); }\n\t\t\t\t100% { transform: rotate(0deg); }\n\t\t\t}\n\n\t\t\t#discord-button:hover img {\n\t\t\t\tanimation: rotate-shake 0.5s;\n\t\t\t}\n\n\t\t\t.btn-primary {\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t\tbackground-color: transparent !important;\n\t\t\tcolor: white !important;\n\t\t}\n\n\t\t.btn-primary:hover {\n\t\t\tbackground-color: transparent !important;\n\t\t\tcolor: black !important;\n\t\t\tborder-color: #29FF22 !important;\n\n\t\t\t& span {\n\t\t\t\tcolor: black !important;\n\t\t\t\tz-index: 100;\n\t\t\t}\n\t\t\t\n\t\t\t& a {\n\t\t\t\tcolor: black !important;\n\t\t\t\tz-index: 100;\n\t\t\t}\n\t\t}\n\n\t\t.btn-primary:hover::before {\n\t\t\ttransform: scaleX(1);\n\t\t\ttransform-origin: center left;\n\t\t}\n\n\t\t.btn-primary::before {\n\t\t\tcontent: '';\n\t\t\tbackground-color: var(--color-accent);\n\t\t\tposition: absolute;\n\t\t\tz-index: -1;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\ttransform-origin: center right;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransition: transform 250ms, color 250ms;\n\t\t}\n\n\t\t\t:root {\n\t\t\t\t--star-bezier: cubic-bezier(.19, 1, .22, 1);\n\t\t\t}\n\n\t\t\t.nav-mobile-contents {\n\t\t\t\tbackground-color: black !important;\n\n\t\t\t\t& li a {\n\t\t\t\tcolor: white !important;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.menu-item-login {\n\t\t\t\tmargin-top: auto !important;\n\t\t\t}\n\n\t\t\t#header .header-outer .header-inner .header-display-desktop a {\n\t\t\t\tposition: relative;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t.collection-tabs-wrapper a::before,\n\t\t\t.collection-vertical-wrapper a::before, \n\t\t\t.header-nav a::before,\n\t\t\t.nav-mobile-contents a::before {\n\t\t\t\tfont-size: 0.9em;\n\t\t\t\tcolor: #999;\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: -0.85em;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\n\t\t\t.collection-tabs-wrapper a,\n\t\t\t.collection-vertical-wrapper a, \n\t\t\t.header-nav a,\n\t\t\t.nav-mobile-contents a  {\n\t\t\t\ttext-decoration: none !important;\n\t\t\t\tposition: relative;\n\t\t\t\ttransition: color 150ms;\n\t\t\t\t\n\t\t\t\t&.active {\n\t\t\t\t\tpointer-events: none !important;\n\t\t\t\t\tcursor: default !important;\n\t\t\t\t}\n\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: '';\n\t\t\t\t\ttransition: transform .6s var(--star-bezier);\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tbottom: -0.3rem;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 1px;\n\t\t\t\t\ttransform: scaleX(0);\n\t\t\t\t\ttransform-origin: right;\n\t\t\t\t\tbackground-color: currentcolor;\n\t\t\t\t}\n\n\t\t\t\t&.active::after {\n\t\t\t\t\ttransform: scaleX(1);\n\t\t\t\t}\n\n\t\t\t\t&:hover:not(.active) {\n\t\t\t\t\topacity: 100% !important;\n\t\t\t\t\ttext-decoration: none !important;\n\t\t\t\t\tcolor: white !important;\n\t\t\t\t}\n\n\t\t\t\t&:hover::after {\n\t\t\t\t\ttransform: scaleX(1);\n\t\t\t\t\ttransform-origin: left;\n\t\t\t\t}\n\t");
};
module.exports = {
  injectCssPost: injectCssPost
};

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(669);
var setupRecommendedFriends = function setupRecommendedFriends() {
  var selector = "\n\t\tdiv[data-section-key=\"testimonial-image-columns\"] \n\t\t.column-item-wrapper:has(.image-row-contents):has(.text-row-contents)\n\t";
  $(selector).on("mouseenter", function () {
    var $img = $(this).find(".image-row-contents img");
    if ($img) {
      $img.css("scale", "105%");
    }
  }).on("mouseleave", function () {
    var $img = $(this).find(".image-row-contents img");
    if ($img) {
      $img.css("scale", "100%");
    }
  }).on("click", function () {
    var link = wrapper.querySelectorAll(".text-row-contents a")[0];
    if (link) {
      window.open(link.href, '_blank');
    }
  });
};
var setupImageParallax = function setupImageParallax($element) {
  $element.on("scroll", function () {
    var maxTranslate = window.innerHeight * 0.15;
    var scrollMax = window.innerHeight;
    var percent = Math.min(window.scrollY / scrollMax, 1);
    var translateY = percent * maxTranslate;
    $(this).css("transform", "translate3d(0, ".concat(translateY, "px, 0)"));
  });
};
module.exports = {
  setupRecommendedFriends: setupRecommendedFriends,
  setupImageParallax: setupImageParallax
};

/***/ }),

/***/ 161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.foldout-header {
	--anim-foldout-curve-return: cubic-bezier(.45,0,.26,1.02);
	--anim-foldout-dura: 500ms;

	padding-block: 0.5rem;
	display: flex;
	position: relative;
}

.foldout-header h1,
.foldout-header h2,
.foldout-header h3,
.foldout-header h4,
.foldout-header p,
.foldout-header span {
	padding: 0 !important;
	margin: 0 !important;
}

.foldout-header:hover {
	background-color: rgba(12,12,12,0.35);
	cursor: pointer;
	user-select: none;
}

.foldout-header::before {
	font-family: "Material Symbols Outlined";
	content: ">";
	content: '\\e5e1';
	margin-inline: 8px;
	
	transition: transform calc(var(--anim-foldout-dura) / 2);
}

.foldout-header[data-folded-out='true']::before {
	transform: rotate(90deg);
}

.foldout-container {
	--anim-foldout-dura: 500ms;
	--anim-foldout-curve: cubic-bezier(.68,0,.4,.99);
	--anim-foldout-curve-return: cubic-bezier(.68,0,.4,.99);
	/*cubic-bezier(.14,.66,.28,.85);*/
	--foldout-container-natural-height: 500vh;

	margin-left: clamp(0px, 4vw, 1.5rem);
	max-height: var(--foldout-container-natural-height);

	overflow: hidden;
}

.foldout-container[data-folded-out='true'] {
	max-height: var(--foldout-container-natural-height);
	overflow: auto;
}

.foldout-container[data-folded-out='true']::before {
	transform: rotate(90deg);
}

.foldout-container[data-folded-out='false'] {
	max-height: 0;
	overflow: hidden;
}

.foldout-container[data-folded-out='false']::before {
	transform: rotate(0deg);
	transition: transform var(--anim-foldout-dura) var(--anim-foldout-curve);
}

.anim-foldout-out {
	animation: foldout-out var(--anim-foldout-dura) var(--anim-foldout-curve) forwards;
}

.anim-foldout-in {
	animation: foldout-in var(--anim-foldout-dura) var(--anim-foldout-curve-return) forwards;
}

.anim-foldout-before-out {
	animation: foldout-out-before var(--anim-foldout-before-dura) var(--anim-foldout-curve) forwards;
}

.anim-foldout-before-in {
	animation: foldout-in-before var(--anim-foldout-before-dura) var(--anim-foldout-curve-return) forwards;
}

@keyframes foldout-out-before {
	from { transform: rotate(0deg); }
	to { transform: rotate(90deg); }
}

@keyframes foldout-in-before {
	from { transform: rotate(90deg); }
	to { transform: rotate(0deg); }
}

@keyframes foldout-out {
	0% {
		max-height: 0;
		overflow: hidden;
	}
	99.9999% {
		overflow: hidden;
		max-height: var(--foldout-container-natural-height)
	}
	100% {
		max-height: var(--foldout-container-natural-height);
		overflow: auto;
	}
}

@keyframes foldout-in {
	from {
		max-height: var(--foldout-container-natural-height);
		overflow: hidden;
	}
	to {
		max-height: 0;
		overflow: hidden;
	}
}
`, "",{"version":3,"sources":["webpack://./src/css/foldouts.css"],"names":[],"mappings":"AAAA;CACC,yDAAyD;CACzD,0BAA0B;;CAE1B,qBAAqB;CACrB,aAAa;CACb,kBAAkB;AACnB;;AAEA;;;;;;CAMC,qBAAqB;CACrB,oBAAoB;AACrB;;AAEA;CACC,qCAAqC;CACrC,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,wCAAwC;CACxC,YAAY;CACZ,gBAAgB;CAChB,kBAAkB;;CAElB,wDAAwD;AACzD;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,0BAA0B;CAC1B,gDAAgD;CAChD,uDAAuD;CACvD,iCAAiC;CACjC,yCAAyC;;CAEzC,oCAAoC;CACpC,mDAAmD;;CAEnD,gBAAgB;AACjB;;AAEA;CACC,mDAAmD;CACnD,cAAc;AACf;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,uBAAuB;CACvB,wEAAwE;AACzE;;AAEA;CACC,kFAAkF;AACnF;;AAEA;CACC,wFAAwF;AACzF;;AAEA;CACC,gGAAgG;AACjG;;AAEA;CACC,sGAAsG;AACvG;;AAEA;CACC,OAAO,uBAAuB,EAAE;CAChC,KAAK,wBAAwB,EAAE;AAChC;;AAEA;CACC,OAAO,wBAAwB,EAAE;CACjC,KAAK,uBAAuB,EAAE;AAC/B;;AAEA;CACC;EACC,aAAa;EACb,gBAAgB;CACjB;CACA;EACC,gBAAgB;EAChB;CACD;CACA;EACC,mDAAmD;EACnD,cAAc;CACf;AACD;;AAEA;CACC;EACC,mDAAmD;EACnD,gBAAgB;CACjB;CACA;EACC,aAAa;EACb,gBAAgB;CACjB;AACD","sourcesContent":[".foldout-header {\r\n\t--anim-foldout-curve-return: cubic-bezier(.45,0,.26,1.02);\r\n\t--anim-foldout-dura: 500ms;\r\n\r\n\tpadding-block: 0.5rem;\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n}\r\n\r\n.foldout-header h1,\r\n.foldout-header h2,\r\n.foldout-header h3,\r\n.foldout-header h4,\r\n.foldout-header p,\r\n.foldout-header span {\r\n\tpadding: 0 !important;\r\n\tmargin: 0 !important;\r\n}\r\n\r\n.foldout-header:hover {\r\n\tbackground-color: rgba(12,12,12,0.35);\r\n\tcursor: pointer;\r\n\tuser-select: none;\r\n}\r\n\r\n.foldout-header::before {\r\n\tfont-family: \"Material Symbols Outlined\";\r\n\tcontent: \">\";\r\n\tcontent: '\\e5e1';\r\n\tmargin-inline: 8px;\r\n\t\r\n\ttransition: transform calc(var(--anim-foldout-dura) / 2);\r\n}\r\n\r\n.foldout-header[data-folded-out='true']::before {\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.foldout-container {\r\n\t--anim-foldout-dura: 500ms;\r\n\t--anim-foldout-curve: cubic-bezier(.68,0,.4,.99);\r\n\t--anim-foldout-curve-return: cubic-bezier(.68,0,.4,.99);\r\n\t/*cubic-bezier(.14,.66,.28,.85);*/\r\n\t--foldout-container-natural-height: 500vh;\r\n\r\n\tmargin-left: clamp(0px, 4vw, 1.5rem);\r\n\tmax-height: var(--foldout-container-natural-height);\r\n\r\n\toverflow: hidden;\r\n}\r\n\r\n.foldout-container[data-folded-out='true'] {\r\n\tmax-height: var(--foldout-container-natural-height);\r\n\toverflow: auto;\r\n}\r\n\r\n.foldout-container[data-folded-out='true']::before {\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.foldout-container[data-folded-out='false'] {\r\n\tmax-height: 0;\r\n\toverflow: hidden;\r\n}\r\n\r\n.foldout-container[data-folded-out='false']::before {\r\n\ttransform: rotate(0deg);\r\n\ttransition: transform var(--anim-foldout-dura) var(--anim-foldout-curve);\r\n}\r\n\r\n.anim-foldout-out {\r\n\tanimation: foldout-out var(--anim-foldout-dura) var(--anim-foldout-curve) forwards;\r\n}\r\n\r\n.anim-foldout-in {\r\n\tanimation: foldout-in var(--anim-foldout-dura) var(--anim-foldout-curve-return) forwards;\r\n}\r\n\r\n.anim-foldout-before-out {\r\n\tanimation: foldout-out-before var(--anim-foldout-before-dura) var(--anim-foldout-curve) forwards;\r\n}\r\n\r\n.anim-foldout-before-in {\r\n\tanimation: foldout-in-before var(--anim-foldout-before-dura) var(--anim-foldout-curve-return) forwards;\r\n}\r\n\r\n@keyframes foldout-out-before {\r\n\tfrom { transform: rotate(0deg); }\r\n\tto { transform: rotate(90deg); }\r\n}\r\n\r\n@keyframes foldout-in-before {\r\n\tfrom { transform: rotate(90deg); }\r\n\tto { transform: rotate(0deg); }\r\n}\r\n\r\n@keyframes foldout-out {\r\n\t0% {\r\n\t\tmax-height: 0;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t99.9999% {\r\n\t\toverflow: hidden;\r\n\t\tmax-height: var(--foldout-container-natural-height)\r\n\t}\r\n\t100% {\r\n\t\tmax-height: var(--foldout-container-natural-height);\r\n\t\toverflow: auto;\r\n\t}\r\n}\r\n\r\n@keyframes foldout-in {\r\n\tfrom {\r\n\t\tmax-height: var(--foldout-container-natural-height);\r\n\t\toverflow: hidden;\r\n\t}\r\n\tto {\r\n\t\tmax-height: 0;\r\n\t\toverflow: hidden;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 195:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(669);
var setupCustomButtons = function setupCustomButtons() {
  var minWidth = 300;
  var maxWidth = 600;
  var minDuration = 300;
  var maxDuration = 500;
  $(window).on("resize", function () {
    $("button.btn-primary").each(function (_, btn) {
      var width = btn.offsetWidth;
      var clamped = Math.max(minWidth, Math.min(width, maxWidth));
      var duration = minDuration + (clamped - minWidth) / (maxWidth - minWidth) * (maxDuration - minDuration);
      btn.style.setProperty('--btn-primary-transition', "".concat(duration, "ms"));
    });
  });
};
module.exports = {
  setupCustomButtons: setupCustomButtons
};

/***/ }),

/***/ 297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var $ = __webpack_require__(669);
var CarouselTimeout = /*#__PURE__*/function () {
  function CarouselTimeout(items, navItems, currentIdx, timeout, $root) {
    _classCallCheck(this, CarouselTimeout);
    this.items = items;
    this.navItems = navItems;
    this.currentIdx = currentIdx;
    this.timeout = timeout;
    this.$root = $root;
  }
  return _createClass(CarouselTimeout, null, [{
    key: "init",
    value: function init() {
      return new CarouselTimeout([], [], 0, undefined, undefined);
    }
  }]);
}();
var CarouselWrapper = /*#__PURE__*/function () {
  function CarouselWrapper() {
    _classCallCheck(this, CarouselWrapper);
    _defineProperty(this, "isCarouselEnd", function ($item) {
      return $item.text().trim() === "%%CAROUSEL_END%%";
    });
    this.carouselTimeoutsMap = {};
  }
  return _createClass(CarouselWrapper, [{
    key: "initCarousels",
    value: function initCarousels() {
      var _this = this;
      $(".product-description > *").each(function (_, element) {
        var _args$autoAdvanceSp;
        var $element = $(element);
        if (!$element.text().trim().match(/\%\%CAROUSEL_START.*\%\%/)) {
          return;
        }
        var args = parseQuery($element);
        var autoAdvance = args["auto-advance"] === "true";
        var showNav = args["show-nav"] === "true";
        var showArrows = args["show-arrows"] === "true";
        var enableZoom = args["enable-zoom"] === "true";
        var pauseOnHover = args["pause-on-hover"] === "true";
        var autoAdvanceTimeoutSeconds = parseInt((_args$autoAdvanceSp = args["auto-advance-speed-s"]) !== null && _args$autoAdvanceSp !== void 0 ? _args$autoAdvanceSp : "10") || 10;
        _this.initCarousel($element, autoAdvance, autoAdvanceTimeoutSeconds, showNav, showArrows, enableZoom, pauseOnHover);
      });

      // pause auto rotations when off screen
      $(window).on("resize scroll", function () {
        $(".custom-carousel").each(function (_, el) {
          var _this$carouselTimeout;
          var $el = $(el);
          var $container = $el.find(".carousel-image-container").first();
          var isHovered = !!$container.length && $container.is('[data-carousel-zoomer-hovered="true"]');
          if (isHovered) return;
          var key = $el.attr("id");
          var currentTimeout = (_this$carouselTimeout = _this.carouselTimeoutsMap[key]) === null || _this$carouselTimeout === void 0 ? void 0 : _this$carouselTimeout.timeout;
          var inView = _this.isElementCentered($el);
          if (inView && !currentTimeout) {
            _this.resumeTimeout(key);
          } else if (!inView) {
            _this.pauseTimeout(key);
          }
        });
      });
    }
  }, {
    key: "isInViewport",
    value: function isInViewport($element) {
      var elementTop = $element.offset().top;
      var elementBottom = elementTop + $element.outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
  }, {
    key: "isElementCentered",
    value: function isElementCentered($element) {
      var rect = $element[0].getBoundingClientRect();
      var viewportCenterY = window.innerHeight / 2;
      return viewportCenterY >= rect.top - window.innerHeight / 3 && viewportCenterY <= rect.bottom + window.innerHeight / 3;
    }
  }, {
    key: "addCarousel",
    value: function addCarousel($img, $imageContainer, $navGroup, imageTimeoutKey, navItemIdx) {
      var _this2 = this;
      // const $img = $(img);
      var currentIndex = navItemIdx;
      $img.addClass("zoom-target").attr("data-carousel-selected", navItemIdx === 0 ? "true" : "false").appendTo($imageContainer);
      if ($img.is("img")) {
        this.addImageMagnifierOnHover($img, imageTimeoutKey);
      }
      var $navItem = $("<div>").addClass("nav-item").attr("data-nav-selected", navItemIdx === 0 ? "true" : "false").on("click", function () {
        _this2.updateCarousel(imageTimeoutKey, currentIndex);
      }).appendTo($navGroup);
      carouselTimeoutObject.items.push($img);
      carouselTimeoutObject.navItems.push($navItem);
      navItemIdx++;
      if (!enableZoom && !pauseOnHover) {
        $img.css({
          pointerEvents: "none"
        });
      }
    }
  }, {
    key: "initCarousel",
    value: function initCarousel($root, autoAdvance, autoAdvanceTimeoutSeconds, showNav, showArrows, enableZoom, pauseOnHover) {
      var _this3 = this;
      var imageTimeoutKey = crypto.randomUUID();

      // Init carousel stuff
      $root.html("").addClass("custom-carousel").attr("id", imageTimeoutKey).attr("data-auto-advance", autoAdvance.toString()).attr("data-auto-advance-timeout-s", autoAdvanceTimeoutSeconds.toString()).attr("data-show-nav", showNav.toString()).attr("data-show-arrows", showArrows.toString());
      var $navGroup = $("<div>").addClass("carousel-nav-group");
      var $imageContainer = $("<div>").addClass("carousel-image-container").attr("data-enable-zoom", enableZoom.toString()).attr("data-pause-on-hover", pauseOnHover.toString());
      this.addPauseAutoAdvance($imageContainer, imageTimeoutKey);

      // i got way too lazy to make a better solution for this dude
      if (!enableZoom && !pauseOnHover) {
        $imageContainer.css({
          pointerEvents: "none"
        });
      }

      // Gather all children between start and end markers
      var $current = $($root).next();
      var navItemIdx = 0;
      var carouselTimeoutObject = new CarouselTimeout([], [], 0, undefined, $root);
      while ($current.length && !this.isCarouselEnd($current)) {
        $current.find("img").each(function (_, img) {
          var $img = $(img);
          var currentIndex = navItemIdx;
          $img.addClass("zoom-target").attr("data-carousel-selected", navItemIdx === 0 ? "true" : "false").appendTo($imageContainer);
          if ($img.is("img")) {
            _this3.addImageMagnifierOnHover($img, imageTimeoutKey);
          }
          var $navItem = $("<div>").addClass("nav-item").attr("data-nav-selected", navItemIdx === 0 ? "true" : "false").on("click", function () {
            _this3.updateCarousel(imageTimeoutKey, currentIndex);
          }).appendTo($navGroup);
          carouselTimeoutObject.items.push($img);
          carouselTimeoutObject.navItems.push($navItem);
          navItemIdx++;
          if (!enableZoom && !pauseOnHover) {
            $img.css({
              pointerEvents: "none"
            });
          }
        });
        // $current.find("iframe").each((_, iframe) => addCarousel($iframe, $navGroup, imageTimeoutKey, navItemIdx));

        var $next = $current.next();
        $current.remove();
        $current = $next;
      }

      // remove the %%CAROUSEL_END%% text from the DOM
      if (this.isCarouselEnd($current)) {
        $current.remove();
      }
      this.carouselTimeoutsMap[imageTimeoutKey] = carouselTimeoutObject;

      // Prev button
      var $prevArrow = $("<div>").addClass("carousel-navigator-arrow carousel-navigator-arrow-prev").html("\n\t\t\t\t<span class=\"material-symbols-outlined\" style=\"transform: rotate(180deg);\">\n\t\t\t\t\tarrow_forward_ios\n\t\t\t\t</span>\n\t\t\t").on("click", function () {
        var _this3$carouselTimeou = _this3.carouselTimeoutsMap[imageTimeoutKey],
          currentIdx = _this3$carouselTimeou.currentIdx,
          items = _this3$carouselTimeou.items;
        if (items.length === 0) {
          return;
        }
        var newImgIdx = (currentIdx - 1) % items.length;
        newImgIdx = newImgIdx < 0 ? items.length - 1 : newImgIdx;
        _this3.updateCarousel(imageTimeoutKey, newImgIdx);
      });

      // Next button
      var $nextArrow = $("<div>").addClass("carousel-navigator-arrow carousel-navigator-arrow-next").html('<span class="material-symbols-outlined">arrow_forward_ios</span>').on("click", function () {
        var _this3$carouselTimeou2 = _this3.carouselTimeoutsMap[imageTimeoutKey],
          currentIdx = _this3$carouselTimeou2.currentIdx,
          items = _this3$carouselTimeou2.items;
        if (items.length === 0) {
          return;
        }
        var newImgIdx = (currentIdx + 1) % items.length;
        _this3.updateCarousel(imageTimeoutKey, newImgIdx);
      });
      $root.append($prevArrow, $imageContainer, $nextArrow, $navGroup);

      // start
      this.updateCarousel(imageTimeoutKey, 0);
    }
  }, {
    key: "updateCarousel",
    value: function updateCarousel(imageTimeoutKey, newIdx) {
      var _this4 = this;
      var _this$carouselTimeout2 = this.carouselTimeoutsMap[imageTimeoutKey],
        items = _this$carouselTimeout2.items,
        navItems = _this$carouselTimeout2.navItems,
        timeout = _this$carouselTimeout2.timeout;
      if (timeout) {
        clearTimeout(timeout);
      }
      items.forEach(function ($el, idx) {
        var selectedStr = (idx === newIdx).toString();
        $el.attr("data-carousel-selected", selectedStr);
        $(navItems[idx]).attr("data-nav-selected", selectedStr);
      });
      this.carouselTimeoutsMap[imageTimeoutKey].currentIdx = newIdx;
      var timeoutObject = this.carouselTimeoutsMap[imageTimeoutKey];
      var isHovered = timeoutObject.$root.attr("data-carousel-zoomer-hovered") === "true";
      var autoAdvance = timeoutObject.$root.attr("data-auto-advance") === "true";
      var autoAdvanceTimoutSeconds = parseInt(timeoutObject.$root.attr("data-auto-advance-timeout-s") || "10");
      if (!isHovered && autoAdvance) {
        this.carouselTimeoutsMap[imageTimeoutKey].timeout = setTimeout(function () {
          if (items.length === 0) {
            return;
          }
          var nextImgIdx = (newIdx + 1) % items.length;
          _this4.carouselTimeoutsMap[imageTimeoutKey].currentIdx = nextImgIdx;
          _this4.updateCarousel(imageTimeoutKey, nextImgIdx);
        }, autoAdvanceTimoutSeconds * 1000);
      }
    }
  }, {
    key: "pauseTimeout",
    value: function pauseTimeout(imageTimeoutKey) {
      var _this$carouselTimeout3;
      if (((_this$carouselTimeout3 = this.carouselTimeoutsMap[imageTimeoutKey]) === null || _this$carouselTimeout3 === void 0 ? void 0 : _this$carouselTimeout3.timeout) === undefined) {
        return;
      }
      clearTimeout(this.carouselTimeoutsMap[imageTimeoutKey].timeout);
      this.carouselTimeoutsMap[imageTimeoutKey].timeout = undefined;
    }
  }, {
    key: "resumeTimeout",
    value: function resumeTimeout(imageTimeoutKey) {
      var timeoutObject = this.carouselTimeoutsMap[imageTimeoutKey];
      if ((timeoutObject === null || timeoutObject === void 0 ? void 0 : timeoutObject.timeout) !== undefined) {
        return;
      }
      this.updateCarousel(imageTimeoutKey, timeoutObject.currentIdx);
    }
  }, {
    key: "addPauseAutoAdvance",
    value: function addPauseAutoAdvance($element, imageTimeoutKey) {
      var _this5 = this;
      $element.attr("data-carousel-zoomer-hovered", "false");
      $element.on("mouseenter", function () {
        $element.attr("data-carousel-zoomer-hovered", "true");
        if ($element.attr("data-pause-on-hover") === "false") {
          return;
        }
        _this5.pauseTimeout(imageTimeoutKey);
      });
      $element.on("mouseleave", function () {
        $element.attr("data-carousel-zoomer-hovered", "false");
        $element.css({
          transformOrigin: "center center",
          transform: "scale(1)"
        });
        _this5.resumeTimeout(imageTimeoutKey);
      });
    }
  }, {
    key: "addImageMagnifierOnHover",
    value: function addImageMagnifierOnHover($zoomerTarget, imageTimeoutKey) {
      var _this6 = this;
      var $imageContainer = $zoomerTarget.closest(".carousel-image-container");
      $zoomerTarget.on("mousemove", function (e) {
        var isHovered = $imageContainer.attr("data-carousel-zoomer-hovered") === "true";
        var shouldZoom = $imageContainer.attr("data-enable-zoom") === "true";
        if (!isHovered || !shouldZoom) {
          return;
        }
        var rect = $zoomerTarget[0].getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width * 100;
        var y = (e.clientY - rect.top) / rect.height * 100;
        $zoomerTarget.css({
          transformOrigin: "".concat(x, "% ").concat(y, "%"),
          transform: "scale(2)"
        });
      });
      $zoomerTarget.on("mouseleave", function () {
        $zoomerTarget.css({
          transformOrigin: "center center",
          transform: "scale(1)"
        });
        _this6.resumeTimeout(imageTimeoutKey);
      });
    }
  }]);
}();
if (document.body.id === "page-product") {
  $(document).ready(function () {
    var carouselWrapper = new CarouselWrapper();
    carouselWrapper.initCarousels();
  });
}
module.exports = {
  CarouselTimeout: CarouselTimeout,
  CarouselWrapper: CarouselWrapper
};

/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_carousel_manager_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_carousel_manager_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_carousel_manager_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_carousel_manager_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_carousel_manager_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./all-pages.css": 846,
	"./basis.css": 990,
	"./carousel-manager.css": 358,
	"./foldouts.css": 508,
	"./product-page.css": 605
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 474;

/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_foldouts_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(161);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_foldouts_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_foldouts_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_foldouts_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_foldouts_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var $ = __webpack_require__(669);
var initProductPageNav = function initProductPageNav() {
  var $productDescription = $(document).find("div.product-description");
  var $productDescriptionNavigation = $("<ol>").addClass("product-description-navigation");
  var $productDescriptionHeadingText = $("<h1>").text("SHORTCUTS");
  var didAddShortcuts = false;
  $productDescription.children().each(function () {
    var $element = $(this);
    if (!$element.text().includes("%%SHORTCUT_TARGET%%")) {
      return;
    } else {
      didAddShortcuts = true;
    }
    var cleanedText = $element.text().replace("%%SHORTCUT_TARGET%%", "");
    var text = cleanedText.replace(/(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDFF\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFF]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g, "") // remove emojis
    .trim().toLowerCase().replace(/\b\w/g, function (_char) {
      return _char.toUpperCase();
    });
    if (text.length === 0) {
      return;
    }
    $element.text(cleanedText);
    $element.attr("id", text).addClass("heading-link").on("click", function () {
      // const url = `${window.location.origin}${window.location.pathname}#${text}`;
      // navigator.clipboard.writeText(url);
      window.location.hash = text;
    });
    var $headerListItem = $("<li>").appendTo($productDescriptionNavigation);
    $("<a href=\"#".concat(text, "\">")).text(text).addClass("header-nav-item").appendTo($headerListItem);
    if ($productDescription.length) {
      $productDescriptionHeadingText.after($productDescriptionNavigation);
    }
  });
  if (didAddShortcuts) {
    $productDescription.prepend($productDescriptionNavigation);
    $productDescription.prepend($productDescriptionHeadingText);
  }
};
module.exports = _defineProperty({
  initProductPageNav: initProductPageNav
}, "initProductPageNav", initProductPageNav);

/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_product_page_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(752);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_product_page_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_product_page_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_product_page_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_product_page_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 669:
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ }),

/***/ 699:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) { if ("" === t) return e; var p = o[r]; return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : ""; })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != _typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var $ = __webpack_require__(669);
var isFoldoutStart = function isFoldoutStart($element) {
  return $element.text().trim().match(/\%\%FOLDOUT_START.*\%\%/);
};
var isFoldoutEnd = function isFoldoutEnd($element) {
  return $element.text().trim().match(/\%\%FOLDOUT_END.*\%\%/);
};
var parseQuery = function parseQuery($element) {
  var queryOutput = {};
  var match;
  var regex = /*#__PURE__*/_wrapRegExp(/([a-z0-9-]+)=([a-z0-9-]+)/gi, {
    key: 1,
    value: 2
  });
  while ((match = regex.exec($element.text())) !== null) {
    var _match$groups = match.groups,
      key = _match$groups.key,
      value = _match$groups.value;
    queryOutput[key] = value;
  }
  return queryOutput;
};
function measureNaturalHeight($foldoutContainer) {
  var natHeight = "".concat($foldoutContainer[0].offsetHeight, "px");
  $foldoutContainer.css("--foldout-container-natural-height", natHeight);
}
var _createFoldout = function createFoldout($rootElement) {
  var _ref, _reResults$groups, _reResults$groups2;
  var query = parseQuery($rootElement);
  var foldedOutByDefault = 'folded-out' in query && query['folded-out'] === "true";
  var FOLDOUT_TRANSITION_DURATION_STR = (_ref = 'duration' in query && query['duration']) !== null && _ref !== void 0 ? _ref : "500ms";

  // extract time and unit
  var reResults = FOLDOUT_TRANSITION_DURATION_STR.match(/*#__PURE__*/_wrapRegExp(/([0-9]+)(\w+)/, {
    time: 1,
    unit: 2
  }));
  var animDurationNumber = parseInt((reResults === null || reResults === void 0 || (_reResults$groups = reResults.groups) === null || _reResults$groups === void 0 ? void 0 : _reResults$groups.time) || "500");
  var animDurationUnit = (reResults === null || reResults === void 0 || (_reResults$groups2 = reResults.groups) === null || _reResults$groups2 === void 0 ? void 0 : _reResults$groups2.unit) || "ms";
  var $foldoutContainer = $("<div>").addClass("foldout-container").css('--anim-foldout-dura', "".concat(animDurationNumber).concat(animDurationUnit));

  // header
  var $foldoutHeader = $("<div>").addClass("foldout-header").css({
    '--anim-foldout-dura': "".concat(animDurationNumber).concat(animDurationUnit),
    pointerEvents: "all"
  }).on("click", function () {
    // toggle off header interactions
    var $header = $(this);
    var isFoldedOut = $header.attr("data-folded-out") === "true";
    $header.css({
      pointerEvents: "none"
    }).attr("data-folded-out", (!isFoldedOut).toString());

    // add animation to foldout container
    var animClassName = isFoldedOut ? "anim-foldout-in" : "anim-foldout-out";
    $foldoutContainer.removeClass(animClassName).addClass(animClassName);

    // add animation to foldout header ::before psuedo element
    // const animClassNameBefore = isFoldedOut ? "anim-foldout-before-in" : "anim-foldout-before-out";
    // $header.removeClass(animClassNameBefore).addClass(animClassNameBefore);

    // remove the class, restore pointer events, and update data attributes
    setTimeout(function () {
      $header.css({
        pointerEvents: "all"
      });
      // .removeClass(animClassNameBefore);

      $foldoutContainer.attr("data-folded-out", (!isFoldedOut).toString()).removeClass(animClassName);
    }, animDurationNumber);
  });

  // insert title
  var $titleElement = $rootElement.next();
  var $firstChildElement = $titleElement.next();
  $titleElement.appendTo($foldoutHeader);

  // add all to root
  $rootElement.html("").append($foldoutHeader, $foldoutContainer);

  // add all following children to the foldout container
  var $current = $firstChildElement;
  while ($current.length && !isFoldoutEnd($current)) {
    if (isFoldoutStart($current)) {
      _createFoldout($current);
      continue;
    }
    var $next = $current.next();
    $current.appendTo($foldoutContainer);
    $current = $next;
  }
  if (isFoldoutEnd($current)) {
    $current.remove();
  }
  var natHeight = "100vh"; //`${$foldoutContainer[0].offsetHeight * 1.25}px`;
  $foldoutContainer.css("--foldout-container-natural-height", natHeight);
  $foldoutContainer.attr("data-folded-out", foldedOutByDefault.toString());
};
module.exports = {
  isFoldoutStart: isFoldoutStart,
  isFoldoutEnd: isFoldoutEnd,
  createFoldout: _createFoldout
};

/***/ }),

/***/ 723:
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) { if ("" === t) return e; var p = o[r]; return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : ""; })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != _typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var parseQuery = function parseQuery($element) {
  var queryOutput = {};
  var match;
  var regex = /*#__PURE__*/_wrapRegExp(/([a-z0-9-]+)=([a-z0-9-]+)/gi, {
    key: 1,
    value: 2
  });
  while ((match = regex.exec($element.text())) !== null) {
    var _match$groups = match.groups,
      key = _match$groups.key,
      value = _match$groups.value;
    queryOutput[key] = value;
  }
  return queryOutput;
};
module.exports = {
  parseQuery: parseQuery
};

/***/ }),

/***/ 752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.product-details-wrapper blockquote {
	border: none !important;
	padding-left: 0 !important;
}

.heading-link {
	position: relative;
}

.heading-link:hover {
	text-decoration: underline;
	cursor: pointer;
}

.heading-link:hover::before {
	display: inline;
}

.heading-link::before {
	position: absolute;
	left: -0.85rem;
	font-weight: 100;
	content: '#';
	font-size: 1em;
	color: rgba(255,255,255,0.25);
	display: none;
}

.product-description-navigation a {
	color: var(--color-primary-light-400) !important;
}

.product-description-navigation a:hover {
	color: white !important;
}`, "",{"version":3,"sources":["webpack://./src/css/product-page.css"],"names":[],"mappings":";AACA;CACC,uBAAuB;CACvB,0BAA0B;AAC3B;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,0BAA0B;CAC1B,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,cAAc;CACd,gBAAgB;CAChB,YAAY;CACZ,cAAc;CACd,6BAA6B;CAC7B,aAAa;AACd;;AAEA;CACC,gDAAgD;AACjD;;AAEA;CACC,uBAAuB;AACxB","sourcesContent":["\r\n.product-details-wrapper blockquote {\r\n\tborder: none !important;\r\n\tpadding-left: 0 !important;\r\n}\r\n\r\n.heading-link {\r\n\tposition: relative;\r\n}\r\n\r\n.heading-link:hover {\r\n\ttext-decoration: underline;\r\n\tcursor: pointer;\r\n}\r\n\r\n.heading-link:hover::before {\r\n\tdisplay: inline;\r\n}\r\n\r\n.heading-link::before {\r\n\tposition: absolute;\r\n\tleft: -0.85rem;\r\n\tfont-weight: 100;\r\n\tcontent: '#';\r\n\tfont-size: 1em;\r\n\tcolor: rgba(255,255,255,0.25);\r\n\tdisplay: none;\r\n}\r\n\r\n.product-description-navigation a {\r\n\tcolor: var(--color-primary-light-400) !important;\r\n}\r\n\r\n.product-description-navigation a:hover {\r\n\tcolor: white !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_all_pages_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(889);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_all_pages_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_all_pages_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_all_pages_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_all_pages_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.banner__content .banner__box h1 {
	color: white !important;
}

.product-description iframe {
	border: none !important;
}

.slideshow-block .slideshow-wrapper .slideshow .slideshow-item .image-wrapper img.section-image {
	height: 100%;
	width: auto;
}

.sketchfab-embed-wrapper {
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
}

.variant-price-before-sale {
	color: rgb(150,150,150) !important;
}

.card__content:has(.badge-product-on-sale) {
  overflow: hidden;
  position: relative;
}

.product-list-block .badge-product-on-sale {
  border-radius: 0;
  transform: rotate(45deg);
  transform-origin: bottom;
  position: absolute;
  top: 0.7em;
  right: -3em;
  text-transform: uppercase;
  width: 200px !important;
  background: #ff0000;
  background: linear-gradient(
    180deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(253, 85, 29, 1) 100%
  );
  color: white !important;
  box-shadow: 0 0 10px 3px rgba(12, 12, 12, 0.7);
  padding-block: 0.35rem;
  font-size: 1.1em;
}

.section-wrapper:has(.follow-wrapper) {
  width: clamp(400px, 70%, 800px);
  margin: 1vw 0 3vw 0;
  margin-inline: auto !important;
  padding: 0 !important;
  background-color: rgba(12, 12, 12, 0.2);
  border-radius: 0.65rem;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));
}

#header .header-outer {
  padding-block: 1rem !important;
}

.card {
  transition: all 150ms;

  & .card__inner .card__media {
    transition: filter 150ms;
    border-radius: 1rem !important;
    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 35%));
  }

  & .custom-style-color-text-heading {
    font-size: 1.35rem;
  }
}

.customer-review-row {
  padding-block: 0.5em !important;
}

.customer-review-row-secondary-column,
.customer-review-row-primary-column {
  padding: 1em !important;
}

.section-background {
  background-color: transparent !important;
}

.global-background-image {
  opacity: 5% !important;
  filter: blur(8px);
}

.product-description iframe[src*="streamable"],
.product-description iframe[src*="sketchfab"] {
  width: 100% !important;
  aspect-ratio: 16 / 9;
  height: auto !important;
}

.banner-block .banner__content {
  position: relative;
}

.banner__media img {
  object-position: center -20px;
}

.banner-block .banner__box {
  width: 100% !important;
  & h1 {
    font-size: 2em;
  }
}

.banner-block .banner::after {
  display: none;
}

.banner-block .banner__content .banner__box {
  position: absolute !important;
  bottom: 0;
  padding-block: 20px;
  left: 0;
  background-color: rgba(12, 12, 12, 30%);
  backdrop-filter: blur(4px);
  min-width: 100%;
  max-width: 100%;

  &:hover .heading-text {
    scale: 105%;
  }

  & .heading-text {
    color: white !important;
    transition: scale 300ms;
    cursor: default;
  }
}

.live-search-form {
  background-color: transparent !important;
  height: auto;
  position: absolute !important;
  right: 0 !important;
  top: 25% !important;

  border-bottom: 1px solid var(--color-primary-light-200) !important;

  color: var(--color-primary-light-200) !important;

  & .live-search-input {
    color: white;
  }
}


.section-wrapper[data-section-key="about-me"]
  .icon-image-wrapper-outer
  .icon-image-wrapper-inner {
  background-color: transparent;
  border: 3px solid rgb(200, 200, 200);
  overflow: hidden;
}


#page-section-product .media-wrapper-outer {
	height: clamp(500px, 60vh, 800);
}

.product-description-navigation {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	& a {
		color: white !important;
		text-transform: none !important;
	}

	& a:hover {
		opacity: 0.85 !important;
	}
}

.header-nav-item:hover {
	text-decoration: underline;
}

.back-to-top-button {
	position: fixed;
	bottom: 20px;
	left: 20px;
	transition: background-color 200ms;
	display: grid;
	place-items: center;
	border-radius: 50%;
	z-index: 100;
	color: white !important;
	background-color: rgba(12,12,12,0.75);

	&:hover {
		color: white !important;
		text-decoration: none !important;		
	}

	& span {
		font-size: 2rem;
		padding: 0.5rem;
	}
}

.back-to-top-button:hover {
	background-color: rgba(255,255,255,0.35);
}`, "",{"version":3,"sources":["webpack://./src/css/all-pages.css"],"names":[],"mappings":"AAAA;CACC,uBAAuB;AACxB;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,wBAAwB;EACxB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB;;;;GAIC;EACD,uBAAuB;EACvB,8CAA8C;EAC9C,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,8BAA8B;EAC9B,qBAAqB;EACrB,uCAAuC;EACvC,sBAAsB;EACtB,oDAAoD;AACtD;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;;EAErB;IACE,wBAAwB;IACxB,8BAA8B;IAC9B,mDAAmD;EACrD;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,uBAAuB;AACzB;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;;EAEE,sBAAsB;EACtB,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB;IACE,cAAc;EAChB;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,SAAS;EACT,mBAAmB;EACnB,OAAO;EACP,uCAAuC;EACvC,0BAA0B;EAC1B,eAAe;EACf,eAAe;;EAEf;IACE,WAAW;EACb;;EAEA;IACE,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;EACjB;AACF;;AAEA;EACE,wCAAwC;EACxC,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;;EAEnB,kEAAkE;;EAElE,gDAAgD;;EAEhD;IACE,YAAY;EACd;AACF;;;AAGA;;;EAGE,6BAA6B;EAC7B,oCAAoC;EACpC,gBAAgB;AAClB;;;AAGA;CACC,+BAA+B;AAChC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,YAAY;;CAEZ;EACC,uBAAuB;EACvB,+BAA+B;CAChC;;CAEA;EACC,wBAAwB;CACzB;AACD;;AAEA;CACC,0BAA0B;AAC3B;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,UAAU;CACV,kCAAkC;CAClC,aAAa;CACb,mBAAmB;CACnB,kBAAkB;CAClB,YAAY;CACZ,uBAAuB;CACvB,qCAAqC;;CAErC;EACC,uBAAuB;EACvB,gCAAgC;CACjC;;CAEA;EACC,eAAe;EACf,eAAe;CAChB;AACD;;AAEA;CACC,wCAAwC;AACzC","sourcesContent":[".banner__content .banner__box h1 {\r\n\tcolor: white !important;\r\n}\r\n\r\n.product-description iframe {\r\n\tborder: none !important;\r\n}\r\n\r\n.slideshow-block .slideshow-wrapper .slideshow .slideshow-item .image-wrapper img.section-image {\r\n\theight: 100%;\r\n\twidth: auto;\r\n}\r\n\r\n.sketchfab-embed-wrapper {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n}\r\n\r\n.variant-price-before-sale {\r\n\tcolor: rgb(150,150,150) !important;\r\n}\r\n\r\n.card__content:has(.badge-product-on-sale) {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.product-list-block .badge-product-on-sale {\r\n  border-radius: 0;\r\n  transform: rotate(45deg);\r\n  transform-origin: bottom;\r\n  position: absolute;\r\n  top: 0.7em;\r\n  right: -3em;\r\n  text-transform: uppercase;\r\n  width: 200px !important;\r\n  background: #ff0000;\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(255, 0, 0, 1) 0%,\r\n    rgba(253, 85, 29, 1) 100%\r\n  );\r\n  color: white !important;\r\n  box-shadow: 0 0 10px 3px rgba(12, 12, 12, 0.7);\r\n  padding-block: 0.35rem;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.section-wrapper:has(.follow-wrapper) {\r\n  width: clamp(400px, 70%, 800px);\r\n  margin: 1vw 0 3vw 0;\r\n  margin-inline: auto !important;\r\n  padding: 0 !important;\r\n  background-color: rgba(12, 12, 12, 0.2);\r\n  border-radius: 0.65rem;\r\n  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.5));\r\n}\r\n\r\n#header .header-outer {\r\n  padding-block: 1rem !important;\r\n}\r\n\r\n.card {\r\n  transition: all 150ms;\r\n\r\n  & .card__inner .card__media {\r\n    transition: filter 150ms;\r\n    border-radius: 1rem !important;\r\n    filter: drop-shadow(8px 8px 5px rgba(0, 0, 0, 35%));\r\n  }\r\n\r\n  & .custom-style-color-text-heading {\r\n    font-size: 1.35rem;\r\n  }\r\n}\r\n\r\n.customer-review-row {\r\n  padding-block: 0.5em !important;\r\n}\r\n\r\n.customer-review-row-secondary-column,\r\n.customer-review-row-primary-column {\r\n  padding: 1em !important;\r\n}\r\n\r\n.section-background {\r\n  background-color: transparent !important;\r\n}\r\n\r\n.global-background-image {\r\n  opacity: 5% !important;\r\n  filter: blur(8px);\r\n}\r\n\r\n.product-description iframe[src*=\"streamable\"],\r\n.product-description iframe[src*=\"sketchfab\"] {\r\n  width: 100% !important;\r\n  aspect-ratio: 16 / 9;\r\n  height: auto !important;\r\n}\r\n\r\n.banner-block .banner__content {\r\n  position: relative;\r\n}\r\n\r\n.banner__media img {\r\n  object-position: center -20px;\r\n}\r\n\r\n.banner-block .banner__box {\r\n  width: 100% !important;\r\n  & h1 {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n.banner-block .banner::after {\r\n  display: none;\r\n}\r\n\r\n.banner-block .banner__content .banner__box {\r\n  position: absolute !important;\r\n  bottom: 0;\r\n  padding-block: 20px;\r\n  left: 0;\r\n  background-color: rgba(12, 12, 12, 30%);\r\n  backdrop-filter: blur(4px);\r\n  min-width: 100%;\r\n  max-width: 100%;\r\n\r\n  &:hover .heading-text {\r\n    scale: 105%;\r\n  }\r\n\r\n  & .heading-text {\r\n    color: white !important;\r\n    transition: scale 300ms;\r\n    cursor: default;\r\n  }\r\n}\r\n\r\n.live-search-form {\r\n  background-color: transparent !important;\r\n  height: auto;\r\n  position: absolute !important;\r\n  right: 0 !important;\r\n  top: 25% !important;\r\n\r\n  border-bottom: 1px solid var(--color-primary-light-200) !important;\r\n\r\n  color: var(--color-primary-light-200) !important;\r\n\r\n  & .live-search-input {\r\n    color: white;\r\n  }\r\n}\r\n\r\n\r\n.section-wrapper[data-section-key=\"about-me\"]\r\n  .icon-image-wrapper-outer\r\n  .icon-image-wrapper-inner {\r\n  background-color: transparent;\r\n  border: 3px solid rgb(200, 200, 200);\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n#page-section-product .media-wrapper-outer {\r\n\theight: clamp(500px, 60vh, 800);\r\n}\r\n\r\n.product-description-navigation {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.25rem;\r\n\r\n\t& a {\r\n\t\tcolor: white !important;\r\n\t\ttext-transform: none !important;\r\n\t}\r\n\r\n\t& a:hover {\r\n\t\topacity: 0.85 !important;\r\n\t}\r\n}\r\n\r\n.header-nav-item:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.back-to-top-button {\r\n\tposition: fixed;\r\n\tbottom: 20px;\r\n\tleft: 20px;\r\n\ttransition: background-color 200ms;\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\tborder-radius: 50%;\r\n\tz-index: 100;\r\n\tcolor: white !important;\r\n\tbackground-color: rgba(12,12,12,0.75);\r\n\r\n\t&:hover {\r\n\t\tcolor: white !important;\r\n\t\ttext-decoration: none !important;\t\t\r\n\t}\r\n\r\n\t& span {\r\n\t\tfont-size: 2rem;\r\n\t\tpadding: 0.5rem;\r\n\t}\r\n}\r\n\r\n.back-to-top-button:hover {\r\n\tbackground-color: rgba(255,255,255,0.35);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 951:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var parseQuery = __webpack_require__(723);
var setupProductPageCustomLinks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee($element) {
    var elementText, regexResult, _iterator, _step, result, _parseQuery, name, link, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          elementText = $element.text();
          regexResult = elementText.match(/%%link=.*%%/g);
          if (regexResult) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          _iterator = _createForOfIteratorHelper(regexResult);
          _context.p = 2;
          _iterator.s();
        case 3:
          if ((_step = _iterator.n()).done) {
            _context.n = 5;
            break;
          }
          result = _step.value;
          _parseQuery = parseQuery(result), name = _parseQuery.name, link = _parseQuery.link;
          if (!(!name || !link)) {
            _context.n = 4;
            break;
          }
          return _context.a(3, 4);
        case 4:
          _context.n = 3;
          break;
        case 5:
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          _iterator.e(_t);
        case 7:
          _context.p = 7;
          _iterator.f();
          return _context.f(7);
        case 8:
          return _context.a(2);
      }
    }, _callee, null, [[2, 6, 7, 8]]);
  }));
  return function setupProductPageCustomLinks(_x) {
    return _ref.apply(this, arguments);
  };
}();
module.exports = {
  setupProductPageCustomLinks: setupProductPageCustomLinks
};

/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_basis_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_basis_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_basis_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_basis_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_basis_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var $ = __webpack_require__(669);

// js files
var _require = __webpack_require__(297),
  CarouselWrapper = _require.CarouselWrapper;
var _require2 = __webpack_require__(699),
  isFoldoutStart = _require2.isFoldoutStart,
  createFoldout = _require2.createFoldout;
var _require3 = __webpack_require__(951),
  setupProductPageCustomLinks = _require3.setupProductPageCustomLinks;
var _require4 = __webpack_require__(584),
  initProductPageNav = _require4.initProductPageNav;
var _require5 = __webpack_require__(26),
  setupDiscordLink = _require5.setupDiscordLink;
var _require6 = __webpack_require__(36),
  initBackToTopButton = _require6.initBackToTopButton;
var _require7 = __webpack_require__(156),
  setupRecommendedFriends = _require7.setupRecommendedFriends,
  setupImageParallax = _require7.setupImageParallax;
var _require8 = __webpack_require__(195),
  setupCustomButtons = _require8.setupCustomButtons;
var _require9 = __webpack_require__(86),
  injectCssPost = _require9.injectCssPost;

// css files
var requireCss = __webpack_require__(474);
requireCss.keys().forEach(requireCss);
var initCustomButtonHoverEffects = function initCustomButtonHoverEffects() {
  var styleSheet = Array.from(document.styleSheets).find(function (s) {
    try {
      return s.ownerNode && s.ownerNode.textContent.includes('.btn-primary::before');
    } catch (_unused) {
      return false;
    }
  });
  if (styleSheet) {
    var _iterator = _createForOfIteratorHelper(styleSheet.cssRules),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var rule = _step.value;
        if (rule.selectorText === '.btn-primary::before') {
          rule.style.transition = 'transform var(--btn-primary-transition,250ms), color 250ms';
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};
var setupHomePageElements = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          setupRecommendedFriends();
          setupImageParallax($(".banner__media.media img"));
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function setupHomePageElements() {
    return _ref.apply(this, arguments);
  };
}();
var setupProductDescriptionPageElements = function setupProductDescriptionPageElements() {
  // carousels
  var carouselWrapper = new CarouselWrapper();
  carouselWrapper.initCarousels();

  // get children of the product description
  var $productDescriptionChildren = $(".product-description > *");

  // foldouts
  $productDescriptionChildren.each(function (_, element) {
    if (!isFoldoutStart($element)) {
      return;
    }
    createFoldout($element);
  });

  // page shortcuts
  var elementTypes = ["p", "h1", "h2", "h3", "h4", "span", "strong", "em", "italic", "underline"];
  $productDescriptionChildren.find(elementTypes.join(", ")).each(function (_, element) {
    setupProductPageCustomLinks($(element));
  });

  // navigation
  initProductPageNav();
};
$(function () {
  var pathName = window.localStorage.pathname;

  // individual pages //
  if (pathName === "/") {
    setupHomePageElements();
  }

  // product page -> '/b/123a3' //
  if (pathName.match(/\/b\/([a-zA-Z]|[0-9]){5}/)) {
    setupProductDescriptionPageElements();
  }

  // all pages //
  var initAllPageFunctions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            setupDiscordLink();
            initBackToTopButton();
            setupCustomButtons();
            initCustomButtonHoverEffects();
            injectCssPost();
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function initAllPageFunctions() {
      return _ref2.apply(this, arguments);
    };
  }();
  initAllPageFunctions();
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map