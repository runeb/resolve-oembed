const rp = require('request-promise')

const providers = async () => {
  return rp('https://oembed.com/providers.json')
    .then(json => JSON.parse(json))
}

module.exports = providers
