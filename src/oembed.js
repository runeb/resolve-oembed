const getEndpoint = require('./getEndpoint')
const rp = require('request-promise')
const queryString = require('query-string')

const oembed = (url, options = {}) => {
  const endpoint = getEndpoint(url)

  if (!endpoint) {
    return Promise.resolve(null)
  }

  const params = Object.assign({
    url,
    format: 'json'
  }, options)

  const endpointUrl = `${endpoint.url}?${queryString.stringify(params)}`
  return rp(endpointUrl).then(result => JSON.parse(result))
}

module.exports = oembed