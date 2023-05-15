document.addEventListener("DOMContentLoaded", () => {
	const scenes = [
		"scene-default.swf",
		"scene-halloween.swf",
		"scene-penguingames.swf",
		"scene-holiday.swf",
		// Add more scene file names as needed
	];

	const randomIndex = Math.floor(Math.random() * scenes.length);
	const randomScene = scenes[randomIndex];

	document.getElementById("scene").innerHTML = `
			<object width="100%" height="100%" data="../home_scenes/${randomScene}">
				<param name="movie" value="../home_scenes/${randomScene}">
				<param name="quality" value="high">
				<embed src="../home_scenes/${randomScene}" width="100%" height="100%" type="application/x-shockwave-player">
			</object>
		`;
});