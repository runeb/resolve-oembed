# resolve-oembed

## Usage
async module for resolving oembed data for URLs

```javascript
const oembed = require('resolve-oembed')

async function run() {
  await oembed('https://www.instagram.com/p/BwwSWVxgZ8z/').then(console.log)
  // non-oembed URLs resolve to null
  await oembed('https://sanity.io').then(console.log) // => null
}

run()
```

## Providers
This module uses a local copy of the list of providers at https://oembed.com/providers.json
