import { closestLI } from "./closestLi.js";

function getCSSProperty(e) {
	return function (selector, propertyStr) {
		return window
			.getComputedStyle(closestLI(e)(selector))
			.getPropertyValue(propertyStr);
	};
}

function setCSSProperty(e) {
	return function (selector, propertyStr, valueStr) {
		closestLI(e)(selector).style.setProperty(propertyStr, valueStr);
	};
}

export { getCSSProperty, setCSSProperty };
