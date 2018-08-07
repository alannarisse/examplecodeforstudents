const APIKEY = 'AIzaSyCbenntWUugxgjkYgwXEikdpHX1isoJspI';
const YT_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, success) {
  const query = {
    key: APIKEY,
    part: 'snippet',
    q: searchTerm,
    maxResults: 25,
  }
  $.getJSON(YT_SEARCH_URL, query, success);
}
//https:\/\/www.googleapis.com/youtube/v3/search?key=jdfjkhjkdfsg&part=snippet&q='banana'&maxResults=25
// about getJSON https://www.sitepoint.com/ajaxjquery-getjson-simple-example/

function renderResult(result) {
  return `
    <div class='result'>
    <a href='https://www.youtube.com/watch?v=${result.id.videoId}' target='_blank' class='thumbnail' role='link'>
    <img src='${result.snippet.thumbnails.medium.url}' class='thumbs' alt='video thumbnail'></a>
    <p class='caption'>${result.snippet.title}</p>
    <p>Channel ID: ${result.snippet.channelId}<br>
    Channel Title: ${result.snippet.channelTitle}<br>
    Description: ${result.snippet.description}
    </p></div>
  `;
}
// search properties https://developers.google.com/youtube/v3/docs/search


function displayYTSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayYTSearchData);
  });
}

$(watchSubmit);
