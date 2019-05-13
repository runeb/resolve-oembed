# resolve-oembed

async module for resolving oembed data for URLs

```javascript
const oembed = require('resolve-oembed')

async function run() {
  await oembed('https://www.instagram.com/p/BwwSWVxgZ8z/').then(console.log)
}

run()
```
