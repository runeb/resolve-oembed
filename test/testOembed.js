var assert = require('assert')
const getEndpoint = require('../src/getEndpoint')
const oembed = require('../src/oembed')

describe('Provider endpoint', function() {
  it('Maps URL to correct provider endpoint', () => {
    const urls = {
      'https://www.facebook.com/runeb/activity/32197831928739128': 'https://www.facebook.com/plugins/post/oembed.json',
      'https://www.facebook.com/media/set?set=something.in.here,IGuess': 'https://www.facebook.com/plugins/post/oembed.json',
      'spotify:abc321321312': 'https://embed.spotify.com/oembed/',
      'https://subdomain.flat.io/score/123': 'https://flat.io/services/oembed',
      'https://mathembed.com/latex?inputText=some%20text%20goeshere': 'http://mathembed.com/oembed'
    }

    Object.keys(urls).forEach((url) => {
      const res = getEndpoint(url)
      assert.ok(!!res, `Did not find endpoint for ${url}`)
      assert.strictEqual(res.url, urls[url])
    })
  })
})

describe('Oembed', () => {
  it('fetches oembed data for URL', async () => {
    const url = 'https://www.instagram.com/p/BwwSWVxgZ8z/'
    return oembed(url)
      .then((result) => {
        assert.ok(result, 'Expected a result')
        assert.strictEqual(result.title, 'Youth well wasted')
        assert.strictEqual(result.author_name, 'evenw')
        assert.ok(result.html.length > 0, 'Expected HTML in this response')
      })
  })

  it('resolves null for non-oembed links', async () => {
    const url = 'https://sanity.io'
    return oembed(url)
      .then((result) => {
        assert.ok(!result, 'Did not expect a result')
      })
  })
})
