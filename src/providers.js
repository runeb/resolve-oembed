let rawProviders = require('./providers.json')

// Turns endpoint schema entries into regexps
const providers = rawProviders.map((p) => {
  p.endpoints = p.endpoints.map((e) => {
    if (e.schemes) {
      e.schemes = e.schemes.map((s) => {
        let str = s.replace(/\?/gi, '\\?')
        str = str.replace(/(http|https)/, '^https?')
        str = str.replace(/\./g, '\\.')
        str = str.replace(/\*/gi, '.*')
        return new RegExp(str)
      })
    }
    return e
  })
  return p
})

module.exports = providers
