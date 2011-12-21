String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

function isFlickrUrl(url) {
	return url.contains('flickr.com/photos/upload/done');
}

function isFacebookUrl(url) {
	// Facebook's new mass photo upload interface is a div.fbPhotoBulkEditor that appears over the current page.
	// Sadly, it does not have a distinct URL, so to support it we must treat *all* FB pages as potential upload pages.
	
	return url.contains('facebook.com/');
}

function isEditPage(url) {
	return isFlickrUrl(url) || isFacebookUrl(url);
}
