const NodeCache = require('node-cache')

module.exports = options => {
  const cache = new NodeCache(options)

  return async (ctx, next) => {
    const cacheKey = `cache${ctx.request.url}`

    const data = cache.get(cacheKey)
    if (!data) {
      await next()

      cache.set(cacheKey, ctx.response.body)

      return
    }

    ctx.body = data
  }
}
