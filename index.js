const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 10, checkperiod: 10 });

module.exports = (ctx, next) => {
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
