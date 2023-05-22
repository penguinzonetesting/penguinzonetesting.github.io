document.addEventListener("DOMContentLoaded", () => {
	DisableDevtool({
		ondevtoolopen: (type, next) => {
			next();
		},
	})
});