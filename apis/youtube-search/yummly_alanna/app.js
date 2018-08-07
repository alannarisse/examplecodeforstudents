
const X-Yummly-App-Key = '7c7cfa2b7aacedeb9c10fcdda90855c7';
const X-Yummly-App-ID = 'd4cc9a63';
const URL = 'http://api.yummly.com/v1';
let searchedTerm;

http://api.yummly.com/v1/api/recipes?_app_id=d4cc9a63&_app_key=7c7cfa2b7aacedeb9c10fcdda90855c7&q=almondmilk


//get data from API
function callApi(searchTerm, callback){
  const query = {
    q: searchTerm,
    _app_key: X-Yummly-App-Key,
    _app_id: X-Yummly-App-ID
  };
  searchedTerm = searchTerm;
  $.getJSON(URL, query, callback)
}

// display results in result div
function renderResult(data) {
  return`<div class='result'>
    <p>${data.matches.recipeName}</p>
    
    </div>`
}

function displayResults(data) {
  $('.js-search-results').html(data.items.map(renderResult));
}

function  watchSubmit() {
  $('form').submit((e) => {
    e.preventDefault();
    const queryTarget = $(e.currentTarget).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val('');
    callApi(query, undefined, displayResults);
    $('.js-search-results').css('visibility', 'visible');
  });
}


//display page navigation


$(watchSubmit);


