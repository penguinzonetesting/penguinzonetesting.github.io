document.addEventListener("DOMContentLoaded", () => {
	function rotateText(lines) {
		const rotatingText = document.getElementById("rotating-text");

		if (lines.length === 1) {
			rotatingText.textContent = lines[0];
			rotatingText.style.opacity = "1";
			rotatingText.style.animationIterationCount = "0";
			return; // Exit the function since there's only one line
		}

		let index = 0;

		rotatingText.addEventListener("animationiteration", updateText);

		function updateText() {
			rotatingText.textContent = lines[index];
			index = (index + 1) % lines.length; // Increment index and loop back to 0 when reaching the last line
		}

		// Manually call updateText on animationstart
		updateText();
	}

	// Fetch JSON data and start scrolling text
	fetch("splashtexts.json")
		.then((response) => response.json())
		.then((data) => {
			const lines = data.lines;
			rotateText(lines);
		})
		.catch((error) => {
			console.error("Error fetching JSON data:", error);
		});
});