import { scrollLIIntoView } from "./scroll.js";
import { closestLI } from "./closestLi.js";

function observeIntersection() {
	const list = document.querySelector(".list");
	const listItems = list.childNodes;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				entry.target.classList.toggle("is-intersecting", !entry.isIntersecting);
			});

			list.addEventListener("click", focusOnEntry);

			function focusOnEntry(e) {
				if (
					e.target.matches(
						".collapsible, .block, .redirect, .redirect-url, .url-button"
					)
				) {
					setTimeout(() => {
						if (closestLI(e)().classList.contains("is-intersecting")) {
							scrollLIIntoView(closestLI(e)());
						}
					}, 410);
				}
			}
		},
		{
			threshold: 1,
		}
	);
	setTimeout(() => {
		listItems.forEach((li) => {
			observer.observe(li);
		});
	});
}

export { observeIntersection };
