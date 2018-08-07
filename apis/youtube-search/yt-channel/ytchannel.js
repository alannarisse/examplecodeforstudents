// youtube.js
var channelName = 'UCvjgXvBlbQiydffZU7m1_aw';

$(document).ready(function(){
	$.get(
		"GET https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails',
			forUserName: channelName,
			key: 'AIzaSyCbenntWUugxgjkYgwXEikdpHX1isoJspI'},
			function(data){
				$.each(data.items, function(i, item){
					console.log(item);

				})
			}
		);


})

