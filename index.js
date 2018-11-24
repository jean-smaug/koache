const NodeCache = require("node-cache");

module.exports = options => {
  const cache = new NodeCache(options);

  return (ctx, next) => {
    const cacheKey = `cache/${ctx.request.url}`;

    cache.get(cacheKey, async (err, data) => {
      if (err) {
        next();
        return;
      }
      if (!data) {
        await next();

        cache.set(cacheKey, ctx.response.body);

        return;
      }

      ctx.body = data;
    });
  };
};
