const providers = require('./providers.js')

const getEndpoint = (url) => {
  let endpoint = null
  providers.some((provider) => {
    endpoint = provider.endpoints.find((e) => {
      let found = false
      if (e.schemes) {
        found = e.schemes.find((scheme) => {
          return url.match(scheme)
        })
      } else {
        const u = new URL(e.url)
        return u.host === new URL(url).host
      }

      return found
    })
    return !!endpoint
  })
  return endpoint
}

module.exports = getEndpoint
