
String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

function isFlickrUpload(url) {
	return url.contains('flickr.com/photos/upload/done');
}

function isFacebookUpload(url) {
	return url.contains('facebook.com/editphoto.php');
}

function isUploadPage(url) {
	return isFlickrUpload(url) || isFacebookUpload(url);
}


function getFlickrDescriptionSelector() {
	return 'div.photo_description textarea';
}

function getFlickrTitleSelector() {
	return 'div.photo_title input';
}

function getFlickrTagsSelector() {
	return 'div.photo_tags input';
}

function getFacebookDescriptionSelector() {
	return 'div.photo tr.tallrow textarea';
}
