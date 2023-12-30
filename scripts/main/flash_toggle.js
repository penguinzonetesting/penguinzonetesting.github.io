document.addEventListener("DOMContentLoaded", () => {
	function isElectron() {
		return (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer')
			|| (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron)
			|| (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0);
	}


	const scene_container = document.getElementById('scene_container');
	const no_flash = document.getElementById('noflash');

	if (isElectron() || swfobject.hasFlashPlayerVersion("1")) {
		console.log("Electron Found");
		scene_container.style.display = "";
		no_flash.style.display = "";
	} else {
		console.log("Electron Not Found");
		scene_container.style.display = "none";
		no_flash.style.display = "flex"
	}
});