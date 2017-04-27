function click(e) {
	chrome.tabs.executeScript(null,
		{code:"document.body.style.backgroundImage='url(" + images[e.target.id] + "'"})
	window.close()
}