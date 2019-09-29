$(document).ready(function() {
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "1v8zymxUad83XdU3oURAombSVBrCfCd4",
		tag: "fail",
		type: "random",
		rating: "pg-13"
    };
    
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		// Set gif to an img element
        $("#gif-div").css("background-image", 'url("' + _giphy.image_original_url + '")');
        $('#link-div').attr('href', _giphy.image_original_url);
    };

	// Call Giphy API for new gif
	newGif();
	
	$('#btn-new-gif').click(newGif)
});