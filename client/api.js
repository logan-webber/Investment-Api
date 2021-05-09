import request from 'superagent'

const baseUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/'
const symbol = 'AMC'

export function getSummary () {
  return request.get(baseUrl + 'get-summary?symbol=' + symbol + '&regionUS')
    .then(res => res.body)
}
