﻿document.addEventListener("DOMContentLoaded", () => {
	function isElectron() {
		return (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer')
			|| (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron)
			|| (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0);
	}


	const container = document.getElementById('play_container');
	const no_flash = document.getElementById('noflash');
	const inner_header = document.getElementById('inner-header');
	const right_navbar = document.getElementById('right-navbar');

	if (isElectron() || swfobject.hasFlashPlayerVersion("1")) {
		container.style.display = "";
		no_flash.style.display = "";
		inner_header.style.display = "";
		inner_header.style.justifyContent = "";
		inner_header.style.width = "";
		right_navbar.style.display = "";
	} else {
		container.style.display = "none";
		no_flash.style.display = "flex"
		inner_header.style.display = "flex";
		inner_header.style.justifyContent = "space-between";
		inner_header.style.width = "50%";
		right_navbar.style.display = "none";
	}
});