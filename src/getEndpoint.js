const providers = require('./providers.js')

const getEndpoint = (url) => {
  let endpoint = null
  providers.some((provider) => {
    endpoint = provider.endpoints.find((endpoint) => {
      let found = false
      if (endpoint.schemes) {
        found = endpoint.schemes.find((scheme) => {
          return url.match(scheme)
        })
      }
      return found
    })
    return !!endpoint
  })
  return endpoint
}

module.exports = getEndpoint
