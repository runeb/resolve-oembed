const getEndpoint = require('./getEndpoint')
const request = require('superagent')

const oembed = (url, options = { format: 'json' }) => {
  const endpoint = getEndpoint(url)

  if (!endpoint) {
    return Promise.resolve(null)
  }

  const params = Object.assign(options, {
    url
  })

  return request.get(endpoint.url)
    .query(params)
    .set('User-Agent', 'resolve-oembed')
    .then(res => res.body)
}

module.exports = oembed