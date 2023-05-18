document.addEventListener("DOMContentLoaded", () => {
	function isElectron() {
		// Renderer process
		if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
			return true;
		}

		// Main process
		if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
			return true;
		}

		// Detect the user agent when the `nodeIntegration` option is set to true
		if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
			return true;
		}

		return false;
	}

	const container = document.getElementById('play_container');
	const no_flash = document.getElementById('noflash');
	const left_navbar = document.getElementById('left-navbar');
	const right_navbar = document.getElementById('right-navbar');

	if (isElectron() || swfobject.hasFlashPlayerVersion("1")) {
		container.style.display = "flex";
		no_flash.style.display = "nome";
		left_navbar.style.paddingRight = "0";
		right_navbar.style.display = "flex";
	} else {
		container.style.display = "none";
		no_flash.style.display = "flex"
		left_navbar.style.paddingRight = "20.5rem";
		right_navbar.style.display = "none";
	}
});