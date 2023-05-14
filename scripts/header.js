document.addEventListener("DOMContentLoaded", () => {
	function scrollText(lines) {
		const scrollingText = document.getElementById("scrolling-text");

		if (lines.length === 1) {
			scrollingText.textContent = lines[0];
			scrollingText.style.opacity = "1";
			scrollingText.style.animationIterationCount = "0";
			return; // Exit the function since there's only one line
		}

		let index = 0;

		scrollingText.addEventListener("animationiteration", updateText);

		function updateText() {
			scrollingText.textContent = lines[index];
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
			scrollText(lines);
		})
		.catch((error) => {
			console.error("Error fetching JSON data:", error);
		});
});