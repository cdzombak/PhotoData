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
	// support old-style album editing interface
	$('div#editphotoalbum span.highlighterContent').text(val);
	$('div#editphotoalbum input.mentionsHidden').val(val);
	$('div#editphotoalbum textarea').val(val);
	
	// support the new uploader (div.fbPhotoBulkEditor)
	$('div.captionArea span.highlighterContent').text(val);
	$('div.captionArea input.mentionsHidden').val(val);
	$('div.captionArea textarea').val(val);
}
