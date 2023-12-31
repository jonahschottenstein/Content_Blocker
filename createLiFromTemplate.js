// SHOULD PROB BE 'LI'
// SHOULD PROB NOT HAVE THE FUNCTIONS ALL TOGETHER
function createLIFromTemplate(liInputVal) {
	const template = document.querySelector("template");
	const newLI = template.content.querySelector("li").cloneNode(true);
	// SHOULD CHANGE ".toggle" TO ".collapsible"
	const setCollapsibleInputID = () => {
		const allCollapsibles = document.querySelectorAll(".toggle");
		const collapsible = newLI.querySelector(".collapsible");
		collapsible.setAttribute("id", `collapsible-${allCollapsibles.length}`);
	};
	setCollapsibleInputID();

	const setCollapsibleLabelForValue = () => {
		const allCollapsibleLabels =
			document.querySelectorAll(".collapsible-label");
		const collapsibleLabel = newLI.querySelector(".collapsible-label");
		collapsibleLabel.setAttribute(
			"for",
			`collapsible-${allCollapsibleLabels.length}`
		);
	};
	setCollapsibleLabelForValue();

	const setCollapsibleLabelTextContent = (liInputVal) => {
		newLI.querySelector(".blocked-string").textContent = liInputVal;
	};
	setCollapsibleLabelTextContent(liInputVal);

	const setBlockRadioInputValues = () => {
		const allBlockRadioInputs = document.querySelectorAll(".block");
		const blockRadioInput = newLI.querySelector(".block");
		blockRadioInput.setAttribute("id", `block-${allBlockRadioInputs.length}`);
		blockRadioInput.setAttribute(
			"name",
			`options-${allBlockRadioInputs.length}`
		);
	};
	setBlockRadioInputValues();

	const setBlockRadioLabelForValue = () => {
		const allBlockRadioLabels = document.querySelectorAll(".block-radio-label");
		const blockRadioLabel = newLI.querySelector(".block-radio-label");
		blockRadioLabel.setAttribute("for", `block-${allBlockRadioLabels.length}`);
	};
	setBlockRadioLabelForValue();

	const setRedirectRadioInputValues = () => {
		const allRedirectRadioInputs = document.querySelectorAll(".redirect");
		const redirectRadioInput = newLI.querySelector(".redirect");
		redirectRadioInput.setAttribute(
			"id",
			`redirect-${allRedirectRadioInputs.length}`
		);
		redirectRadioInput.setAttribute(
			"name",
			`options-${allRedirectRadioInputs.length}`
		);
	};
	setRedirectRadioInputValues();

	const setRedirectRadioLabelForValue = () => {
		const allRedirectRadioLabels = document.querySelectorAll(
			".redirect-radio-label"
		);
		const redirectRadioLabel = newLI.querySelector(".redirect-radio-label");
		redirectRadioLabel.setAttribute(
			"for",
			`redirect-${allRedirectRadioLabels.length}`
		);
	};
	setRedirectRadioLabelForValue();

	return newLI;
}

export { createLIFromTemplate };
