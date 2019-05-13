const getEndpoint = require('./getEndpoint')
const rp = require('request-promise')

const oembed = (url, options = { format: 'json' }) => {
  const endpoint = getEndpoint(url)

  if (!endpoint) {
    return Promise.resolve(null)
  }

  const params = Object.assign(options, {
    url
  })

  return rp({
    uri: endpoint.url,
    qs: params,
    headers: {
      'User-Agent': 'resolve-oembed'
    },
    json: params.format === 'json'
  })
}

module.exports = oembed