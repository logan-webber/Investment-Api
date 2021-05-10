import request from 'superagent'

const baseUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/'
const symbol = 'AMC'

const settings = {
	// "async": true,
	// "crossDomain": true,
	url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/",
	// "method": "GET",
	headers: {
		"x-rapidapi-key": "20d0546455msh063453ff8acb61fp17fb6ajsn286d50e62a0e",
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
	}
};


// ajax(settings).done(function (response) {
// 	console.log(response);
// });

export function getSummary () {
  return request.get(settings.url + 'get-summary?symbol=' + symbol + '&regionUS')
  .then(res => res.body)
}

// export function getSummary () {
// 	return request.get(baseUrl + 'get-summary?symbol=' + symbol + '&regionUS')
// 	  .then(res => res.body)
//   }
