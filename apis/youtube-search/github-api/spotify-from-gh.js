const SPOTIFY_OAUTH = 'BQBGyFGNHa4JcBWpnBzwhrAZiDwLNF7tK';
const SPOTIFY_URL = 'https://api.spotify.com/v1/artists';

function getDataFromApi(searchTerm, callback) {
  const query = {
    artists: searchTerm,
    oath: SPOTIFY_OAUTH,
  }
  $.getJSON(SPOTIFY_URL, query, callback);
}

function renderResult(result) {
  return `
    <div>
<p>Name: ${results.name}<br/>
</p>
    </div>
  `;
}

function displaySpotifySearchData(data) {
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
    getDataFromApi(query, displaySpotifySearchData);
  });
}

$(watchSubmit);
