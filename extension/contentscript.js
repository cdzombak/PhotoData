
chrome.extension.onRequest.addListener(
	function(request, sender, response) {
		$(request.selector).val(request.value);
	}
);
