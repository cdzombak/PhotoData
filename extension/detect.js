String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

function isFlickrUrl(url) {
	return url.contains('flickr.com/photos/upload/done');
}

function isFacebookUrl(url) {
	return url.contains('facebook.com/editphoto.php');
}

function isEditPage(url) {
	return isFlickrUrl(url) || isFacebookUrl(url);
}
