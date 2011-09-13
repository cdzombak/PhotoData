chrome.extension.onRequest.addListener(
	/* Takes a request with the fieldType to set and the value to set it to.
	 *
	 * request.fieldType: one of "FLICKR_TITLE", "FLICKR_DESC", "FLICKR_TAGS", "FB_DESC"
	 * request.value: any string
	 */
	function(request, sender, response) {
		if (request.fieldType == 'FLICKR_TITLE') {
			setFlickrTitles(request.value);
		} else if (request.fieldType == 'FLICKR_DESC') {
			setFlickrDescriptions(request.value);
		} else if (request.fieldType == 'FLICKR_TAGS') {
			setFlickrTags(request.value);
		} else if (request.fieldType == 'FB_DESC') {
			setFacebookDescriptions(request.value);
		} else {
			console.log("unrecognized request: " + request.fieldType)
		}
	}
);

function setFlickrTitles(val) {
	$('div.photo_title input').val(val);
}

function setFlickrDescriptions(val) {
	$('div.photo_description textarea').val(val);
}

function setFlickrTags(val) {
	$('div.photo_tags input').val(val);
}

function setFacebookDescriptions(val) {
	$('div.photo tr.tallrow input.mentionsHidden').val(val);
	$('div.photo tr.tallrow textarea').val(val);
	// that's kinda hacky, but it works! (for now)
}
