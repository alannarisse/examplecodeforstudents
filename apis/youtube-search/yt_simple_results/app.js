function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    const params = {
        part: 'snippet',
        key: 'AIzaSyCbenntWUugxgjkYgwXEikdpHX1isoJspI',
        q: searchTerm
    };
  
    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    let list = "";
    let returnedItems = results.items;
    
    // jquery for each
    $.each(returnedItems, function (index, value) {
        list += value.snippet.title + '<br>';
        list += '<img src="' + value.snippet.thumbnails.default.url + '"><br><br>';
    }); 
    
    $('#search-results').html(list);
}

$('#search-term').submit(function (event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
});

