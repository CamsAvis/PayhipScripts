const $ = require('jquery');

const injectCssPost = () => {
	$("<style>")
		.appendTo("head")
		.text(/*css*/`
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
	`);
}

module.exports = {
	injectCssPost
}