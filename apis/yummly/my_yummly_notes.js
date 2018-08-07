http endpoint http://api.yummly.com/v1 or https://api.yummly.com/v1

search api

get api

The data returned by the API is encoded as JSON (Content-Type: application/json)
The API calls listed below also support JSONP (Content-Type: text/javascript) 

X-Yummly-App-ID:app-id
X-Yummly-App-Key:app-key

The base url for the Search Recipes GET is http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters

Some of the parameters support passing multiple values; in these cases, we follow the AJAX convention: param[]=value1&param[]=value2&…